var queues = [];

module.exports.index = function(req, res) {
  res.render('index');
};

module.exports.glance = function(req, res) {
  if (!(queues[req.params.id])) {
    queues[req.params.id] = [];
  }
  res.render('glance');
};

module.exports.manage = function(req, res) {
  res.render('manage');
};

module.exports.add = function(req, res) {
  res.render('add');
};

module.exports.addToQueue = function(req, res) {
  var addition = Object.keys(req.body)[0];
  queues[req.body.name].push(JSON.parse(addition));
  console.log(queues[req.body.name]);
  res.json(queues[req.body.name]);
};

module.exports.removeFromQueue = function(req, res) {
  var removal = parseInt(Object.keys(req.body)[0]);
  queues[req.body.name].splice(removal, 1);
  res.json(queues[req.body.name]);
};

module.exports.getQueue = function(req, res) {
  res.json(queues[req.body.name]);
};
