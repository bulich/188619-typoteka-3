'use strict';

const {Router} = require(`express`);
const sequelize = require(`../lib/sequelize`);
const defineModels = require(`../models`);
const category = require(`./category/category`);
const article = require(`./article/article`);
const search = require(`./search/search`);
const user = require(`./user/user`);
const comment = require(`./comment/comment`);
const CategoryRepository = require(`./category/category.repository`);
const SearchRepository = require(`./search/search.repository`);
const ArticleRepository = require(`./article/articles.repository`);
const CommentRepository = require(`./comment/comment.repository`);
const UserRepository = require(`./user/user.repository`);

const app = new Router();

defineModels(sequelize);

(() => {
  category(app, new CategoryRepository(sequelize), new ArticleRepository(sequelize));
  search(app, new SearchRepository(sequelize));
  article(app, new ArticleRepository(sequelize), new CommentRepository(sequelize));
  user(app, new UserRepository(sequelize));
  comment(app, new CommentRepository(sequelize));
})();

module.exports = app;
