const express = require("express");
const router = express.Router();
const { BusinessList } = require("../models");

router.get("/", async (req, res) => {
  try {
    const AllBusinessList = await BusinessList.findAll();
    res.send(AllBusinessList);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  business"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // тут нет у тебя функции findById, и тут в принципе не нужны опшены внутри
    const AllBusinessListByID = await BusinessList.findByPk(
      parseInt(req.params.id)
    );
    res.send(AllBusinessListByID);
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while trying to get list of  a business by id"
    });
    console.log(err);
  }
});

module.exports = router;
