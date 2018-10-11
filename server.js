
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const axios = require("axios");
const routes = require("./routes");
require("dotenv").config();


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";
// mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// routes

// app.get("/library", function (req, res) {
//     db.Library.find({})
//         .then(function (dbLibrary) {
//             res.json(dbLibrary);
//         })
//         .catch(function (error) {
//             res.json(error);
//         });
// });

// app.get("/library/:id", function (req, res) {
//     db.Library.findOne({ _id: req.params.id })
//         .populate("note")
//         .then(function (dbLibrary) {
//             res.json(dbLibrary);
//         })
//         .catch(function (error) {
//             res.json(error);
//         });
// });

// app.post("/library/:id", function (req, res) {
//     db.Note.create(req.body)
//         .then(function (dbNote) {
//             return db.Library.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//         })
//         .then(function (dbLibrary) {
//             res.json(dbLibrary);
//         })
//         .catch(function (error) {
//             res.json(error);
//         });
// });

app.listen(PORT, function () {
    console.log("listen port " + PORT);
});

