const fileupload = require("../fileupload");
const { submit } = require("../controller/Burgercontroller");
const { display } = require("../controller/Burgercontroller");
const { update } = require("../controller/Burgercontroller");
const { Delete } = require("../controller/Burgercontroller");
//const { Middleware } = require("../Middleware");
const router = require("express").Router();
/// routes
router.post("/burgersubmit", fileupload.single("Burgerimage"), submit);
router.get("/burgerdisplay", display);
router.put("/burgerupdate", fileupload.single("Burgerimage"), update);
router.delete("/burgerdelete", Delete);
module.exports = router;