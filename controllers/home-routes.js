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

router.get("/projects", async (req, res) => {

    res.render("projects", {
    });
});

router.get("/employee_tracker", async (req, res) => {

    res.render("employee_tracker", {
    });
});

  module.exports = router;