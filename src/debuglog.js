var _ = require("underscore");
var DEBUG=process.env.DEBUG;
var debug_log = function() {
  var args = _.toArray(arguments);
  if (DEBUG) {
    console.log(args.join(" "));
  }
}

module.exports = debug_log;
