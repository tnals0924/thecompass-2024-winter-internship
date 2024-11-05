class Task {
  constructor(pjId, title, description, priority, dueDate) {
    this.id = 1;
    this.pjId = pjId;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = 'not-started';
  }
}

export default Task;
