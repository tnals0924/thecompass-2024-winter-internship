import fs from 'fs';
import path from 'path';
import { ProjectError } from "../middlewares/CustomError.js";
import project from "../models/Project.js";

let cachedProjects = [];

const init = () => {
  const projectsDir = './projects';

  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir);
    console.log('projects 폴더 생성');
  } else {
    console.log('projects 폴더가 이미 존재합니다.');
  }

  loadAllProjectsFromFile();
}

const loadAllProjectsFromFile = () => {
  const projectsDir = './projects';
  const projects = [];

  const files = fs.readdirSync(projectsDir);

  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(projectsDir, file);
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        projects.push(JSON.parse(data));
      } catch (error) {
        throw ProjectError.CANNOT_LOAD_FROM_FILE;
      }
    }
  });

  cachedProjects = projects;
}

const deleteProjectFile = (project) => {
  const filePath = `./projects/${project.id}.json`;

  try {
    fs.unlinkSync(filePath);
  } catch(error) {
    console.warn(error);
    throw ProjectError.CANNOT_LOAD_FROM_FILE;
  }
}

const saveProjectToFile = (project) => {
  const filePath = `./projects/${project.id}.json`;
  const jsonData = JSON.stringify(project, null, 2);

  if (!jsonData) {
    throw ProjectError.CANNOT_SAVE_TO_FILE;
  }

  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
      console.warn(err);
      throw ProjectError.CANNOT_SAVE_TO_FILE;
    }
  });
};

const save = async (project) => {
  const found = await findById(project.id);

  if (found) {
    const foundIndex = cachedProjects.indexOf(found);
    cachedProjects.splice(foundIndex, 1, project);
  } else {
    cachedProjects.push(project);
  }

  saveProjectToFile(project);

  return project;
}

const findAll = async () => {
  return [...cachedProjects];
}

const findById = async (id) => {
  return cachedProjects.find((project) => project.id === id);
}

const deleteById = async (id) => {
  const found = await findById(id);

  if (!found) return false;

  const foundIndex = cachedProjects.indexOf(found);

  cachedProjects.splice(foundIndex, 1);
  deleteProjectFile(found);

  return true;
}

export default {
  init,
  save,
  findAll,
  findById,
  deleteById,
}
