const fileupload = require("../fileupload");
const { submit } = require("../controller/Pizzacontroller");
const { display } = require("../controller/Pizzacontroller");
const { update } = require("../controller/Pizzacontroller");
const { Delete } = require("../controller/Pizzacontroller");
//const { Middleware } = require("../Middleware");
const router = require("express").Router();
/// routes
router.post("/pizzasubmit", fileupload.single("Pizzaimage"), submit);
router.get("/pizzadisplay", display);
router.put("/pizzaupdate", fileupload.single("Pizzaimage"), update);
router.delete("/pizzadelete", Delete);
module.exports = router;