const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const articleRouter = require('./routes/article');
const database = require('./database/connexion');
app.use(express.json());




//connexion à la base de données
/*
const db = database.connexion();

db.define('article', articleModel);
db.sync({force: false}).then(() => {
    console.log('Database & tables created!');
}).catch((error) => {
    console.log('eroor with tables creation' + error);
});

*/


app.use(cors());
app.use('/api/articles', articleRouter);
app.use(express.static(path.join(__dirname, '/assets/images')));






module.exports = app;