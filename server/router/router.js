const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");


router.post("/login",userController.login);

router.post("/sineup",userController.sineup);



module.exports = router;
