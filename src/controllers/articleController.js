const ArticleModel = require("../models/articleModel");

const getAllArticles = async (req, res) => {
    const articles = await ArticleModel.find()
    console.log(articles)
    res.send(articles)
};

const createArticle = async (req, res) => {
    const article = new ArticleModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    })
    article.save()
    res.send(article)
};
const updateArticle = async (req, res) => {
    const articleId = req.params.article_id
    const updateData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    }

    try {
        const article = await ArticleModel.updateOne({_id: articleId}, updateData)
        res.send(article)
    } catch (e) {
        res.send({msg: "erreur d'ajout"});
    }

};

const deleteArticle = async (req, res) => {
    const id = req.params.article_id
    const player = await ArticleModel.deleteOne({_id: id});
    res.send({player, msg: " Player successfully deleted!"});
};


module.exports = {getAllArticles, createArticle, updateArticle, deleteArticle}
