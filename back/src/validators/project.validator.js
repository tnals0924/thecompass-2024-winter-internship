import {body, param} from "express-validator";

export const validateCreateNewProject = [
  body('title')
    .isString()
    .withMessage('title은 문자열로 입력해야 합니다.')
    .notEmpty()
    .withMessage('title은 필수로 입력해야 합니다.'),
  body('description')
    .isString()
    .withMessage('description은 문자열로 입력해야 합니다.')
    .notEmpty()
    .withMessage('description은 필수로 입력해야 합니다.'),
];

export const validateParamProjectId = param('projectId')
  .isUUID(4)
  .withMessage('projectId는 UUID로 입력해야 합니다.')
  .notEmpty()
  .withMessage('projectId은 필수로 입력해야 합니다.');
