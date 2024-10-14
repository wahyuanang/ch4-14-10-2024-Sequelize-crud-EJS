const multer = require("multer");

// multer filtering image
const multerFiltering = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    console.log("ini tidak bisa");
    throw new Error("image format must be png or jpg");
  }
};

const upload = multer({
  fileFilter: multerFiltering,
  dest: "public/images/users",
});

module.exports = upload;
