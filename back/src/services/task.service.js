import Task from "../models/Task.js";
import taskRepository from "../repositories/task.repository.js";
import {TaskError} from "../middlewares/CustomError.js";

const addTask = async (pjId, title, description, priority, dueDate) => {
  const task = new Task(pjId, title, description, priority, dueDate);

  return await taskRepository.save(task);
};

const getTasksByProjectId = async (projectId) => {
  return await taskRepository.findAllByProjectId(projectId);
};

const editTaskById = async (projectId, taskId, title, priority, dueDate, status) => {
  const task = await taskRepository.findById(projectId, taskId);


  if (!task instanceof Task) {
    throw TaskError.INVALID_TASK_ID;
  }

  task.title = title;
  task.priority = priority;
  task.dueDate = dueDate;
  task.status = status;

  return await taskRepository.save(task);
};

const deleteTaskById = async (projectId, taskId) => {
  return await taskRepository.deleteById(projectId, taskId);
};

export default {
  getTasksByProjectId,
  editTaskById,
  deleteTaskById,
  addTask,
};
