const router = require("express-promise-router")();
const userController = require("../controllers/user.controller");

router.get("/user", (req, res) => {
    res.status(200).send({
      success: "true",
      message: "Hello",
      version: "1.0.0",
    });
  });
router.get("/user/:id", userController.findById);
router.post("/user/add", userController.createUser);
router.put("/user/:id", userController.updateById);
router.delete("/user/:id", userController.deleteById);

module.exports = router;
