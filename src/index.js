const express = require("express");
const dotenv = require("dotenv");

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

dotenv.config();

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

// app.get("/", (request, response) => {
//   response.status(200);
//   response.send("Hello, world!");
// });

// app.post("/", (request, response) => {
//   response.status(200);
//   response.send("Hellofrom POST!");
// });

// app.get("/?users/:id", (request, response) => {
//   const { id } = request.params;
//   response.status(200);
//   response.send(`User ID is ${id}`);
// });

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${API_URL}:${PORT}`);
});
