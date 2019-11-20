// "use strict";
// var express = require("express");
// var router = express.Router();
// var { Users } = require("../models");
// const jwt = require("jsonwebtoken");
// // import Sequelize from 'sequelize'

// /* GET users listing. */
// // request-запроc response -ответ
// router.post("/regUser", async (req, res) => {
//   console.log("Registration user", req.body);
//   try {
//     let { email, password } = req.body;
//     if (email && password) {
//       const response = await Users.create({
//         email,
//         password
//       });

//       if (response) res.status(200).send({ message: "Successfully added" });
//     } else {
//       res.status(400).send({
//         error: "Not enough data to add song"
//       });
//     }
//   } catch (error) {
//     console.error("/diseases error:", error);
//     res.status(500).send({
//       error: "An error occurred while trying to add song"
//     });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
router.use(cors());

process.env.SECRET_KEY = "secret";

router.post("/", (req, res) => {
  const today = new Date();
  const userData = {
    email: req.body.email,
    password: req.body.password,
    created: today
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
            res.send("error1: " + err);
          });
      } else {
        res.json({ error: "Users already exists" });
        console.log({ error: "Users already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
