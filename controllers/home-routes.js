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


router.get("/tech_blog", async (req, res) => {

    res.render("tech_blog", {
    });
});

router.get("/iBetter", async (req, res) => {

    res.render("iBetter", {
    });
});

router.get("/weather_dashboard", async (req, res) => {

    res.render("weather_dashboard", {
    });
});
  module.exports = router;