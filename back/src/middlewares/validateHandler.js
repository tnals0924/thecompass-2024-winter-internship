import {validationResult} from "express-validator";
import formatTimeStamp from "../utils/utils.js";

export const validateHandler = (req, res, next) => {
  const error = validationResult(req);

  //console.log(error.array());

  if (error.isEmpty()) {
    return next();
  }

  res
    .status(400)
    .send({
      timestamp: formatTimeStamp(Date.now()),
      message: error.array(),
    })
};
