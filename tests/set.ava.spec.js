import { test } from "ava";


var Path = require("../distrib/passthrough-object.min.js");




//var result = Path.set(obj, "b.e.0.f", { i: 55, k: 60, l: { m: 1 } });


test("bd", t => {
  let obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };
  let result = Path.set(obj, "b.d", null);
  t.deepEqual(result, { a: 1, b: { c: 3, d: null, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } });
});

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(result));

//obj = 


// result = Path.set(obj, "b.e.0.h.k", { i: 55, k: 60, l: { m: 1 } });
test("b.e.0.h.k", t => {
  let obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6", h: { i: 5 } }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };
  let result = Path.set(obj, "b.e.0.h.k", { i: 55, k: 60, l: { m: 1 } });
  t.deepEqual(result, {
    a: 1,
    b: {
      c: 3,
      d: 4,
      e: [{ f: "5", g: "6", h: { i: 5, k: { i: 55, k: 60, l: { m: 1 } } } },
        { f: "7", g: "8" }, { f: "9", g: "10" }
      ]
    }
  });
});

test("b.c", t => {
  let obj = {
    a: 1,
    b: {
      c: 3,
      d: 4,
      e: [{
        f: "5",
        g: "6"
      }, {
        f: "7",
        g: "8"
      }, {
        f: "9",
        g: "10"
      }]
    }
  };
  Path.set(obj, "b.c", 55);
  t.deepEqual(obj, {
    a: 1,
    b: {
      c: 55,
      d: 4,
      e: [{
        f: "5",
        g: "6"
      }, {
        f: "7",
        g: "8"
      }, {
        f: "9",
        g: "10"
      }]
    }
  });
});






test("b.e.0.f", t => {
  let obj = {
    a: 1,
    b: {
      c: 3,
      d: 4,
      e: [{
        f: "5",
        g: "6"
      }, {
        f: "7",
        g: "8"
      }, {
        f: "9",
        g: "10"
      }]
    }
  };
  Path.set(obj, "b.e.0.f", {
    i: 55,
    k: 60,
    l: {
      m: 1
    }
  });
  t.deepEqual(obj, {
    a: 1,
    b: {
      c: 3,
      d: 4,
      e: [{
        f: {
          i: 55,
          k: 60,
          l: {
            m: 1
          }
        },
        g: "6"
      }, {
        f: "7",
        g: "8"
      }, {
        f: "9",
        g: "10"
      }]
    }
  });
});


test("b", t => {
  let obj = {
    a: 1,
    b: {
      c: 1
    }
  };
  Path.set(obj, "b", {
    i: 55
  });
  t.deepEqual(obj, {
    a: 1,
    b: {
      i: 55
    }
  });
});