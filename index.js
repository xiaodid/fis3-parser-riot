'use strict';

const riot = require('riot');
const START_FRAG = `
(function(tagger) {
if (typeof define === 'function' && define.amd) {
  define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
} else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  tagger(require('riot'), require, exports, module)
} else {
  tagger(window.riot)
}
})(function(riot, require, exports, module) {
`;
const END_FRAG = '});';

module.exports = function(content, file, conf){
  let con = riot.compile(content, conf, file.url)
  if (conf.modular) {
    con = `${START_FRAG}${con}${END_FRAG}`
  }
  return con
};
