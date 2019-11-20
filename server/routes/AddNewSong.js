"use strict";
const express = require("express");
const router = express.Router();
const { Songs } = require("../models");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    // cb(null, file.originalname + Date.now());
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  //reject file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else cb(null, false);
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// request-запроc response -ответ
router.post("/", upload.single("AlbumCover"), async (req, res) => {
  console.log("инфа о файле ", req.file);
  try {
    let { SongName, Genre, Artist } = req.body;
    let AlbumCover = req.file.path;
    if (SongName && Genre && Artist && AlbumCover) {
      const response = await Songs.create({
        SongName,
        Genre,
        Artist,
        AlbumCover
      });

      if (response)
        res.status(200).send({ message: "Successfully added " + SongName });
    } else {
      res.status(400).send({
        error: "Not enough data to add song"
      });
    }
  } catch (error) {
    console.error("/diseases error:", error);
    res.status(500).send({
      error: "An error occurred while trying to add song"
    });
  }
});

module.exports = router;
