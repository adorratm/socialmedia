const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
  
  let loadedUser;
  exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email: email });
  
      if (!user) {
        const error = new Error("Sistemde Bu Email Adresine Ait Kullanıcı Bilgileri Bulunamadı!");
        error.statusCode = 404;
        throw error;
      }
      loadedUser = user;
  
      const comparePassword = await bcrypt.compare(password, user.password);
  
      if (!comparePassword) {
        const error = new Error("Girmiş Olduğunuz Şifre Sistemdeki Şifre İle Uyuşmuyor!");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
        expiresIn: "30m", // it will expire token after 20 minutes and if the user then refresh the page will log out
      });
      res.status(200).json({ token: token });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.getUser = (req, res, next) => { // this function will send user data to the front-end as I said above authFetch on the user object in nuxt.config.js will send a request and it will execute
    res.status(200).json({
      user: loadedUser,
    });
  };