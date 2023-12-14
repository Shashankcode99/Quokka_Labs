const router = require("express").Router();
const verification = require("../middlewares/verification");
const ArticleController = require("../controllers/article.controller");

router.get("/article/:id", ArticleController.getArticle);
router.get("/articles", verification, ArticleController.getAllArticles);
router.post("/article", verification, ArticleController.addArticle);
router.put("/article/:id", verification, ArticleController.updateArticle);
router.delete("/article/:id", verification, ArticleController.deleteArticle);

module.exports = router;
