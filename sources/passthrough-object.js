function get(object, path, defaultValue) {
  path = path.replace(/\[/g, ".").replace(/]/g, "");
  if (path[0] === ".") { path = path.substr(1); }
  var ps = path.split(".");
  var i = 0;
  var length = ps.length;
  while (isDef(object) && i < length) {
    object = object[ps[i]];
    i++;
  }
  if (!isDef(object)) { return defaultValue; }
  return object;
}

function isDef(value) {
  return value !== null && typeof value !== "undefined";
}

function set(object, path, value) {
  var ori = object;
  path = path.replace(/\[/g, ".").replace(/]/g, "");
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
    var o = {};
    o[key] = value;
    Object.assign(object, o);
  }
  return ori;
}

export {get, set }