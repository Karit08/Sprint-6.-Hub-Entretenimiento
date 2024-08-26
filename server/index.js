const express = require('express');
const {sql, poolPromise} = require('./app/db');
const bycript = require('bcrypt');
const cors = require('cors');
const userRoutes = require('./app/routes/users_routes');
const mediaRoutes = require('./app/routes/MediaRoutes');
const favoritesRoutes = require('./app/routes/favoritesRoute');
const categoriasMedia = require('./app/routes/CategoryRoute');
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/register', userRoutes);
app.use('/movies', mediaRoutes);
app.use('/favorites',favoritesRoutes);
app.use('/category',categoriasMedia);

app.use('/img', express.static(path.join(__dirname, 'app/img')));

const PORT = process.env.PORT || 3000; 

app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`)
});
