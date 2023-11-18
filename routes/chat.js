const express = require('express');
const router = express.Router();

/* GET chat listing. */
router.get('/', (req, res, next) => {
  res.render('chat', { title: 'chat' });
});

module.exports = router;
