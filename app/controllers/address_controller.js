const { response } = require("express");
// const { Address } = require("../database/db"); // Original
const { Address } = require("../models/index");

module.exports = {
  async all(req, res = response) {
    let addresses = await Address.findAll({
      attributes: ["street"],
      include: {
        association: "resident",
        attributes: ["name"],
      },
    });

    res.json(addresses);
  },
};
