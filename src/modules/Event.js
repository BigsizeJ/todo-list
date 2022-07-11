import {
  format, parseISO, isToday, isThisWeek,
} from 'date-fns';
import Interface from './Interface';
import Storage from './Storage';

const Event = (() => {
  const {
    Home, Today, Thisweek, Task,
  } = Interface();
  const { set, get } = Storage();

  const loadTask = (key) => {
    const tasks = get(key);
    const TaskGrid = document.querySelector('.TaskGrid');
    if (tasks === null) return;
    Array.from(tasks).forEach((task) => {
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
          div.style.borderLeftColor = 'yellow';
          break;
        case 'medium':
          div.style.borderLeftColor = 'orange';
          break;
        case 'high':
          div.style.borderLeftColor = 'red';
          break;
        default:
          break;
      }
      div.appendChild(holder);
      div.appendChild(date);
      TaskGrid.append(div);
    });
  };

  const LoadTodayTask = (key) => {
    const tasks = get(key);
    const TaskGrid = document.querySelector('.TaskGrid');
    if (tasks === null) return;

    Array.from(tasks).forEach((task) => {
      const arr = task.dueDate.split('-');
      const due = `${arr[2]}-${arr[0]}-${arr[1]}`;

      if (isToday(parseISO(due))) {
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
            div.style.borderLeftColor = 'yellow';
            break;
          case 'medium':
            div.style.borderLeftColor = 'orange';
            break;
          case 'high':
            div.style.borderLeftColor = 'red';
            break;
          default:
            break;
        }
        div.appendChild(holder);
        div.appendChild(date);
        TaskGrid.append(div);
      }
    });
  };

  const LoadThisWeekTask = (key) => {
    const tasks = get(key);
    const TaskGrid = document.querySelector('.TaskGrid');
    if (tasks === null) return;

    Array.from(tasks).forEach((task) => {
      const arr = task.dueDate.split('-');
      const due = `${arr[2]}-${arr[0]}-${arr[1]}`;

      if (isThisWeek(parseISO(due))) {
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
            div.style.borderLeftColor = 'yellow';
            break;
          case 'medium':
            div.style.borderLeftColor = 'orange';
            break;
          case 'high':
            div.style.borderLeftColor = 'red';
            break;
          default:
            break;
        }
        div.appendChild(holder);
        div.appendChild(date);
        TaskGrid.append(div);
      }
    });
  };

  const activeButton = (element, className) => {
    if (element.classList.contains('active')) return;
    const buttons = document.querySelectorAll(`.${className}`);
    Array.from(buttons).forEach((button) => {
      button.classList.remove('active');
    });
    element.classList.add('active');
  };

  const SubmitButton = () => {
    const modal = document.querySelector('.modal');
    const submit = document.querySelector('.submitBtn');
    const home = document.querySelector('.home');
    const today = document.querySelector('.today');
    const week = document.querySelector('.week');

    let object = {};
    submit.addEventListener('click', (e) => {
      const form = document.querySelector('.Form');
      const title = document.querySelector('#taskTitle');
      const descript = document.querySelector('#taskDescript');
      const due = document.querySelector('#taskDue');
      const priority = document.querySelector('input[type=radio][name=priority]:checked');

      e.preventDefault();
      if (form.checkValidity() === false) {
        form.reportValidity();
      } else {
        object = {
          title: title.value,
          description: descript.value,
          dueDate: format(parseISO(due.value), 'MM-dd-yyyy'),
          priority: priority.value,
        };
        set('task', object);
        title.value = '';
        descript.value = '';
        due.value = '';
        modal.classList.remove('show');
        if (home.classList.contains('active')) {
          Home();
          loadTask('task');
        } else if (today.classList.contains('active')) {
          Today();
          LoadTodayTask('task');
        } else {
          Thisweek();
          LoadThisWeekTask('task');
        }
      }
    });
  };

  const PriorityButton = () => {
    const PriorityActive = (element) => {
      if (element.classList.contains('priorActive')) return;
      const priorityBtns = document.querySelectorAll('.priorbtn');
      Array.from(priorityBtns).forEach((button) => {
        button.classList.remove('priorActive');
      });
      element.classList.add('priorActive');
    };

    const lowBtn = document.querySelector('.low');
    lowBtn.addEventListener('click', () => {
      PriorityActive(lowBtn);
    });

    const medBtn = document.querySelector('.medium');
    medBtn.addEventListener('click', () => {
      PriorityActive(medBtn);
    });

    const highBtn = document.querySelector('.high');
    highBtn.addEventListener('click', () => {
      PriorityActive(highBtn);
    });
  };

  const sideBarButton = () => {
    const homebtn = document.querySelector('.home');
    homebtn.addEventListener('click', () => {
      activeButton(homebtn, 'btn');
      Home();
      loadTask('task');
    });

    const todaybtn = document.querySelector('.today');
    todaybtn.addEventListener('click', () => {
      activeButton(todaybtn, 'btn');
      Today();
      LoadTodayTask('task');
    });

    const weekbtn = document.querySelector('.week');
    weekbtn.addEventListener('click', () => {
      activeButton(weekbtn, 'btn');
      Thisweek();
      LoadThisWeekTask('task');
    });

    const taskbtn = document.querySelector('.taskbtn');
    taskbtn.addEventListener('click', () => {
      activeButton(taskbtn, 'modalbtn');
      Task();
      PriorityButton();
      SubmitButton();
    });

    const projbtn = document.querySelector('.projbtn');
    projbtn.addEventListener('click', () => {
      activeButton(projbtn, 'modalbtn');
    });
  };

  const OpenCloseModal = () => {
    const addbtn = document.querySelector('.addbtn');
    const modal = document.querySelector('.modal');
    addbtn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  };

  const HideModal = () => {
    const closebtn = document.querySelector('.modalClose');
    const modal = document.querySelector('.modal');
    closebtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  };

  const Homepage = () => {
    const homebtn = document.querySelector('.home');
    activeButton(homebtn, 'btn');
    Home();
    loadTask('task');
  };

  const ShowMenu = () => {
    const menu = document.querySelector('.toggle-menu');
    const sidebar = document.querySelector('.sidebar');

    menu.addEventListener('touchend', () => {
      sidebar.classList.toggle('showMenu');
      menu.classList.toggle('change');
    });
  };
  ShowMenu();
  sideBarButton();
  OpenCloseModal();
  HideModal();
  Homepage();
})();
