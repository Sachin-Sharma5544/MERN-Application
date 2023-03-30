const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", userController.postLogin);
router.post("/signup", userController.postSignup);

module.exports = router;
