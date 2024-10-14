const { Spareparts } = require("../models");

async function createSparepart(req, res) {
  const { name, typecar, price, stock } = req.body;

  try {
    const newSparepart = await Spareparts.create({
      name,
      typecar,
      price,
      stock,
    });
    res.status(200).json({
      status: "Success",
      message: "Ping successfully",
      isSuccess: true,
      data: newSparepart,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function getAllSpareparts(req, res) {
  try {
    const spareparts = await Spareparts.findAll();

    res.status(200).json({
      status: "200",
      message: "Success get spareparts data",
      isSuccess: true,
      data: spareparts,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get spareparts data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function getSparepartById(req, res) {
  const id = req.params.id;
  try {
    const sparepart = await Spareparts.findByPk(id);

    if (!sparepart) {
      return res.status(404).json({
        status: "404",
        message: "Sparepart Not Found!",
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success get sparepartS data",
      isSuccess: true,
      data: sparepart,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get spareparts data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function deleteSparepartById(req, res) {
  const id = req.params.id;
  try {
    const sparepart = await Spareparts.findByPk(id);

    if (sparepart) {
      await sparepart.destroy();

      res.status(200).json({
        status: "200",
        message: "Success get spareparts data",
        isSuccess: true,
        data: sparepart,
      });
    } else {
      res.status(404).json({
        status: "404",
        message: "Sparepart Not Found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get spareparts data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function updateSparepart(req, res) {
  const id = req.params.id;
  const { name, typecar, price, stock } = req.body;
  console.log("id", id);
  try {
    const sparepart = await Spareparts.findByPk(id);

    if (sparepart) {
      sparepart.name = name;
      sparepart.typecar = typecar;
      sparepart.price = price;
      sparepart.stock = stock;

      await sparepart.save();

      res.status(200).json({
        status: "200",
        message: "Success get spareparts data",
        isSuccess: true,
        data: sparepart,
      });
    } else {
      res.status(404).json({
        status: "404",
        message: "Sparepart Not Found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get spareparts data",
      isSuccess: false,
      error: error.message,
    });
  }
}

module.exports = {
  createSparepart,
  getAllSpareparts,
  getSparepartById,
  deleteSparepartById,
  updateSparepart,
};
