import projectRepository from "./project.repository.js";

let idIncrementAmount = 2;

const save = async (newTask) => {
  const { project, task } = await findProjectAndTaskById(newTask.pjId, newTask.id);

  console.log(project);

  if (!project.tasks) return null;

  const tasks = project.tasks

  if (task) {
    const foundIndex = tasks.indexOf(newTask);
    tasks.splice(foundIndex, 1, newTask);
  } else {
    newTask.id = ++idIncrementAmount;
    tasks.push(newTask);
  }

  await projectRepository.save(project);

  return newTask;
}

const findAllByProjectId = async (projectId) => {
  const project = await projectRepository.findById(projectId);

  console.log(project);

  if (!project) return null;

  return [...project.tasks];
}

const findById = async (projectId, taskId) => {
  const project = await projectRepository.findById(projectId);

  return project.tasks.find((task) => task.id === taskId);
}

const deleteById = async (projectId, taskId) => {
  const { project, task } = await findProjectAndTaskById(projectId, taskId);

  if (!task) return false;

  const taskIndex = project.tasks.indexOf(taskId);
  project.tasks.splice(taskIndex, 1);
  return true;
}

const findProjectAndTaskById = async (projectId, taskId) => {
  const project = await projectRepository.findById(projectId);

  console.log(project);

  if (!project.tasks) return { project };

  const task = project.tasks.find((task) => task.id === taskId);

  return { project, task };
}

export default {
  save,
  findAllByProjectId,
  findById,
  deleteById,
}
