const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;
    res.render("success", { name, email, age });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});