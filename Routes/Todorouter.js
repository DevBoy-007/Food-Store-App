const { submittask } = require("../controller/Todocontroller");
const { displaytask } = require("../controller/Todocontroller");
const { updatetask } = require("../controller/Todocontroller");
const { Deletetask } = require("../controller/Todocontroller");
const router = require("express").Router();
/// routes
router.post("/submittask", submittask);
router.get("/displaytask", displaytask);
router.put("/updatetask", updatetask);
router.delete("/deletetask", Deletetask);
module.exports = router;