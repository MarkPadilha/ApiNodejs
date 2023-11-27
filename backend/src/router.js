const express = require("express");

const tasksController = require("./controllers/tasksControllers");
const tasksMiddlewares = require("./middlewares/tasksMiddlewares");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddlewares.validateBody, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", tasksController.updateTask);
module.exports = router;