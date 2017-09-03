var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

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
