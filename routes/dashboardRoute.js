const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");
const upload = require("../middlewares/uploader");

router.get("/users", dashboardController.userPage);
router.get("/users/create", dashboardController.createPage);
router.post(
  "/users/create",
  upload.single("photoProfile"),
  dashboardController.createUser
);
// view engine = gak ada put/patch dan delete

module.exports = router;
