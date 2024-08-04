const { Adlogin } = require("../controller/Adlogincontroller");
const router = require("express").Router();
router.post("/Adlogin", Adlogin);
module.exports = router;