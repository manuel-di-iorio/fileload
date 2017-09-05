const assert = require("assert");
const path = require("path");

const load = require(".");

assert.throws(() => load.resolve(""));
assert.throws(() => load.file(""));
assert.throws(() => load.root());

load.root(__dirname);

assert.throws(() => load.resolve());
assert.throws(() => load.file());

assert.equal(load.resolve("file.test"), path.join(__dirname, "file.test"));
assert.equal(load.file("file.test")(), "test");
assert.equal(load.file("/file.test")(), "test");
assert.equal(load.file("./file.test")(), "test");
assert.equal(load.file("subfolder/file.test")(), "test");
