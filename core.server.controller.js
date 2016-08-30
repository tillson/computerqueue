module.exports.home = function(req, res) {
  res.render('index', {production: req.app.locals.production, upper: true});
};

module.exports.glance = function(req, res) {
  res.render('index', {production: req.app.locals.production, upper: true});
};
