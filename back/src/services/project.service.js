import Project from "../models/Project.js";
import projectRepository from "../repositories/project.repository.js";
import {ProjectError} from "../middlewares/CustomError.js";

const createNewProject = async (title, description) => {
  const project = new Project(title, description);

  if (!(project instanceof Project)) {
    throw ProjectError.INVALID_PROJECT_ID;
  }

  return await projectRepository.save(project);
};

const getAllProjects = async () => {
  return await projectRepository.findAll()
    .then((projects) =>
      projects.map(
        (project) => ({
          id: project.id,
          title: project.title,
          description: project.description,
        })
      )
    );
};

const getProjectById = async (projectId) => {
  const project = await projectRepository.findById(projectId);

  if (!(project instanceof Project)) {
    throw ProjectError.INVALID_PROJECT_ID;
  }

  return project;
};

const deleteProjectById = async (projectId) => {
  return await projectRepository.deleteById(projectId);
};

export default {
  createNewProject,
  getAllProjects,
  getProjectById,
  deleteProjectById,
};
