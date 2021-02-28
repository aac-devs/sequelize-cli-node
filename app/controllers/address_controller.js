const { response } = require("express");
const { Address } = require("../database/db");

module.exports = {
  async all(req, res = response) {
    let addresses = await Address.findAll({
      attributes: ["street"],
    });

    res.json(addresses);
  },
};
