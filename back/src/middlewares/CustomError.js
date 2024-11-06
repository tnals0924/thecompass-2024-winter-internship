class CustomError extends Error {
  status = 500;
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export const ProjectError = {
  INVALID_PROJECT_ID: new CustomError(400, '유효하지 않은 Project ID입니다.'),
  CANNOT_LOAD_FROM_FILE: new CustomError(500, '파일에서 Project 데이터를 가져올 수 없습니다.'),
  CANNOT_SAVE_TO_FILE: new CustomError(500, '파일에 Project 데이터를 저장할 수 없습니다.'),
};

export const TaskError = {
  INVALID_TASK_ID: new CustomError(400, '유효하지 않은 Task ID입니다.'),
};

Object.freeze(ProjectError);

export default {
  ProjectError,
  TaskError,
};
