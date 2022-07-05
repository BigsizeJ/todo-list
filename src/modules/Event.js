const EventHandler = () => {

    const activeButton = (button, classname) => {
        const buttons = document.querySelectorAll(`.${classname}`)
        Array.from(buttons).forEach((button) => {
            button.classList.remove('active')
        })
        button.classList.add('active')
    }

    const contentTitle = (title) => {
        const content = document.querySelector('.content')
        const h1 = document.createElement('h1')
        content.textContent = ''
        h1.textContent = title
        content.appendChild(h1)
    }

    const sideBarEvent = () => {
        const home = document.querySelector('.homebtn')
        home.addEventListener('click', () => {
            activeButton(home, 'btn')
            contentTitle('Home')
        })

        const today = document.querySelector('.todaybtn')
        today.addEventListener('click', () => {
            activeButton(today, 'btn')
            contentTitle('Today')
        })

        const week = document.querySelector('.weekbtn')
        week.addEventListener('click', () => {
            activeButton(week, 'btn')
            contentTitle('This week')
        })
    }

    const modalSidebarEvent = () => {
        const task = document.querySelector('.taskbtn')
        task.addEventListener('click', () => {
            if(task.classList.contains('active')) return
            activeButton(task, 'modalbtn')
            modalTaskForm()
        })

        const project = document.querySelector('.projectbtn')
        project.addEventListener('click', () => {
            if(project.classList.contains('active')) return
            activeButton(project, 'modalbtn')
            modalProjectForm()
        })
    }

    const modalTaskForm = () => {
        const modalContent = document.querySelector('.modalContent')
        const modalTaskForm = document.createElement('form')
        modalContent.textContent = ''
        modalTaskForm.className = 'modaltaskform'

        const TaskTitle = document.createElement('input')
        TaskTitle.type = 'text'
        TaskTitle.placeholder = 'Task title (e.g. Exercise)'
        TaskTitle.id = 'tasktitle'

        const TaskDescript = document.createElement('textarea')
        TaskDescript.placeholder = 'Task Description (e.g. Leg day)'
        TaskDescript.id = 'taskdescription'

        const TaskDueDate = document.createElement('input')
        TaskDueDate.type = 'date'
        TaskDueDate.className = 'duedate'
        TaskDueDate.id = 'taskduedate'
        
        const LabelDueDate = document.createElement('label')
        LabelDueDate.innerText = 'Due Date'
        
        const TaskPrior = document.createElement('label')
        TaskPrior.className = 'priorHolder'

        const lowPrior = document.createElement('input')
        lowPrior.type = 'checkbox'
        lowPrior.className = 'lowPrior'
        lowPrior.id = 'low'

        const lowBox = document.createElement('label')
        lowBox.innerText = 'Low'

        lowBox.className = 'lowBox'
        lowBox.htmlFor = 'low'
        TaskPrior.innerText = 'Priority'

        TaskPrior.appendChild(lowBox)
        
        LabelDueDate.appendChild(TaskDueDate)
        modalTaskForm.appendChild(TaskTitle)
        modalTaskForm.appendChild(TaskDescript)
        modalTaskForm.appendChild(LabelDueDate)
        modalTaskForm.appendChild(TaskPrior)
        modalContent.appendChild(modalTaskForm)
    }

    const modalProjectForm = () => {
        const modalContent = document.querySelector('.modalContent')
        const modalProjectForm = document.createElement('div')
        modalContent.textContent = ''
        modalProjectForm.className = 'modalprojectform'

        modalContent.appendChild(modalProjectForm)
    }

    const Add = () => {
        const modal = document.querySelector('.modal')
        const addbtn = document.querySelector('.addbtn')
        addbtn.addEventListener('click', () => {
            modal.classList.toggle('show')
        })
    }

    const homepage = () => {
        const home = document.querySelector('.homebtn')
        activeButton(home, 'btn')
        contentTitle('Home')
    }

    return { sideBarEvent, modalSidebarEvent, homepage, Add }

}

export default EventHandler