import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {
  private apiUrl = 'http://localhost:3000/category'
  private apiUrl2 = 'http://localhost:5135/api/Category'
  constructor(private http: HttpClient) { }

  private categorySubject = new BehaviorSubject<string | null>(null);
  callcategory = this.categorySubject.asObservable();

  setCategory(category: string) {
    this.categorySubject.next(category);
  }

  getMoviesCategory(Category: any): Observable<any>{
    return this.http.get(`${this.apiUrl2}/Movies`, {
      params: { Category }
    });
  }

  getSeriesCategory(Category: any): Observable<any>{
    return this.http.get(`${this.apiUrl2}/Series`, {
      params: { Category }
    });
  };
}
