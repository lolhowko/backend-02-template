const { getBooks, getBook, updateBook, deleteBook } = require("../controllers/books");

  
  const router = require("express").Router();
  
  router.get("/books", getBooks);
  router.get("/books/book/:id", getBook);
  router.patch("/books/book/:id", updateBook);
  router.delete("/books/book/:id", deleteBook);
  
  module.exports = router;
  