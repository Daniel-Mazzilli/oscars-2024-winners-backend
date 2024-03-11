const express = require("express");
const winners = express.Router();

const { getAllWinners, getOneWinner} = require("../queries/winners.js")

//INDEX
winners.get("/", async (req, res) => {
    const allWinners = await getAllWinners();
    if(allWinners.length){
        res.status(200).json(allWinners);
    } else {
        res.status(500).json({Error: "Server Error"});
    }
});

//SHOW
winners.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneWinner = await getOneWinner(id);

    if(!oneWinner.message) {
        res.status(200).json(oneWinner);
    } else {
        res.redirect("/not-found")
    }
});

module.exports = winners;