const express = require("express");
const router = express.Router();
const signin = require("./handlers/signin")
const signup = require("./handlers/signup")
const forgetpassword = require("./handlers/forgetpassword")
const dashboard = require("./handlers/dashboard")

router.get("/signin", signin.get);
router.post("/signin", signin.SET);

router.get("/signup", signup.get);
router.post("/signup", signup.SET);

router.get("/forgetpassword", forgetpassword.get);
router.post("/forgetpassword", forgetpassword.SET);

router.get("/dashboard", dashboard.get);
router.post("/dashboard", dashboard.SET);

// router.set();
module.exports=(router);