const {sql, poolPromise} = require('D:/Usuario Cat/Desktop/PPXP/Practicas-Angular/Empire_movies/empire_movies-a/Server/app/models/DB.js');

exports.GetMoviesCategory = async(req, res) => {
    const {Category} = req.query
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .input('Category', sql.NVarChar, Category)
        .query(`
            
                SELECT * FROM movies
                WHERE Category = @Category
            
            `)
        res.status(200).send({message: 'Peliculas de la categoria obtenidas con exito', data: result.recordset});    
    } catch (error) {
        res.status(500).json({ message: 'Error Get Categorys', error: error.message });
    }
}


exports.GetSeriesCategory = async(req, res) => {
    const{Category} = req.query
    try {
        
        const pool = await poolPromise;
        const result = await pool.request()
        .input('Category', sql.NVarChar, Category)
        .query(`
                
                SELECT * FROM Series
                WHERE Category = @Category
                
            `)
        res.status(200).send({message: 'Series de la categoria obtenidas con exito', data: result.recordset}); 
    } catch (error) {
        res.status(500).json({ message: 'Error Get Categorys', error: error.message });
    }
}