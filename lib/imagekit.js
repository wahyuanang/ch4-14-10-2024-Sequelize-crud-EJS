const Imagekit = require("imagekit");
require("dotenv").config();

const imagekit = new Imagekit({
    publicKey: "public_DVITNf+5XTiO9Y3dKRqIlhuE58Q=",
    privateKey: "private_fNqHqD5ocFxgaoj8uWVeiJdXf9s=",
    urlEndpoint: "https://ik.imagekit.io/imamth",
});

module.exports = imagekit;
