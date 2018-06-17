import { test } from "ava";

import {get } from "../distrib/passthrough-object.min.js";

test("foo", t => {
  t.pass();
});



const obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };

test("bd", t => {
  t.deepEqual(get(obj, "b.d", null), 4);
});

test("bef", t => {
  t.deepEqual(get(obj, "b.e.0.f", null), "5");
});

test("bef2", t => {
  t.deepEqual(get(obj, "b.e[0].f", null), "5");
});

test("be", t => {
  t.deepEqual(get(obj, "b.e", null), [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }]);
});


test("null", t => {
  var be = get(obj, "b.e", {});
  be.push({ f: "11", g: "12" });
  t.deepEqual(get(obj, "b.e", {}), [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }, { f: "11", g: "12" }]);
});

test("null2", t => {
  var be = get(null, "b.e", {});
  t.deepEqual(be, {});
});

test("extend", t => {
  var be = get(null, "b.e", { a: 1 });
  t.deepEqual(be, { a: 1 });
  be.f = 5;
  t.deepEqual(be, { a: 1, f: 5 });
});


test("array", t => {
  let b = {
    a: [{
      b: 10,
      bb: [{
        bbb: [1, 2]
      }, {
        bbb: 2
      }]
    }, {
      b: 11
    }],
    c: [{
      cc: 1
    }, {
      cc: 2
    }]
  };
  var res = get(b, "a[0].bb[0].bbb[1]]");
  t.deepEqual(res, 2);
});