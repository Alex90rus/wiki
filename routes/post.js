const router = require('express')
  .Router();
const Article = require('../models/articles');
const Category = require('../models/categories');

router.get('/', (req, res) => {
  if (req.session.user) {
    return res.render('articles/new', {
      title: 'Финам Вики',
      username: req.session.user.username,
    });
  }
  res.render('login')
});

router.post('/', async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const newPost = await new Article({
      title,
      content,
      category,
    });
    newPost.save();
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
