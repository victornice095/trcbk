const cloudinary = require("./cloudinary");
const fs = require("fs");
const User = require("../models/User");
const Verification = require("../models/Verification");
const { StatusCodes } = require("http-status-codes");

const cloudinaryupload = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: `User with ${email} not found!` });
  } else {
    const userExist = await Verification.findOne({ email });
    if (userExist) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: `Verification for ${email} has aleady been initiated!`,
      });
    } else {
      const uploader = async (path) => await cloudinary.uploads(path, "Images");

      if (req.method === "POST") {
        const urls = [];
        const files = req.files;

        for (const file of files) {
          const { path } = file;
          const newPath = await uploader(path);
          urls.push(newPath);
          fs.unlinkSync(path);
        }
        req.urls = {
          data: urls,
        };
        next();
      } else {
        res.status(405).json({
          error: `${req.method} method is not allowed`,
        });
      }
    }
  }
};

module.exports = cloudinaryupload;
