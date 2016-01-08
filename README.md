isnext
======

isnext is factored out of whatnext.sf. It is a simple chord analysis tool built
off of teoria.js. Given a chord progression, it tries to guess the labeling of
the chords
 

    var isnext = require("isnext");
    var labelings = isnext.label_progression("a d a d f g a");
    var probable = labelings[0];

    // Is a dictionary of possible chord modulations / follow ups
    var variations = isnext.get_variations(probable);


