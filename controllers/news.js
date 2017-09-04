
const guardian = require('guardian-js');
var apiKey = 'e537593a-af0b-4069-b239-a0836efe1ae7';
var api = new guardian(apiKey, false);

/**
 * GET /news
 */
exports.newsGet = function(req, res) {
  res.render('news', {
    title: 'Guardian News API'
  });
};

/**
 * POST /news
 */
exports.newsPost = function(req, res) {
  console.log('here................');
  var errors = req.validationErrors();
  if (errors) {
    console.log('NewsPost Error: ', errors);
    return res.redirect('/news');
  }

};
