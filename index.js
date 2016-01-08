"use strict";

var analysis = require("./src/analysis");
var generator = require("./src/generator");

module.exports = {
  label_progression: function(chords) {
    var likely_progressions = analysis.main(chords);
    return likely_progressions;
  },
  get_variations: function(progression) {
    var candidates = generator.get_possible_variations(progression);
    return candidates;

  },
  analysis: analysis,
  generator: generator
};
