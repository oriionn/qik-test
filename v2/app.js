const pkg = require("./package.json");

console.log("App V2")
if (pkg.name !== "qik-test") console.log("Name OK.")
if (pkg.description !== "Test for Qik") console.log("Description OK.")
