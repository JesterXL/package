const _ = require('lodash');
const log = console.log;
const itsAStringBrah = (something) => _.isString(something);
log("itsAStringBrah:", itsAStringBrah("yo"));
log("itsAStringBrah:", itsAStringBrah(1));
