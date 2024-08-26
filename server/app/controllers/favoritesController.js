const {sql, poolPromise} = require('D:/Usuario Cat/Desktop/PPXP/Practicas-Angular/Empire_movies/empire_movies-a/Server/app/models/DB.js');

exports.getFavorites = async(req, res) => {
    const {ID_User} = req.query
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .input('ID_User', sql.Int, ID_User)
        .query(`
            
            SELECT 
                f.ID_Favorites, 
                f.ID_User,
                p.ID_Movie, 
                s.ID_Series, 
                CASE 
                    WHEN p.ID_Movie IS NOT NULL THEN 'movies'
                    WHEN s.ID_Series IS NOT NULL THEN 'Series'
                END AS ContentType,
                COALESCE(p.Title, s.Title) AS Title,
                COALESCE(p.M_Description, s.S_Description) AS M_Description,
                COALESCE(p.Category, s.Category) AS Category,
                COALESCE(p.M_Length, s.S_Length) AS M_Length,
                COALESCE(p.URL_img, s.URL_img) AS URL_img
            FROM 
                favorites f
            LEFT JOIN 
                movies p ON f.ID_Movie = p.ID_Movie
            LEFT JOIN 
                Series s ON f.ID_Series = s.ID_Series
            WHERE 
                f.ID_User = @ID_User;

            `)

        res.status(200).send({message: 'Datos de favoritos obtenidos', data: result.recordset});
    } catch (error) {
        res.status(500).json({ message: 'Error Get Favorites', error: error.message });
    }
}

exports.AddFavorites = async(req, res) =>{
    const {ID_User, ID_Movie, ID_Series} = req.body
    console.log(req.body)
    try {
        const pool = await poolPromise
        const result  = await pool.request()
        .input('ID_User', sql.Int, ID_User)
        .input('ID_Movie', sql.Int,ID_Movie || null)
        .input('ID_Series', sql.Int,ID_Series || null)
        .query(`
            INSERT INTO favorites(ID_User, ID_Movie, ID_Series)
            VALUES(@ID_User,@ID_Movie,@ID_Series)
            `)
        res.status(200).send({message: 'Datos de favoritos obtenidos', data: result});
    } catch (error) {
        res.status(500).json({ message: 'Error add Movie to favorites', error: error.message });
    }
}

exports.deletefavorites = async(req,res) =>{
    const {ID_User, ID_Movie, ID_Series} = req.body
    console.log(req.body)
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .input('ID_User', sql.Int, ID_User)
        .input('ID_Movie', sql.Int,ID_Movie || null)
        .input('ID_Series', sql.Int,ID_Series || null)
        .query(`
            
            DELETE FROM favorites
            where ID_User = @ID_User AND
            ((ID_Movie IS NOT NULL AND ID_Movie = @ID_Movie) OR
            (ID_Series IS NOT NULL AND ID_Series = @ID_Series))
            
            `)
        res.status(200).send({message: 'Datos de favoritos eliminados', data: result});
    } catch (error) {
        res.status(500).json({ message: 'Error delete media to favorites', error: error.message });
    }
}
