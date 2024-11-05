import {Router} from "express";
import * as projectController from '../controllers/project.controller.js';

const router = Router();

router.post('/', projectController.createNewProject);

router.get('/', projectController.getAllProjects);

router.get('/:projectId', projectController.getProjectById);

router.delete('/:projectId', projectController.deleteProjectById);

export default router;
