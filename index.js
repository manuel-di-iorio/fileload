// fileload v.1.0.0 - by Manuel Di Iorio
const path = require("path");

module.exports = new class {
    file(absPath) {
        if (!this.root) throw new Error("this.root has not been defined");
        if (!absPath) throw new Error("missing path parameter");
        return require(path.join(this.root, absPath));
    };

    resolve(absPath) {
        if (!this.root) throw new Error("this.root has not been defined");
        if (!absPath) throw new Error("missing path parameter");
        return path.join(this.root, absPath);
    }
};
