const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

const loggerOne = require("./middleware/loggerOne");
const loggerTwo = require("./middleware/loggerTwo");

dotenv.config();

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

app.use(cors());

app.use(loggerOne);
app.use(loggerTwo);

app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${API_URL}:${PORT}`);
});
