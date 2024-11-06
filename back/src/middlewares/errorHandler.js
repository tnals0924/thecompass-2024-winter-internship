import formatTimeStamp from "../utils/utils.js";

export const errorHandler = (error, req, res, next) => {
  if (error instanceof Error) {
    const status = error.status | 500;
    const message = error.message;

    res.status(status).send({
      timestamp: formatTimeStamp(Date.now()),
      message: message,
    });
  }
}
