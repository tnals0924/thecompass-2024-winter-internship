import projectService from '../services/project.service.js';

export const createNewProject = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    return res.status(200)
      .send(await projectService.createNewProject(title, description));
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    return res.status(200).json(
      await projectService.getAllProjects()
    );
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    return res.status(200).json(
      await projectService.getProjectById(projectId)
    );
  } catch (error) {
    next(error);
  }
};

export const deleteProjectById = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const deleted = await projectService.deleteProjectById(projectId);

    return (deleted) ? res.status(200).send('OK') : res.status(404).send('Not Found');
  } catch (error) {
    next(error);
  }
};
