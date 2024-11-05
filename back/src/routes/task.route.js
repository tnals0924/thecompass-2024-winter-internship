import {Router} from "express";
import * as taskController from '../controllers/task.controller.js';

const router = Router();

router.post('/projects/:projectId/tasks/', taskController.addTask);

router.get('/projects/:projectId/tasks/', taskController.getTasksByProjectId);

router.put('/projects/:projectId/tasks/:taskId', taskController.editTaskById);

router.delete('/projects/:projectId/tasks/:taskId', taskController.deleteTaskById);

export default router;
