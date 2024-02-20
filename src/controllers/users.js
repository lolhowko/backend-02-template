const getUsers = (request, response) => {
  //GET ALL
  response.status(200);
  response.send("Users!");
};

const getUser = (request, response) => {
  //GET user by ID
  const { id } = request.params;
  response.status(200);
  response.send(`User ID is ${id}`);
};

const createUser = (request, response) => {
  //Create new user
  response.status(200);
  response.send("Hellofrom POST!");
};

const updateUser = (request, response) => {
  //Update user by ID
  const { id } = request.params;
  response.status(200);
  response.send(`UPD ${id} user!`);
};

const deleteUser = (request, response) => {
  //Delete user
  const { id } = request.params;
  response.status(200);
  response.send(`Delete ${id} user!`);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
