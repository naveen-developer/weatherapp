const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../views");
const partialPath = path.join(__dirname, "../templates/partials");
//console.log(staticPath);

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page..")
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("*", (req, res) => {
    res.render("error", {
        errorMsg:"Oops 404 Page Not Found"
    })
})

app.listen(PORT);