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

    Array.from(tasks).forEach((task) => {
      const div = document.createElement('div');
      const title = document.createElement('p');
      title.textContent = task.title;
      const date = document.createElement('p');
      date.textContent = task.dueDate;
      div.appendChild(title);
      div.appendChild(date);

      TaskGrid.append(div);
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
    let object = {};
    const submit = document.querySelector('.submitBtn');
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
          dueDate: due.value,
          priority: priority.value,
        };
        set('task', object);
        title.value = '';
        descript.value = '';
        due.value = '';
        modal.classList.remove('show');
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
    });

    const weekbtn = document.querySelector('.week');
    weekbtn.addEventListener('click', () => {
      activeButton(weekbtn, 'btn');
      Thisweek();
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
