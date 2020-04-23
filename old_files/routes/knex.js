var express = require("express");
var mysql = require("mysql");
var router = express.Router();

router.get("/", function(req, res, next) {
  req.db
    .raw("SELECT VERSION()")
    .then(version => {
      console.log(version[0][0]);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });

  res.send("Version Logged Successfully");
});

module.exports = router;
