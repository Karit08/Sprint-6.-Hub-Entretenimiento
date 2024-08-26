const {sql, poolPromise} = require('D:/Usuario Cat/Desktop/PPXP/Practicas-Angular/Empire_movies/empire_movies-a/Server/app/models/DB.js');


exports.getMovies = async(req,res) =>{
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .query(`
            SELECT * FROM movies;
            `)
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500).send({ message: 'Error fetching movies', error: error.message });
    }
}

exports.getSeries = async(req,res) =>{
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .query(`
            SELECT * FROM Series;
            `)
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500).send({ message: 'Error fetching movies', error: error.message });
    }
}