import Storage from './Storage';

const Project = () => {
  const { set, get } = Storage();

  const addProjectBtn = (text) => {
    const button = document.createElement('button');
    const projectContainer = document.querySelector('.project-list');
    button.textContent = text;
    button.className = 'btn project';
    projectContainer.appendChild(button);
  };

  const loadProject = () => {
    const projects = get('Project');
    const projectContainer = document.querySelector('.project-list');
    projectContainer.textContent = '';
    if (projects === null) return;
    Array.from(projects).forEach((project) => {
      addProjectBtn(project.name);
    });
  };

  const SubmitProject = () => {
    const submitProject = document.querySelector('.submitBtnProj');
    const modal = document.querySelector('.modal');

    submitProject.addEventListener('click', (e) => {
      const form = document.querySelector('.Form');
      const title = document.querySelector('.ProjectTitle');
      e.preventDefault();
      if (form.checkValidity() === false) {
        form.reportValidity();
      } else {
        const obj = {
          name: title.value,
          task: [],
        };
        set('Project', obj);
        title.value = '';
        modal.classList.remove('show');
        loadProject();
      }
    });
  };

  return { SubmitProject, loadProject };
};

export default Project;
