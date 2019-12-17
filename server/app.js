require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
const cors = require("cors");

var app = express();

// Connect to MONGODB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connection => {
    console.log("succesfully connected");
  })
  .catch(err => {
    console.log(err);
  });

// CORS authorisation

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

// setup the SESSION

app.use(
  session({
    secret: "basic-auth-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 10 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 10 // 1 day
    })
  })
);

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build")));

var authRouter = require("./routes/auth");
app.use("/auth", authRouter);

var userRouter = require("./routes/user");
app.use("/", userRouter);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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
  res.json("error");
});

module.exports = app;
