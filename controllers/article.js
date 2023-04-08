const Article = require('../models/article');

exports.getArticles = (req, res, next) => {
    Article.findAll().then((articles) => {
        console.log(articles)
        res.status(200).json(articles);
    })
        .catch((error) => {
            console.error('Erreur lors de la récupération des articles :', error);
            res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'article' });
        });
};

exports.createArticle = (req, res, next) => {
    Article.create({
        categorie: req.body.categorie,
        nom: req.body.nom,
        description: req.body.description,
        prix: req.body.prix,
        prix_promo: req.body.prix_promo,
        photo_url: req.body.photo_url,
    }).then((article) => {

        res.status(201).json({
            message: 'Article créé avec succès',
            article: article
        });
    })
        .catch((error) => {
            console.error('Erreur lors de l\'insertion de l\'article :', error);
            res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'article' });
        });
};


exports.getArticle = (req, res) => {
    Article.findByPk(req.params.id).then((article) => {
        res.status(200).json(article);
    })
        .catch((error) => {
            console.error('Erreur lors de la récupération de l\'article :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération de l\'article' });
        });
}

exports.deleteArticle = (req, res) => {
    Article.findByPk(req.params.id).then((article) => {
        article.destroy();
        res.status(200).json({ message: 'Article supprimé avec succès' });
    })
        .catch((error) => {
            console.error('Erreur lors de la suppression de l\'article :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression de l\'article' });
        });
}

exports.updateArticle = (req, res) => {
    Article.findByPk(req.params.id).then((article) => {
        article.update({
            categorie: req.body.categorie,
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            prix_promo: req.body.prix_promo,
            photo_url: req.body.photo_url,
        }).then((article) => {
            res.status(200).json({ message: 'Article modifié avec succès', article: article });
        })
            .catch((error) => {
                console.error('Erreur lors de la modification de l\'article :', error);
                res.status(500).json({ message: 'Erreur lors de la modification de l\'article' });
            });
    })
        .catch((error) => {
            console.error("L'article n'existe pas :", error);
            res.status(500).json({ message: "L'article n'existe pas : Erreur lors de la mdofification de l\'article" });
        });
}