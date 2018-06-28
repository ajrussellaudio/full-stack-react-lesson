const express = require("express");
const app = express();
const parser = require("body-parser");

const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("quotesDB");
    console.log("Connected to db...");

    app.get("/api/quotes", (req, res, next) => {
      const quotesCollection = db.collection("quotes");
      quotesCollection.find().toArray((err, quotes) => {
        if (err) next(err);
        res.json(quotes);
      });
    });

    app.post("/api/quotes", (req, res, next) => {
      const quotesCollection = db.collection("quotes");
      console.log(req.body);
      const newQuote = req.body;
      quotesCollection.insert(newQuote, (err, result) => {
        if (err) next(err);
        res.status(201);
        res.json(result.ops[0]);
      });
    });

    app.listen(port, () => {
      console.log("App listening on port", port);
    });
  }
);
