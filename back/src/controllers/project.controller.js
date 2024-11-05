import projectService from '../services/project.service.js';

export const createNewProject = async (req, res) => {
  const { title, description } = req.body;

  return res.status(200).json(
    await projectService.createNewProject(title, description)
  );
};

export const getAllProjects = async (req, res) => {
  return res.status(200).json(
    await projectService.getAllProjects()
  );
};

export const getProjectById = async (req, res) => {
  const { projectId } = req.params;

  return res.status(200).json(
    await projectService.getProjectById(Number(projectId))
  );
};

export const deleteProjectById = async (req, res) => {
  const { projectId } = req.params;

  const deleted = await projectService.deleteProjectById(Number(projectId));

  return (deleted) ? res.status(200).send('OK') : res.status(404).send('Not Found');
};
