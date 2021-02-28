const { Router } = require("express");
const router = Router();

// Importar controladores
const userController = require("./controllers/user_controller");
const addressController = require("./controllers/address_controller");

// Home
router.get("/", (req, res) => {
  res.json("route get");
});

// User
router.get("/users", userController.all);
router.get("/addresses", addressController.all);

module.exports = router;
