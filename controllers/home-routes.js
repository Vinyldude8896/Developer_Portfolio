const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {

      res.render("homepage", {
      });
  });


  router.get("/about_me", async (req, res) => {

    res.render("about_me", {
    });
});

  module.exports = router;