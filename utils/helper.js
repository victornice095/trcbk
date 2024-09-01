const crypto = require('crypto')


const createRandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buff) => {
      if (err) reject(err);
      const token = buff.toString("hex");
      console.log("token", token)
      resolve(token);
    });
  });
module.exports = { createRandomBytes };
