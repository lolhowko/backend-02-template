const router = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const loggerUrl = require('../middleware/loggerUrl')

router.use(loggerUrl);

router.get("/", getUsers);
router.get("/?users/:id", getUser);
router.post("/?users", createUser);
router.patch("/?users/:id", updateUser);
router.delete("/?users/:id", deleteUser);

module.exports = router;
