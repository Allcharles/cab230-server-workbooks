var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Enable POST
var helmet = require("helmet");
var cors = require("cors");

//Enable Database
var options = require("./knexfile.js");
var knex = require("knex")(options);

//Enable Swagger Docs
var swaggerUI = require("swagger-ui-express");
var swaggerDocument = require("./docs/swagger.json");

var indexRouter = require("./routes/index");
var knexRouter = require("./routes/knex");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

logger.token("req", function(req, res) {
  JSON.stringify(req.headers);
});
logger.token("res", function(req, res) {
  const headers = {};
  res.getHeaderNames().map(h => (headers[h] = res.getHeader(h)));
  return JSON.stringify(headers);
});

app.use(function(req, res, next) {
  req.db = knex;
  next();
});

app.use("/", indexRouter);
app.use("/knex", knexRouter);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
