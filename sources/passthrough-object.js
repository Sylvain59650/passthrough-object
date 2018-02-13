/**
 * @license
 * passthrough-object  0.9.0
 * Copyright Sylvain Longepee
 * Released under MIT license
 */

;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {} else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Path = factory();
  }
}("PathModule", this, function() {
  'use strict';

  var Path = {};

  Path.get = function(object, path, defaultValue) {
    path = path.replace("[", ".").replace("]", "");
    if (path[0] === ".") path = path.substr(1);
    var ps = path.split(".");
    var i = 0;
    var length = ps.length;
    while (object != null && i < length) {
      object = object[ps[i]];
      i++;
    }
    if (object == null) return defaultValue;
    return object;
  }


  return Path;
}));