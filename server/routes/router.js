const express = require("express");
const router = express.Router();
//
const AddNewSong = require("./AddNewSong");
const GetAllSongs = require("./GetSongs");
const RegistrationUser = require("./Registration");
const GestAllUsers = require("./GetUsers");
const TestLogin = require("./Login");
const Profile = require("./Profile");
//

/* POST REQUESTS*/

router.use("/addSong", AddNewSong);
router.use("/register", RegistrationUser);
router.use("/AllUsers", GestAllUsers);
router.use("/login", TestLogin);
/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/getAllSongs", GetAllSongs);
router.use("/profile", Profile);
/*GET REQUESTS */
module.exports = router;
