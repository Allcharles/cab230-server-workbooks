var express = require("express");
var mysql = require("mysql");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", function(req, res, next) {
  res.render("index", { title: "The World Database API" });
});

router.get("/api/city", function(req, res, next) {
  let query = "SELECT name, district FROM ??";
  let table = ["city"];

  query = mysql.format(query, table);
  req.db.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: err });
    } else {
      res.json({ Error: false, Message: "Success", City: rows });
    }
  });
});

router.get("/api/city/:CountryCode", function(req, res) {
  let query = "SELECT * FROM ?? WHERE ??=?";
  let table = ["city", "CountryCode", req.params.CountryCode];
  query = mysql.format(query, table);

  req.db.query(query, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: err });
    } else {
      res.json({ Error: false, Message: "Success", City: rows });
    }
  });
});

module.exports = router;
