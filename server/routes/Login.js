const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
router.use(cors());

process.env.SECRET_KEY = "secret";

router.post("/", (req, res) => {
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
        console.log("are u loggin in");
      } else {
        res.send("Users does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});
module.exports = router;
