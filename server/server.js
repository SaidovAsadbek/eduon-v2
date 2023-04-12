const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ingredients = [
    {
        id: "1",
        item: "Bacon",
    },
    {
        id: "2",
        item: "Eggs",
    },
    {
        id: "3",
        item: "Milk",
    },
    {
        id: "4",
        item: "Butter",
    },
];

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/api/v1/test", (req, res) => {
    res.send(ingredients);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
