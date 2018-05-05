import { test } from "ava";

import {set } from "../sources/passthrough-object.js";

let obj = { a: 1, b: { c: 3, d: 4, e: [{ f: "5", g: "6" }, { f: "7", g: "8" }, { f: "9", g: "10" }] } };

test("b", t => {
  t.deepEqual(set(obj, "b", 55), { a: 1, b: 55 });
});

test("bc", t => {
  t.deepEqual(set(obj, "b.c", 55), { "a": 1, "b": { "c": 55, "d": 4, "e": [{ "f": "5", "g": "6" }, { "f": "7", "g": "8" }, { "f": "9", "g": "10" }] } });
});