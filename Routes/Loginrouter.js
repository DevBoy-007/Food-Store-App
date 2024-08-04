const { Login } = require("../controller/Logincontroller");
const router = require("express").Router();
router.post("/Login", Login);
module.exports = router;