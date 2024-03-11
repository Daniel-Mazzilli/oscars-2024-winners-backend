//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//CONFIGURATION
const app = express();

//CONTROLLERS
const winnersController = require("./controllers/winnersController.js");

//MIDDLEWARE
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/winners", winnersController)

//ROUTES
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Oscar Winners 2024");
})

app.get("/not-found", (req, res) => {
    res.status(404).json({error: "Page Not Found"});
})

app.get("*", (req, res) => {
    res.redirect("/not-found");
})

//EXPORT
module.exports = app;