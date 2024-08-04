const { Adsignfunction } = require("../controller/Adsigncontroller"); //route
const router = require("express").Router();
router.post("/AdsignIn", Adsignfunction);
module.exports = router;