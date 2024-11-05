import taskService from '../services/task.service.js';

export const addTask = async (req, res) => {
  const { pjId, title, description, priority, dueDate } = req.body;

  return res.status(200).json(
    await taskService.addTask(Number(pjId), title, description, priority, dueDate)
  );
};

export const getTasksByProjectId = async (req, res) => {
  const { projectId } = req.params;

  return res.status(200).json(
    await taskService.getTasksByProjectId(Number(projectId))
  );
};

export const editTaskById = async (req, res) => {
  const { projectId, taskId } = req.params;
  const { title, priority, dueDate, status } = req.body;

  return res.status(200).json(
    await taskService.editTaskById(Number(projectId), Number(taskId), title, priority, dueDate, status)
  );
}

export const deleteTaskById = async (req, res) => {
  const { projectId, taskId } = req.params;

  const deleted = await taskService.deleteTaskById(Number(projectId), Number(taskId));

  return (deleted) ? res.status(200).json(deleted) : res.status(204).send('no content');
};
