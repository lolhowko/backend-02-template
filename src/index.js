const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

const loggerOne = require("./middleware/loggerOne");
const loggerTwo = require("./middleware/loggerTwo");

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`Connected to MongoDb: ${MONGO_URL}`))
  .catch((error) => console.log(error));

dotenv.config();

const app = express();

app.use(cors());

app.use(loggerOne);
app.use(loggerTwo);

app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${API_URL}:${PORT}`);
});
