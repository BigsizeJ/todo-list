/* eslint-disable no-unneeded-ternary */
import { parseISO, isToday, isThisWeek } from 'date-fns';
import Storage from './Storage';

const Task = () => {
  const { get, setClear } = Storage();

  const loadTask = (task, key, projectname) => {
    const TaskGrid = document.querySelector('.TaskGrid');
    const div = document.createElement('div');
    const holder = document.createElement('label');
    const title = document.createElement('p');
    const date = document.createElement('p');
    const check = document.createElement('input');

    check.id = 'check';
    if (projectname !== null) {
      const projects = get(key);
      if (projects === null) return;
      check.addEventListener('click', () => {
        Array.from(projects).forEach((project) => {
          if (project.name === projectname) {
            Array.from(project.task).forEach((item, index) => {
              if (item.title === task.title) {
                project.task.splice(index, 1);
                div.remove();
                setClear(key, projects);
              }
            });
          }
        });
      });
    } else {
      check.addEventListener('click', () => {
        const list = get(key);
        Array.from(list).forEach((item, index) => {
          if (item.title === task.title) {
            list.splice(index, 1);
            div.remove();
            setClear(key, list);
          }
        });
      });
    }

    title.textContent = task.title;
    date.textContent = task.dueDate;
    check.type = 'checkbox';
    holder.className = 'holder';

    holder.appendChild(check);
    holder.appendChild(title);

    switch (task.priority) {
      case 'low':
        div.style.borderLeft = '8px solid #00ff00';
        break;
      case 'medium':
        div.style.borderLeft = '8px solid #ffff00';
        break;
      case 'high':
        div.style.borderLeft = '8px solid #ffa500';
        break;
      default:
        break;
    }
    div.appendChild(holder);
    div.appendChild(date);
    TaskGrid.append(div);
  };

  const filterTask = (key, date) => {
    const tasks = get(key);

    if (tasks === null) return;
    Array.from(tasks).forEach((task) => {
      const arr = task.dueDate.split('-');
      const due = parseISO(`${arr[2]}-${arr[0]}-${arr[1]}`);
      if (date === 'today') {
        if (isToday(due)) loadTask(task, key, null);
      }
      if (date === 'thisweek') {
        if (isThisWeek(due)) loadTask(task, key, null);
      }
      if (date === 'all') {
        loadTask(task, key, null);
      }
    });
  };

  const ProjectTask = (key, name) => {
    const projects = get(key);
    if (projects === null) return;
    Array.from(projects).forEach((project) => {
      if (project.name === name) {
        Array.from(project.task).forEach((task) => {
          loadTask(task, key, name);
        });
      }
    });
  };

  return { filterTask, ProjectTask };
};

export default Task;
