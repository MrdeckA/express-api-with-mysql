const express = require('express')
const articleRouter = express.Router()
const articleController = require('../controllers/article')



articleRouter.get('/', articleController.test)


module.exports = articleRouter;