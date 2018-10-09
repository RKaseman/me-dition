
// import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";

class Lib extends Component {
    state = {
        books: [],
        cover: "",
        title: "",
        subtitle: "",
        author: "",
        published: "",
        kindle: "",
        series: "",
        number: ""
    }
}

app.get("/scrape", function (req, res) {
    // db.Library.deleteMany({ "note": { "$exists": false } })
    const getLibrary = () => {
        try {
            return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:global+brain&inauthor:howard+bloom&", {
                params: {
                    key: "AIzaSyA8DRL-hrmJktLRod7g8dbx2Y08h4SRrdU"
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
    const countLibrary = async () => {
        getLibrary()
        .then(response => {
            if (response.data) {
                console.log("1--------");
                for (var i = 0; i < response.data.items.length; i++) {
                    for (var j = 0; j < response.data.items[i].volumeInfo.authors.length; j++) {
                        var result = {};
                        result.title = response.data.items[i].volumeInfo.title;
                        result.subtitle = response.data.items[i].volumeInfo.subtitle;
                        result.authors = response.data.items[i].volumeInfo.authors[j];
                        result.publishedDate = response.data.items[i].volumeInfo.publishedDate;
                        console.log(result);
                        console.log("--------");
                        db.Library.create(result)
                        .then(function (dbLibrary) {
                            console.log(dbLibrary);
                        })
                        .catch(function (error) {
                            return res.json(error);
                        });
                    }
                }
            }
        })
    }
    countLibrary();
});


// routes

app.get("/library", function (req, res) {
    db.Library.find({})
        .then(function (dbLibrary) {
            res.json(dbLibrary);
        })
        .catch(function (error) {
            res.json(error);
        });
});

app.get("/library/:id", function (req, res) {
    db.Library.findOne({ _id: req.params.id })
        .populate("note")
        .then(function (dbLibrary) {
            res.json(dbLibrary);
        })
        .catch(function (error) {
            res.json(error);
        });
});

app.post("/library/:id", function (req, res) {
    db.Note.create(req.body)
        .then(function (dbNote) {
            return db.Library.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
        })
        .then(function (dbLibrary) {
            res.json(dbLibrary);
        })
        .catch(function (error) {
            res.json(error);
        });
});

app.listen(PORT, function () {
    console.log("listen port " + PORT);
});
