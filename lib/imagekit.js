const Imagekit = require("imagekit");
require("dotenv").config();

const imagekit = new Imagekit({
  publicKey: "public_+xTaixnumzCjsRq9YwvX63cGxto=",
  privateKey: "private_afJPNNITsuWdfj7T1trFDfhhBHQ=",
  urlEndpoint: "https://ik.imagekit.io/znozxmysw",
});

module.exports = imagekit;
