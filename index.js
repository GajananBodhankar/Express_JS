const path = require("path");
const express = require("express");
const app = express();
//For static data
// const staticP = path.join(__dirname, "./public");
// app.use(express.static(staticP));
//For dynamic data
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index", { name: "Welcome to dynamic content page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Welcome to the about page" });
});

app.get("/about", (req, res) => {
  // res.json("hi");

  res.send({
    name: "gajanan",
    age: 21,
  });
});

app.listen(3000, () => console.log("Running express js"));
