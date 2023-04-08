const express = require('express')
const articleRouter = express.Router()
const articleController = require('../controllers/article')



articleRouter.get('/', articleController.getArticles)


articleRouter.post('/', articleController.createArticle)

articleRouter.get('/:id', articleController.getArticle)

articleRouter.delete('/:id', articleController.deleteArticle)

articleRouter.put('/:id', articleController.updateArticle)

module.exports = articleRouter;