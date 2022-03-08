const pug = require("pug")
const fs = require("fs")

const html = pug.renderFile("./index.pug")
fs.writeFileSync("index.html", html)