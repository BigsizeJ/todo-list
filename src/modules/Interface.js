const Interface = () => {
  const Header = (text) => {
    const parent = document.createElement('div');
    parent.className = 'contentHeader';
    const title = document.createElement('h1');
    title.textContent = text;

    const legend = document.createElement('div');
    const labelCreate = (arg) => {
      const label = document.createElement('label');
      label.className = `legend ${arg}`;
      const p = document.createElement('p');
      p.textContent = arg;

      legend.appendChild(label);
      legend.appendChild(p);
    };

    labelCreate('Low');
    labelCreate('Mid');
    labelCreate('High');
    parent.appendChild(title);
    parent.appendChild(legend);
    return parent;
  };

  const Home = () => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';

    content.appendChild(Header('Home'));
    content.appendChild(TaskGrid);
  };

  const Today = () => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';

    content.appendChild(Header('Today'));
    content.appendChild(TaskGrid);
  };

  const Thisweek = () => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';

    content.appendChild(Header('This week'));
    content.appendChild(TaskGrid);
  };

  const TaskInterface = () => {
    const modalContent = document.querySelector('.modalContent');
    modalContent.textContent = '';

    const Form = document.createElement('form');
    Form.className = 'Form';

    const Title = document.createElement('input');
    Title.type = 'text';
    Title.className = 'Title';
    Title.id = 'taskTitle';
    Title.required = true;
    Title.placeholder = 'Task title (e.g. Grocery)';

    const Description = document.createElement('textarea');
    Description.className = 'taskDescript';
    Description.id = 'taskDescript';
    Description.placeholder = 'Task Description (e.g. Buying foods, etc)';
    Description.maxLength = '200';

    const DueLabel = document.createElement('label');
    DueLabel.innerText = 'Duedate';
    DueLabel.className = 'dateLabel';
    const DueDate = document.createElement('input');
    DueDate.type = 'date';
    DueDate.id = 'taskDue';
    DueDate.required = true;
    DueLabel.appendChild(DueDate);

    const PriorDiv = document.createElement('div');
    PriorDiv.className = 'priorDiv';

    const Priorlabel = document.createElement('p');
    Priorlabel.textContent = 'Priority';

    const lowLabel = document.createElement('label');
    const medLabel = document.createElement('label');
    const highLabel = document.createElement('label');
    lowLabel.htmlFor = 'low';
    lowLabel.className = 'low priorbtn';
    lowLabel.innerText = 'Low';
    medLabel.htmlFor = 'medium';
    medLabel.className = 'medium priorbtn';
    medLabel.innerText = 'Med';
    highLabel.htmlFor = 'high';
    highLabel.className = 'high priorbtn';
    highLabel.innerText = 'High';
    const low = document.createElement('input');
    const medium = document.createElement('input');
    const high = document.createElement('input');
    low.required = true;
    low.type = 'radio';
    medium.type = 'radio';
    high.type = 'radio';
    low.id = 'low';
    medium.id = 'medium';
    high.id = 'high';
    low.name = 'priority';
    medium.name = 'priority';
    high.name = 'priority';
    low.value = 'low';
    medium.value = 'medium';
    high.value = 'high';
    low.className = 'lowprior';
    medium.className = 'medprior';
    high.className = 'highprior';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.className = 'submitBtn';
    submitBtn.value = 'Add';

    PriorDiv.appendChild(Priorlabel);
    PriorDiv.appendChild(low);
    PriorDiv.appendChild(medium);
    PriorDiv.appendChild(high);
    PriorDiv.appendChild(lowLabel);
    PriorDiv.appendChild(medLabel);
    PriorDiv.appendChild(highLabel);
    Form.appendChild(Title);
    Form.appendChild(Description);
    Form.appendChild(DueLabel);
    Form.appendChild(PriorDiv);
    Form.appendChild(submitBtn);
    modalContent.appendChild(Form);
  };

  const ProjectModal = () => {
    const modalContent = document.querySelector('.modalContent');
    modalContent.textContent = '';

    const Form = document.createElement('form');
    Form.className = 'Form';

    const title = document.createElement('input');
    title.type = 'text';
    title.className = 'Title ProjectTitle';
    title.placeholder = 'Project title (e.g. Workout)';
    title.required = true;

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.className = 'submitBtnProj';
    submitBtn.value = 'Add';

    Form.appendChild(title);
    Form.appendChild(submitBtn);
    modalContent.appendChild(Form);
  };

  const ProjectContent = (title) => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';

    content.appendChild(Header(title));
    content.appendChild(TaskGrid);
  };

  return {
    Home, Today, Thisweek, TaskInterface, ProjectModal, ProjectContent,
  };
};

export default Interface;
