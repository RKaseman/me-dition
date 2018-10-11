
import axios from "axios";
require("dotenv").config();

export default {
    getBooks: function () {
        return axios.get("/api/books");
    },
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};

// 

console.log(process.env.apiKey);

app.get("/scrape", function (req, res) {
    db.Library.deleteMany( { "note": { "$exists": false } } )
    const getLibrary = () => {
        try {
            return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:global+brain&inauthor:howard+bloom&", {
                params: {
                    key: apiKey
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

