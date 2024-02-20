const getBooks = (request, response) => {
  //GET ALL books
  response.status(200);
  response.send("Books!");
};

const getBook = (request, response) => {
  //GET book by ID
  const { id } = request.params;
  response.status(200);
  response.send(`Book ID is ${id}`);
};

const updateBook = (request, response) => {
  //Update book by ID
  const { id } = request.params;
  response.status(200);
  response.send(`UPD ${id} book!`);
};

const deleteBook = (request, response) => {
  //Delete book
  const { id } = request.params;
  response.status(200);
  response.send(`Delete ${id} book!`);
};

module.exports = {
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
