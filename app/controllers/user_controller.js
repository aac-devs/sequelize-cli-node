const { response } = require("express");
const { User } = require("../database/db");

module.exports = {
  async all(req, res = response) {
    let users = await User.findAll();

    res.json(users);
  },
};
