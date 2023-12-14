const Article = require("../models/article.model");
const payloadValidator = require("../utils/validator");
module.exports = class ArticleController {
  /**
   * @description Controller To Create A New Article
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static async addArticle(req, res) {
    const inValidPayload = await payloadValidator(req.body, { article: true });
    if (inValidPayload.errors.length) {
      return res.status(400).json(inValidPayload);
    } else {
      req.body["userId"] = req.user.id;
      const newArticle = new Article(req.body);
      try {
        const articleObject = await newArticle.save();
        res
          .status(200)
          .json({ message: "Article Added Successfully", data: articleObject });
      } catch (error) {
        res.status(500).json(error);
      }
    }
  }

  /**
   * @description Controller To Get List Of All Article (includes pagination)
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static async getAllArticles(req, res) {
    const totalArticles = await Article.countDocuments({});
    const page = req?.query?.page || 1;
    const limit = req?.query?.per_page || 10;
    const offset = (page - 1) * limit;
    {
      try {
        const allArticles = await Article.find()
          .limit(limit)
          .skip(offset)
          .sort({ _id: -1 });
        res.status(200).json({ totalBooks: totalArticles, data: allArticles });
      } catch (error) {
        res.status(403).json("You are not authorized");
      }
    }
  }
  /**
   * @description Controller To Get A Single Article
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static async getArticle(req, res) {
    try {
      const article = await Article.findById(req.params.id);
      if (article) {
        res
          .status(200)
          .json({ message: "Article Fetched Successfully!", data: article });
      } else {
        res.status(400).json({ message: "Article Not Found!" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   * @description Controller To Delete A Single Article
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static async deleteArticle(req, res) {
    if (req.user.isAdmin) {
      try {
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).json("Article has been deleted!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("You are not allowed to delete book!");
    }
  }
  /**
   * @description Controller To Update A Single Article
   * @param {*} req
   * @param {*} res
   * @returns
   */
  static async updateArticle(req, res) {
    const { userId } = await Article.findById(req.params.id);
    try {
      if (req.user.isAdmin || userId === req.user.id) {
        const updatedArticle = await Article.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedArticle);
      } else {
        res.status(403).json({ message: "You cannot update this article!" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
