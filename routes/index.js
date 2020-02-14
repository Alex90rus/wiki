const express = require('express');


const router = express.Router();
// const User = require('../models/users');
const Category = require('../models/categories');
const Article = require('../models/articles');
/* GET home page. */
router.get('/', async (req, res) => {
  if (req.session.user) {
    const categories = await Category.find();
    return res.render('index', {
      title: 'Финам Вики',
      username: req.session.user.username,
      categories,
    });
  }
  res.render('login');
});


router.get('/logout', async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('token');
      res.redirect('/');
    } catch (err) {
      res.redirect('/');
    }
  }
});

router.get('/articles/:id', async (req, res) => {
  const categories = await Category.find();
  const articles = await Article.find({ category: req.params.id });
  res.render('articles/view', { categories, articles });
});

router.get('/article/:id', async (req, res) => {
  const categories = await Category.find();
  const article = await Article.findById(req.params.id);

  return res.render('articles/article', { categories, article });
});

module.exports = router;
