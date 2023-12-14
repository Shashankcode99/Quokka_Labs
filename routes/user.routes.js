const express = require("express");
const router = express.Router();
const verification = require("../middlewares/verification");
const verifySource = require("../middlewares/preLoginVerification");
const UserController = require("../controllers/user.controller")

/**
 * @description Endpoint to register a new user
 */
router.post("/register", UserController.registerUser);

/**
 * @description Endpoint to login a user and get authentication token
 */
router.post("/login", verifySource, UserController.loginUser);

/**
 * @description Endpoint to get a users profile
 */
router.get("/get-profile/:id", verification, UserController.getUserProfile);

module.exports = router;
