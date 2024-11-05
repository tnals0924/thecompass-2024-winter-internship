import express from 'express';
import taskRoute from "./routes/task.route.js";
import projectRoute from "./routes/project.route.js";
import bodyParser from "body-parser";

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRoute);
app.use('/', taskRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
