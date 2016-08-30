var express = require('express');
var core = require('../controllers/core.server.controller.js')
var r = express.Router();

r.get('/', core.index);
r.get('/board/:id', core.glance);
r.get('/board/:id/add', core.add);
r.get('/board/:id/manage', core.manage);

r.post('/api/addToQueue', core.addToQueue);
r.post('/api/removeFromQueue', core.removeFromQueue);
r.get('/api/getQueue', core.getQueue);


module.exports = r;
