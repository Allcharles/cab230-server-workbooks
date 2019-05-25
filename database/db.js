const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", //Set this to the password of your mysql database
  database: "world"
});

connection.connect(err => {
  if (err) throw err;
});

module.exports = (req, res, next) => {
  req.db = connection;
  next();
};
