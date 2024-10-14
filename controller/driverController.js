const { Driver } = require("../models");

async function getAllDrivers(req, res) {
  try {
    const drivers = await Driver.findAll();

    res.status(200).json({
      status: "200",
      message: "Success get drivers data",
      isSuccess: true,
      data: { drivers },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get drivers data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function getDriverById(req, res) {
  const id = req.params.id;
  try {
    const driver = await Driver.findByPk(id);

    if (!driver) {
      return res.status(404).json({
        status: "404",
        message: "Driver Not Found!",
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success get drivers data",
      isSuccess: true,
      data: driver,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get drivers data",
      isSuccess: false,
    });
  }
}
async function deleteDriverById(req, res) {
  const id = req.params.id;
  try {
    const driver = await Driver.findByPk(id);

    if (driver) {
      await driver.destroy();

      res.status(200).json({
        status: "200",
        message: "Success get drivers data",
        isSuccess: true,
        data: driver,
      });
    } else {
      res.status(200).json({
        status: "204",
        message: "Success delete drivers data",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
      data: null,
    });
  }
}

module.exports = {
  getAllDrivers,
  getDriverById,
  deleteDriverById,
};
