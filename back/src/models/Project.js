import { v4 as uuid } from 'uuid';

class Project {
  constructor(title, description) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.tasks = [];
  }
}

export default Project;


