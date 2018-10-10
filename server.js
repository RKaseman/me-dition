
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
const routes = require("./routes");
// var db = require("./models");
require("dotenv").config();


console.log(process.env.apiKey);


var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// app.get("/scrape", function (req, res) {
//     db.Library.deleteMany( { "note": { "$exists": false } } )
//     const getLibrary = () => {
//         try {
//             return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:global+brain&inauthor:howard+bloom&", {
//                 params: {
//                     key: "AIzaSyA8DRL-hrmJktLRod7g8dbx2Y08h4SRrdU"
//                 }
//             })
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     const countLibrary = async () => {
//         getLibrary()
//         .then(response => {
//             if (response.data) {
//                 console.log("1--------");
//                 for (var i = 0; i < response.data.items.length; i++) {
//                     for (var j = 0; j < response.data.items[i].volumeInfo.authors.length; j++) {
//                         var result = {};
//                         result.title = response.data.items[i].volumeInfo.title;
//                         result.subtitle = response.data.items[i].volumeInfo.subtitle;
//                         result.authors = response.data.items[i].volumeInfo.authors[j];
//                         result.publishedDate = response.data.items[i].volumeInfo.publishedDate;
//                         console.log(result);
//                         console.log("--------");
//                         db.Library.create(result)
//                         .then(function (dbLibrary) {
//                             console.log(dbLibrary);
//                         })
//                         .catch(function (error) {
//                             return res.json(error);
//                         });
//                     }
//                 }
//             }
//         })
//     }
//     countLibrary();
// });


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

