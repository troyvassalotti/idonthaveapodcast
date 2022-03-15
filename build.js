const pug = require("pug")
const fs = require("fs")

// index.html rendering
const html = pug.renderFile("./index.pug")

// directory path
const dir = "./_site"

// create new directory
try {
    // first check if directory already exists
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        fs.writeFileSync(`${dir}/index.html`, html)
        console.log("Site is created.")
    } else {
        fs.writeFileSync(`${dir}/index.html`, html)
        console.log("Directory already exists but I created the file anyway.")
    }
} catch (err) {
    console.log(err)
}
