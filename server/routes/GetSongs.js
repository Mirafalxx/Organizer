const express = require("express");
const router = express.Router();
const { Songs } = require("../models");

router.get("/", async (req, res) => {
  try {
    const AllSongs = await Songs.findAll();
    res.send(AllSongs);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  songs"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // тут нет у тебя функции findById, и тут в принципе не нужны опшены внутри
    const AllSongsByID = await Songs.findByPk(parseInt(req.params.id));
    res.send(AllSongsByID);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  songs by id"
    });
    console.log(err);
  }
});

module.exports = router;
