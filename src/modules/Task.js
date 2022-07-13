import { parseISO, isToday, isThisWeek } from 'date-fns';
import Storage from './Storage';

const Task = () => {
  const { get } = Storage();

  const loadTask = (task) => {
    const TaskGrid = document.querySelector('.TaskGrid');
    const div = document.createElement('div');
    const holder = document.createElement('label');
    const title = document.createElement('p');
    const date = document.createElement('p');
    const check = document.createElement('input');
    const checkLabel = document.createElement('label');
    check.id = 'check';
    checkLabel.htmlFor = 'check';
    checkLabel.className = 'checkbtn';
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
        if (isToday(due)) loadTask(task);
      }
      if (date === 'thisweek') {
        if (isThisWeek(due)) loadTask(task);
      }
      if (date === 'all') {
        loadTask(task);
      }
    });
  };

  return { filterTask };
};

export default Task;
