const fileupload = require("../fileupload");
const { submit } = require("../controller/wrapcontroller");
const { display } = require("../controller/wrapcontroller");
const { update } = require("../controller/wrapcontroller");
const { Delete } = require("../controller/wrapcontroller");
//const { Middleware } = require("../Middleware");
const router = require("express").Router();
/// routes
router.post("/wrapsubmit", fileupload.single("Wrapimage"), submit);
router.get("/wrapdisplay", display);
router.put("/wrapupdate", fileupload.single("Wrapimage"), update);
router.delete("/wrapdelete", Delete);
module.exports = router;