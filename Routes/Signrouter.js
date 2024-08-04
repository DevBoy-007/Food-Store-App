const { Signfunction } = require("../controller/signcontroller");
const router = require("express").Router();
router.post("/SignIn", Signfunction);
module.exports = router;