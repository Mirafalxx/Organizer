const express = require("express");
const router = express.Router();
//

const RegistrationUser = require("./Registration");
const Login = require("./Login");
const Profile = require("./Profile");
const AddBusiness = require("./AddBusiness");
const GetTodoList = require("./GetBusinessList");

//

/* POST REQUESTS*/

router.use("/register", RegistrationUser);
router.use("/login", Login);
router.use("/addBusiness", AddBusiness);
/* POST REQUESTS*/

/*GET REQUESTS */
router.use("/todoList", GetTodoList);
router.use("/profile", Profile);
/*GET REQUESTS */
module.exports = router;
