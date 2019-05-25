var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", function(req, res, next) {
  res.render("index", { title: "The World Database API" });
});

router.get("/api/city", function(req, res, next) {
  req.db
    .select("name", "district")
    .from("city")
    .then(rows => {
      res.json({ Error: false, Message: "Success", City: rows });
    })
    .catch(err => {
      res.json({ Error: true, Message: err });
    });
});

router.get("/api/city/:CountryCode", function(req, res) {
  req.db
    .select("*")
    .from("city")
    .where("CountryCode", "=", req.params.CountryCode)
    .then(rows => {
      res.json({ Error: false, Message: "Success", Cities: rows });
    })
    .catch(err => {
      res.json({ Error: true, Message: err });
    });
});

router.post("/api/update", function(req, res) {
  if (!req.body.City || !req.body.CountryCode || !req.body.Pop) {
    res.status(400).json({ Message: "Error updating population" });
  } else {
    const filter = {
      Name: req.body.City,
      CountryCode: req.body.CountryCode
    };

    const pop = {
      Population: req.body.Pop
    };

    req
      .db("city")
      .where(filter)
      .update(pop)
      .then(function() {
        res.status(201).json({ Message: "Successful update " + req.body.City });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ Message: "Database error - not updated" });
      });
  }
});

module.exports = router;
