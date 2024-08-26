const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {sql, poolPromise} = require('D:/Usuario Cat/Desktop/PPXP/Practicas-Angular/Empire_movies/empire_movies-a/Server/app/models/DB.js');

exports.register = async(req, res) => {
    console.log("Received data:", req.body);
    const {userName, mail, password, preferences} = req.body;
    try {

        const pool = await poolPromise;
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.request()
            .input('U_Name', sql.NVarChar, userName)  
            .input('Mail', sql.NVarChar, mail)
            .input('U_password', sql.NVarChar,hashedPassword)
            .input('Preferences',sql.NVarChar, preferences)
            .query(`

                INSERT INTO users (U_Name, Mail, U_password, Preferences)
                VALUES (@U_Name, @Mail, @U_Password, @Preferences);

                `)
            res.status(201).send({message: 'user adding succesfully', data: result});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.login = async(req, res) =>{
    const {mailLogin, passwordLogin} = req.body
    try{
        const pool = await poolPromise;
        const result = await pool.request()
        .input('Mail', sql.NVarChar,mailLogin)
        .query(`

            SELECT * FROM users where Mail = @mail;

            `)
        const user = result.recordset[0];
        if(!user || !(await bcrypt.compare(passwordLogin, user.U_password))){     // comparacion de las credenciales ingresadas con la DB
            return res.status(401).json({message: 'Credenciales incorrectas '});
        }

        const token = jwt.sign({id: user.ID_User, name: user.U_Name}, process.env.JWT_SECRET,{expiresIn: '1h'});
        return res.status(200).json({token});

    }catch(error){
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
}

