import express from 'express';
import taskRoute from "./routes/task.route.js";
import projectRoute from "./routes/project.route.js";
import bodyParser from "body-parser";
import {errorHandler} from "./middlewares/errorHandler.js";
import projectRepository from "./repositories/project.repository.js";
import {validateHandler} from "./middlewares/validateHandler.js";

const port = 8080;
const app = express();

projectRepository.init();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRoute);
app.use('/', taskRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
