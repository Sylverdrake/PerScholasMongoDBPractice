const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const Fruit = require("./models/fruits.js");
const Veggies = require("./models/veggies.js");
// const fruits = require("./models/fruits");

// -------MiddleWare

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
console.log("I run for all routes");
next();
});

mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
console.log("connected to mongo");
});

app.get("/fruits", async (req, res) => {
const someFruits = await Fruit.find({});
res.render("Index", {
    allFruits: someFruits,
    });
});

app.get("/veggies", async (req, res) => {
    const someVeggies = await Veggies.find({});
    res.render("VeggieIndex", {
        allVeggies: someVeggies,
        });
    });

// -------------{ Index => All Fruits }

app.post("/fruits", async (req, res) => {
if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
} else {
    req.body.readyToEat = false;
}
const newFruit = await Fruit.create(req.body);
//   await res.send(newFruit);
res.redirect("/fruits");
});

app.get("/fruits/new", (req, res) => {
res.render("New");
});

app.get("/fruits/:id", async (req, res) => {
const eachFruit = await Fruit.findById(req.params.id);
res.render("Show", {
    fruit: eachFruit,
    //Key 1 is what is need to passed as props, as eachFruit is the value which will be passed with it
});
});

// Veggies
app.post("/veggies", async (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    const newVeggie = await Veggies.create(req.body);
    //   await res.send(newFruit);
    res.redirect("/veggies");
    });
    
    app.get("/veggies/new", (req, res) => {
    res.render("VeggieNew");
    });
    
    app.get("/veggies/:id", async (req, res) => {
    const eachVeggie = await Veggies.findById(req.params.id);
    res.render("VeggieShow", {
        veggie: eachVeggie,
    });
    });


app.listen(PORT, (req, res) => {
console.log(`Listening on 3k`);
});
