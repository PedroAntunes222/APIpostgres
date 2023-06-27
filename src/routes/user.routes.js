const router = require("express-promise-router")();
const userController = require("../controllers/user.controller");

router.get("/user/all", userController.listAllUsers);
router.get("/user/:id", userController.findUserById);
router.post("/user/add", userController.createUser);
router.put("/user/:id", userController.updateUserById);
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
