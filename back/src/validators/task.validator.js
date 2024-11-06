import {validateParamProjectId} from "./project.validator.js";
import {body, param} from "express-validator";

const taskPriority = ['high', 'medium', 'low'];
const taskStatus = ['not-started', 'in-progress', 'done'];

export const validateBodyPriority =   body('priority')
  .notEmpty()
  .withMessage('priority는 필수로 입력해야 합니다.')
  .custom((value) => taskPriority.includes(value))
  .withMessage('priority는 high | medium | low 중 하나여야 합니다.');

export const validateBodyStatus =   body('status')
  .notEmpty()
  .withMessage('status는 필수로 입력해야 합니다.')
  .custom((value) => taskStatus.includes(value))
  .withMessage('status는 not-started | in-progress | done 중 하나여야 합니다.');

export const validateParamTaskId = param('taskId')
  .notEmpty()
  .withMessage('taskId는 필수로 입력해야 합니다.')
  .isUUID(4)
  .withMessage('taskId는 UUID로 입력해야 합니다.');

export const validateAddTask = [
  validateParamProjectId,
  body('pjId')
    .notEmpty()
    .withMessage('pjId는 필수로 입력해야 합니다.')
    .isUUID(4)
    .withMessage('pjId는 UUID로 입력해야 합니다.'),
  body('title')
    .notEmpty()
    .withMessage('title은 필수로 입력해야 합니다.')
    .isString()
    .withMessage('title은 문자열로 입력해야 합니다.'),
  body('description')
    .notEmpty()
    .withMessage('description은 필수로 입력해야 합니다.')
    .isString()
    .withMessage('description은 문자열로 입력해야 합니다.'),
  body('dueDate')
    .notEmpty()
    .withMessage('dueDate는 필수로 입력해야 합니다.')
    .isString()
    .withMessage('dueDate는 날짜로 입력해야 합니다.'),
  validateBodyPriority,
];

export const validateEditTask = [
  validateParamProjectId,
  validateParamTaskId,
  body('title')
    .notEmpty()
    .withMessage('title은 필수로 입력해야 합니다.')
    .isString()
    .withMessage('title은 문자열로 입력해야 합니다.'),
  validateBodyPriority,
  body('dueDate')
    .notEmpty()
    .withMessage('dueDate는 필수로 입력해야 합니다.')
    .isString()
    .withMessage('dueDate는 날짜로 입력해야 합니다.'),
  validateBodyStatus,
];

export const validateDeleteTaskById = [
  validateParamProjectId,
  validateParamTaskId,
];
