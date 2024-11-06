import { v4 as uuid } from 'uuid';

class Task {
  constructor(pjId, title, description, priority, dueDate) {
    this.id = uuid();
    this.pjId = pjId;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = 'not-started';
  }

  update(title, priority, dueDate, status) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
  }
}

export default Task;
