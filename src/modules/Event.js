/* eslint-disable no-console */
import {
  format, parseISO,
} from 'date-fns';
import Interface from './Interface';
import Storage from './Storage';
import Project from './Project';
import Task from './Task';

// eslint-disable-next-line no-unused-vars
const Event = (() => {
  const {
    Home, Today, Thisweek, TaskInterface, ProjectModal, ProjectContent,
  } = Interface();
  const { set, get, setClear } = Storage();
  const { SubmitProject, loadProject } = Project();
  const { filterTask, ProjectTask } = Task();
  let activeProject;

  const activeButton = (element, className) => {
    if (element.classList.contains('active')) return;
    const buttons = document.querySelectorAll(`.${className}`);
    Array.from(buttons).forEach((button) => {
      button.classList.remove('active');
    });
    element.classList.add('active');
    if (className === 'modalbtn') return;
    if (element.classList.contains('project')) {
      activeProject = element.innerText;
    } else { activeProject = null; }
  };

  const SubmitButton = () => {
    const modal = document.querySelector('.modal');
    const submit = document.querySelector('.submitBtn');
    const home = document.querySelector('.home');
    const today = document.querySelector('.today');

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
      } else if (activeProject !== null) {
        const projects = get('Project');
        Array.from(projects).forEach((project, index) => {
          if (project.name === activeProject) {
            projects.splice(index, 1);
            console.log(projects);
            object = {
              title: title.value,
              description: descript.value,
              dueDate: format(parseISO(due.value), 'MM-dd-yyyy'),
              priority: priority.value,
            };
            const item = project;
            item.task.unshift(object);
            setClear('Project', projects);
            set('Project', item);
            ProjectContent(activeProject);
            ProjectTask('Project', activeProject);
          }
        });
      } else {
        object = {
          title: title.value,
          description: descript.value,
          dueDate: format(parseISO(due.value), 'MM-dd-yyyy'),
          priority: priority.value,
        };
        set('Task', object);
        if (home.classList.contains('active')) {
          Home();
          filterTask('Task', 'all');
        } else if (today.classList.contains('active')) {
          Today();
          filterTask('Task', 'today');
        } else {
          Thisweek();
          filterTask('Task', 'thisweek');
        }
      }
      title.value = '';
      descript.value = '';
      due.value = '';
      modal.classList.remove('show');
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
      filterTask('Task', 'all');
    });

    const todaybtn = document.querySelector('.today');
    todaybtn.addEventListener('click', () => {
      activeButton(todaybtn, 'btn');
      Today();
      filterTask('Task', 'today');
    });

    const weekbtn = document.querySelector('.week');
    weekbtn.addEventListener('click', () => {
      activeButton(weekbtn, 'btn');
      Thisweek();
      filterTask('Task', 'thisweek');
    });

    const taskbtn = document.querySelector('.taskbtn');
    taskbtn.addEventListener('click', () => {
      activeButton(taskbtn, 'modalbtn');
      TaskInterface();
      PriorityButton();
      SubmitButton();
    });

    const projbtn = document.querySelector('.projbtn');
    projbtn.addEventListener('click', () => {
      activeButton(projbtn, 'modalbtn');
      ProjectModal();
      SubmitProject();
    });

    const sidebarProject = document.querySelector('.sidebar');
    sidebarProject.addEventListener('click', (e) => {
      if (e.target.classList.contains('project')) {
        activeButton(e.target, 'btn');
        ProjectContent(e.target.innerText);
        ProjectTask('Project', activeProject);
      }
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
    filterTask('Task', 'all');
    loadProject();
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
