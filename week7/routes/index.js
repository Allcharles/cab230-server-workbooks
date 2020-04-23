var express = require("express")
var router = express.Router()
const mysql = require("mysql")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "The World Database API" })
})

/* GET api page */
router.get("/api", function (req, res, next) {
  res.render("index", { title: "Lots of routes available" })
})

/* Get list of all cities */
router.get("/api/city", function (req, res) {
  let query = "SELECT name, district FROM ??"
  let table = ["city"]

  query = mysql.format(query, table)
  req.db.query(query, function (err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" })
    } else {
      res.json({ Error: true, Message: "Success", City: rows })
    }
  })
})

/* Get list of all cities belonging to a country */
router.get("/api/city/:CountryCode", function (req, res) {
  let query = "SELECT * FROM ?? WHERE ??=?"
  let table = ["city", "CountryCode", req.params.CountryCode]

  query = mysql.format(query, table)
  req.db.query(query, function (err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error executing MySQL query" })
    } else {
      res.json({ Error: true, Message: "Success", Cities: rows })
    }
  })
})

module.exports = router
