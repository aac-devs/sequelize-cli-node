require("dotenv").config();
const express = require("express");
const app = express();
const { connection } = require("./database/db");

const port = process.env.PORT || 4000;

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas:
app.use("/", require("./routes"));

// Server running:
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  connection.sync({ force: false }).then(() => {
    console.log("Se ha establecido la conexión con la Base de Datos");
  });
});
