const {getAllArticles, createArticle, deleteArticle, updateArticle} = require("../controllers/articleController");
const router = require("express").Router();

router.get("/", getAllArticles)
router.post("/", createArticle)
router.delete("/:article_id", deleteArticle)
router.put("/:article_id", updateArticle)


module.exports = router
