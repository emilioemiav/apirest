const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const routes = require("./routes");

const mongoUrl = process.env.DATABASE_URL;
mongoose.connect(mongoUrl);

const dataBase = mongoose.connection;

dataBase.on("connected",() => {
    console.log("se conecto la base de datos")
} ) 

const app = express();

app.use(express.json());
app.use("/api",routes);
app.listen(5000, () => {
    console.log(`Server Started at ${5000} - ${process.env.DATABASE_URL}`)
})
