const express = require('express');
const app = express();
const path = require("path");
const port = 8000;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use('/', express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/charts", (req, res) => {
    res.render("charts");
});

app.get("/widgets", (req, res) => {
    res.render("widgets");
});
app.get("/tables", (req, res) => {
    res.render("tables");
});
app.get("/grid", (req, res) => {
    res.render("grid");
});
app.get("/form-basic", (req, res) => {
    res.render("form-basic"); 
});

app.get("/form-wizard", (req, res) => {
    res.render("form-wizard");
});
app.get("/pages-buttons", (req, res) => {
    res.render("pages-buttons");
});
app.get("/pages-elements", (req, res) => {
    res.render("pages-elements");
});
app.get("/icon-material", (req, res) => {
    res.render("icon-material");
});
app.get("/icon-fontawesome", (req, res) => {
    res.render("icon-fontawesome");
});
app.listen(port, () => console.log("Server started on port " + port));
