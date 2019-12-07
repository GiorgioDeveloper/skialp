var express = require("express");
var router = express.Router();

// User model
const User = require("../models/User");

// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const saltRounds = 10;

const bcryptSalt = 10;

//* POST SIGNUP *//

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.status(400).json({
      errorMessage: "Enter username and password to create an account"
    });
    return;
  }

  //check if username already exist

  User.findOne({ username: username }).then(user => {
    if (user !== null) {
      res.status(400).json({
        errorMessage: "The username already exists!"
      });
      return;
    }

    // encrypt psw and create database
    bcrypt
      .hash(password, bcryptSalt)
      .then(hashedPassword => {
        return User.create({
          username,
          password: hashedPassword
        });
      })
      .then(user => {
        res.json({ message: "User created", user });
      })
      .catch(error => {
        console.log(error);
      });
  });
});

//* POST LOGIN *//

router.post("/login", (req, res) => {
  let currentUser;
  User.findOne({ username: req.body.username }).then(async user => {
    if (!user) {
      res.status(401).send({
        errorMessage: "The username doesn't exist."
      });
    } else {
      currentUser = user;
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordCorrect) {
        req.session.currentUser = currentUser;

        res.status(200).json({ message: "Succesfully loggedin", currentUser });
      } else {
        res.status(401).send({
          errorMessage: "incorrect password"
        });
      }
    }
  });
});

//* POST LOGOUT *//

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Succesfully loggedout" });
  });
});

//* CHECK if LOGGEDIN *//

router.get("/isLoggedIn", (req, res) => {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser);
  } else {
    res.status(401).json({ message: "You need to login" });
  }
});

module.exports = router;
