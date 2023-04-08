const { Sequelize } = require('sequelize');

const database = new Sequelize('ags', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    path: 'database/database.sql'
});




try {
    database.authenticate();
    console.log('Connected to MySQL database!')
} catch (error) {
    console.error('Unable to connect to MySQL database:', error);
}


module.exports = database;









