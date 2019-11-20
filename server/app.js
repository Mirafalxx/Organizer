const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const StaticFileMiddleware = express.static("../client/dist");
const bodyParser = require("body-parser");
const router = require("./routes/router");
// const router = require("./routes/Register");
const cors = require("cors");
const app = express();

app.use(logger("dev"));
app.use(express.json());

//BodyParser Middleware
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Init CORS connector

app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:4200/"],
    credentials: true
  })
);
//Init CORS connector

//passport init

//passport init

app.use(StaticFileMiddleware);
app.use("/api", router); // в 1 переменную можно дописать любой путь например ("/api",router)
app.use(cors());
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
