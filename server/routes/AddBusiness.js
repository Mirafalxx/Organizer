const express = require("express");
const router = express.Router();
const { BusinessList } = require("../models");

router.post("/", async (req, res) => {
  try {
    let List = req.body;
    if (List) {
      const response = await BusinessList.create(List);

      if (response)
        res.status(200).send({
          message: "Successfully added " + JSON.stringify(List)
        });
      console.log(List);
    } else {
      res.status(400).send({
        error: "Not enough data to add song"
      });
    }
  } catch (error) {
    console.error(" error:", error);
    res.status(500).send({
      error: "An error occurred while trying to add Business"
    });
  }
});

module.exports = router;
