const User = require("../models/user");

const getUsers = (request, response) => {
  //GET ALL

  return User.find({})
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(404).send(e.message);
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
  //GET user by ID
  const { id } = request.params;

  return User.findById(id)
    .then((user) => {
      if (!user) {
        response.sendStatus(404);
      } else {
        response.status(200).send(user);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const createUser = (request, response) => {
  //Create new user

  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(404).send(e.message);
      response.status(500).send(e.message);
    });
};

const updateUser = (request, response) => {
  //Update user by ID
  const { id } = request.params;

  return User.findByIdAndUpdate(
    id,
    { ...request.body },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        response.sendStatus(404);
      } else {
        response.status(200).send(user);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteUser = (request, response) => {
  //Delete user
  const { id } = request.params;

  return User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        response.sendStatus(404);
      } else {
        response.status(200).send("Success");
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
