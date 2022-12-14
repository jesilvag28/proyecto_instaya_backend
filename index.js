require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbo = require("./db");
const orders = require("./routes/orders");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const checkAuth = require("./middleware/checkAuth");

dbo();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(logger());

app.use("/api/orders", orders);
app.use("/", authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => 
    console.log(`API REST en servicio.... corriendo en el puerto ${port}`)
);

