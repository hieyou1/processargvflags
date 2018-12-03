process.chdir(__dirname);
const argv = require("../");
console.log(JSON.stringify(argv.parse("endString")));