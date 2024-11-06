import {Router} from "express";
import * as taskController from '../controllers/task.controller.js';
import {validateAddTask, validateDeleteTaskById, validateEditTask} from "../validators/task.validator.js";
import {validateParamProjectId} from "../validators/project.validator.js";
import {validateHandler} from "../middlewares/validateHandler.js";

const router = Router();

router.post('/projects/:projectId/tasks/', validateAddTask, validateHandler, taskController.addTask);

router.get('/projects/:projectId/tasks/', validateParamProjectId, validateHandler, taskController.getTasksByProjectId);

router.put('/projects/:projectId/tasks/:taskId', validateEditTask, validateHandler, taskController.editTaskById);

router.delete('/projects/:projectId/tasks/:taskId', validateDeleteTaskById, validateHandler, taskController.deleteTaskById);

export default router;
