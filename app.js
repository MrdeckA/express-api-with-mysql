const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const articleRouter = require('./routes/article');



//connexion à la base de données


app.use(cors());
app.use('/api/articles', articleRouter);
app.use(express.static(path.join(__dirname, '/assets/images')));






module.exports = app;