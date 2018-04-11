import { test } from "ava";

import {get } from "../sources/passthrough-object.js";

test('foo', t => {
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
  var a = get(obj, "b.e", null);
  console.log(a);
  t.deepEqual(get(obj, "b.e", null), [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }]);
});



console.log(get(obj, "b.e", {}));

test("null", t => {
  var be = get(obj, "b.e", {});
  be.push({ f: "11", g: "12" });
  t.deepEqual(get(obj, "b.e", {}), [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }, { f: "11", g: "12" }]);
});