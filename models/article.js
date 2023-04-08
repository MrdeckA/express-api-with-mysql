const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/connexion');


module.exports = db.define('Article', {
    categorie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    prix_promo: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}
);


