const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const AllUsers = await Users.findAll();
    res.send(AllUsers);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  users"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // тут нет у тебя функции findById, и тут в принципе не нужны опшены внутри
    const AllSongsByID = await Users.findByPk(parseInt(req.params.id));
    res.send(AllSongsByID);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  songs by id"
    });
    console.log(err);
  }
});

module.exports = router;
