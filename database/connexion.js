const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
});




try {
    database.authenticate();
    console.log('Connected to MySQL database!')
} catch (error) {
    console.error('Unable to connect to MySQL database:', error);
}


module.exports = database;









