const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Insert your own username here
  password: "toor", // Insert your own password here
  database: "world"
})

connection.connect(function (err) {
  if (err) throw err
})

module.exports = (req, res, next) => {
  req.db = connection
  next()
}
