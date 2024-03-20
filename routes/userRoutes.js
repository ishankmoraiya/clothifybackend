const express = require("express");
const { getUser, createUser } = require("../controller/usercontroller");

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-user", getUser);

module.exports = router;
