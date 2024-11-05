let idIncrementAmount = 7;

const projects = [
  {
    id: 1,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [
      {
        "pjId": 1, // project id
        "id": 1,
        "title": "태스크 제목",
        "description": "태스크 설명",
        "priority": "high", // high | medium | low
        "dueDate": "2024-11-10",
        "status": "in-progress" // not-started | in-progress | done
      },
      {
        "pjId": 1, // project id
        "id": 2,
        "title": "태스크 제목",
        "description": "태스크 설명",
        "priority": "high", // high | medium | low
        "dueDate": "2024-11-10",
        "status": "in-progress" // not-started | in-progress | done
      }
    ],
  },
  {
    id: 2,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [
      {
        "pjId": 2, // project id
        "id": 3,
        "title": "태스크 제목",
        "description": "태스크 설명",
        "priority": "high", // high | medium | low
        "dueDate": "2024-11-10",
        "status": "in-progress" // not-started | in-progress | done
      }
    ],
  },
  {
    id: 3,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [],
  },
  {
    id: 4,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [],
  },
  {
    id: 5,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [],
  },
  {
    id: 6,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [],
  },
  {
    id: 7,
    title: "프로젝트 제목1",
    description: "설명",
    tasks: [],
  },
];

const save = async (project) => {
  const found = await findById(project.id);

  if (found) {
    const foundIndex = projects.indexOf(found);
    projects.splice(foundIndex, 1, project);
  } else {
    project.id = ++idIncrementAmount;
    projects.push(project);
  }

  return project;
}

const findAll = async () => {
  return [...projects];
}

const findById = async (id) => {
  return projects.find(((project) => project.id === id));
}

const deleteById = async (id) => {
  const found = await findById(id);

  if (!found) return false;

  const foundIndex = projects.indexOf(found);
  projects.splice(foundIndex, 1);
  return true;
}

export default {
  save,
  findAll,
  findById,
  deleteById,
}
