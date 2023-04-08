const db = require('./connexion');
const article = require('../models/article');
const { DataTypes } = require('sequelize');



db.sync({force: false}).then(() => {
    console.log('Database & tables created!');
}).catch((error) => {
    console.log('eroor with tables creation' + error);
});
