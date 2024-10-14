const express = require("express");
const router = express.Router();

const driverController = require("../controller/driverController");

// router.post("/", carController.createCar);
router.get("/", driverController.getAllDrivers);
router.get("/:id", driverController.getDriverById);
router.delete("/:id", driverController.deleteDriverById);
// router.patch("/:id", driverController.updateDriver);

module.exports = router;
