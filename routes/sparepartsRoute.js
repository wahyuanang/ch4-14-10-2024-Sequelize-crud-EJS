const express = require("express");
const router = express.Router();
const sparepartController = require("../controller/sparepartController");

// Spareparts API
router.post("/", sparepartController.createSparepart);
router.get("/", sparepartController.getAllSpareparts);
router.get("/:id", sparepartController.getSparepartById);
router.delete("/:id", sparepartController.deleteSparepartById);
router.patch("/:id", sparepartController.updateSparepart);

module.exports = router;
