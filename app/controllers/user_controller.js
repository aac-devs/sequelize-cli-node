const { response } = require("express");
// const { User } = require("../database/db"); // Original
const { User } = require("../models/index");

module.exports = {
  async all(req, res = response) {
    let users = await User.findAll({
      include: {
        association: "residency",
        attributes: ["street"],
      },
    });

    res.json(users);
  },
};
