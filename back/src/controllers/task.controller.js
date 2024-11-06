import taskService from '../services/task.service.js';

export const addTask = async (req, res, next) => {
  try {
    const { pjId, title, description, priority, dueDate } = req.body;

    return res.status(200).json(
      await taskService.addTask(pjId, title, description, priority, dueDate)
    );
  } catch (error) {
    next(error);
  }
};

export const getTasksByProjectId = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    return res.status(200).json(
      await taskService.getTasksByProjectId(projectId)
    );
  } catch (error) {
    next(error);
  }
};

export const editTaskById = async (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;
    const { title, priority, dueDate, status } = req.body;

    return res.status(200).json(
      await taskService.editTaskById(projectId, taskId, title, priority, dueDate, status)
    );
  } catch (error) {
    next(error);
  }
};

export const deleteTaskById = async (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;

    const deleted = await taskService.deleteTaskById(projectId, taskId);

    return (deleted) ? res.status(200).json(deleted) : res.status(204).send('no content');
  } catch (error) {
    next(error);
  }
};
