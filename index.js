require = require("esm")(module)
require('dotenv').config()
module.exports = require("./server/main")