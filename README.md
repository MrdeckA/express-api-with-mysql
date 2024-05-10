# Express.JS API with MySQL Database Starter Kit

## Express.JS API Starter Kit with MySQL and Sequelize

This is an open-source starter kit for building an Express API with a MySQL database using the Sequelize ORM. It implements CRUD methods for a resource named Articles and follows the MVC architecture.

## Author

- [Mériadeck AMOUSSOU](https://github.com/mrdecka)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MySQL server running on your machine


### Installation

1. Clone this repository

2. Navigate to the project directory

3. Install the dependencies

5. Create new file named `.env`

6. Copy the contents of the `.env.example` file to `.env` file

7. Update the `.env` file with your database configurations.

5. Run the migrations to create the required tables in your database




### Usage

- `npm start` - Start the server
- `npm run dev` - Start the server in development mode with Nodemon
- `npm run migrate` - Run the database migrations
- `npm test` - Run tests

### API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /api/articles | Get all articles |
| GET    | /api/articles/:id | Get article by ID |
| POST   | /api/articles | Create a new article |
| PUT    | /api/articles/:id | Update an existing article |
| DELETE | /api/articles/:id | Delete an article |

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

## Author

- [Mériadeck AMOUSSOU](https://github.com/mrdecka)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
