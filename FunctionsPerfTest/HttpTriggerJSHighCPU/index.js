'use strict';

var id;

module.exports.test = function (context, req) {
  context.log('Starting...');

  var start = Date.now();

  if (typeof id === 'undefined') {
    id = uuid();
  }

  var duration = 1000;

  if (req.query.duration) {
    duration = Number(req.query.duration);
  }

  while (Date.now() < start + duration) {}

  context.done(null, { body: {
    duration: Date.now() - start,
    id: id
  }});
};

function uuid(a) {
  return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid);
}
