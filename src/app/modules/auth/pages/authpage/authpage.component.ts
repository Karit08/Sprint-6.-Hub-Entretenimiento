import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@modules/auth/services/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css'
})

export class AuthpageComponent implements OnInit{

  change_view: boolean = false;
  formUserRegister: FormGroup = new FormGroup({});
  formUserLogin: FormGroup = new FormGroup({});
  alertRegisterCorrect: boolean = true;
  tokensesion: string = '';

  items_select: Array<any> = [
    {value: 'Accion', viewValue: 'Accion'},
    {value: 'Animacion', viewValue: 'Animacion'},
    {value: 'Aventura', viewValue: 'Aventura'},
    {value: 'Disparos', viewValue: 'Disparos'},
    {value: 'Catastrofe', viewValue: 'Catastrofe'},
    {value: 'Ciencia Ficcion', viewValue: 'Ciencia Ficcion'},
    {value: 'Comedia', viewValue: 'Comedia'},
    {value: 'Crimen', viewValue: 'Crimen'},
    {value: 'Deportes', viewValue: 'Deportes'},
    {value: 'Documentales', viewValue: 'Documentales'},  
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Epicas', viewValue: 'Epicas'},
    {value: 'Fantasia', viewValue: 'Fantasia'},
    {value: 'Futurista', viewValue: 'Futurista'},
    {value: 'Historico', viewValue: 'Historico'},
    {value: 'Musical', viewValue: 'Musical'},
    {value: 'Religion', viewValue: 'Religion'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Suspenso', viewValue: 'Suspenso'},
    {value: 'Terror', viewValue: 'Terror'},
  ]
  get name(){
    return this.formUserRegister.get('U_Name');
  }

  get mail(){
    return this.formUserRegister.get('mail');
  }

  get password(){
    return this.formUserRegister.get('U_password');   // Gets para alerts
  }

  get preferences(){
    return this.formUserRegister.get('preferences');
  }

  get mailLogin(){
    return this.formUserLogin.get('Mail');
  }

  get passwordLogin(){
    return this.formUserLogin.get('U_password');
  }

  constructor(public router: Router, private userService: UserService, private fr: FormBuilder , private cookie: CookieService){}

  ngOnInit(): void {
      this.formUserRegister = this.fr.group({
      'U_Name': new FormControl('', Validators.required),
      'mail': new FormControl('',[Validators.required, Validators.email]), // Grupo de formulario con validaciones para el registro de usuarios
      'U_password': new FormControl('',Validators.required),
      'preferences': new FormControl('', Validators.required)
    });

    this.formUserLogin = this.fr.group({
      'Mail': new FormControl('', [Validators.required, Validators.email]),
      'U_password': new FormControl('', Validators.required)
    })
  }

  registerView(){
    this.change_view = !this.change_view  //Cambio de vista entre el registro y el inicio de sesion
    console.log(this.change_view);
  }

  registerUser(){ //uso del servicio para registros de usuarios nuevos
    if (this.formUserRegister.valid){

      const userData = this.formUserRegister.value
      this.userService.registerService(userData).subscribe(response =>{
        console.log('usuario registrado con exito', response);
      }, error =>{
        console.error('Registration error:', error);
      });

      this.alertRegisterCorrect = !this.alertRegisterCorrect
      setTimeout(() => {
        this.alertRegisterCorrect = !this.alertRegisterCorrect // alerta
      }, 2000);
      this.formUserRegister.reset();
    }
  }

  loginUser(){  // Uso del servicio para iniciar sesion
    const userData = this.formUserLogin.value
    this.userService.loginservice(userData).subscribe(response =>{
      this.tokensesion = response;
      this.cookie.set('token', this.tokensesion, 15 / (24 * 60),'/')  // cookie del token
      this.router.navigate(['/','movies'])
    },error =>{
      console.log('Inicio de sesion invalido', error);
    })
  }
}
