const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
router.use(cors());

process.env.SECRET_KEY = "secret";

router.post("/register", (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  };

  Users.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        Users.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.json({ token: token });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({ error: "Users already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/login", (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => {
      if (user) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.json({ token: token });
      } else {
        res.send("Users does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Users.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("Users does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
