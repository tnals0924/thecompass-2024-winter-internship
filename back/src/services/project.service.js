import Project from "../models/Project.js";
import projectRepository from "../repositories/project.repository.js";

const createNewProject = async (title, description) => {
  const project = new Project(title, description);

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
  return await projectRepository.findById(projectId);
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
