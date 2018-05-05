var Path = require("../sources/passthrough-object");



// var obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };


// var result = Path.set(obj, "b.c", 55);

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(result));



// var obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };


// var result = Path.set(obj, "b.e.0.f", { i: 55, k: 60, l: { m: 1 } });

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(result));

// var obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6", h: { i: 5 } }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };


// var result = Path.set(obj, "b.e.0.h.k", { i: 55, k: 60, l: { m: 1 } });

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(result));

var obj = { a: 1, b: { c: 1 } };


var result = Path.set(obj, "b", { i: 55 });

console.log(JSON.stringify(obj));
console.log(JSON.stringify(result));

console.log(Object.assign({ c: 1 }, { i: 55 }));