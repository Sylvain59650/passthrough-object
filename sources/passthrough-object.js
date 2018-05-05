/**
 * @license
 * passthrough-object  0.9.3
 * Copyright Sylvain Longepee
 * Released under MIT license
 */

;
(function(moduleName, root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else {
    /* global Path */
    Path = factory();
  }
}("PathModule", null, function() {
  "use strict";

  var Path = {};

  Path.get = function(object, path, defaultValue) {
    path = path.replace("[", ".").replace("]", "");
    if (path[0] === ".") { path = path.substr(1); }
    var ps = path.split(".");
    var i = 0;
    var length = ps.length;
    while (object !== null && i < length) {
      object = object[ps[i]];
      i++;
    }
    if (object === null) { return defaultValue; }
    return object;
  }

  function isDef(value) {
    return value !== null && typeof value !== "undefined";
  }

  Path.set = function(object, path, value) {
    var ori = object;
    path = path.replace("[", ".").replace("]", "");
    if (path[0] === ".") { path = path.substr(1); }
    var ps = path.split(".");
    var i = 0;
    var length = ps.length;
    var old = object;
    while (object !== null && i < length - 1) {
      old = object;
      object = object[ps[i]];
      i++;
    }
    if (!isDef(object)) {
      if (i < length) {
        Object.assign(old[ps[i]], value);
      }
    } else {
      var key = ps[i];
      if (isDef(object[key])) {
        Object.assign(object[key], value);
      } else {
        Object.assign(old, value);
      }
    }
    return ori;
  }




  return Path;
}));