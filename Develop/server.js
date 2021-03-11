const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
