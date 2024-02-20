const router = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/?users/:id", getUser);
router.post("/?users", createUser);
router.patch("/?users/:user_id", updateUser);
router.delete("/?users/:user_id", deleteUser);

module.exports = router;
