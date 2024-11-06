import {Router} from "express";
import * as projectController from '../controllers/project.controller.js';
import {validateCreateNewProject, validateParamProjectId} from "../validators/project.validator.js";
import {validateHandler} from "../middlewares/validateHandler.js";

const router = Router();

router.post('/', validateCreateNewProject, validateHandler, projectController.createNewProject);

router.get('/', projectController.getAllProjects);

router.get('/:projectId', validateParamProjectId, validateHandler, projectController.getProjectById);

router.delete('/:projectId', validateParamProjectId, validateHandler, projectController.deleteProjectById);

export default router;
