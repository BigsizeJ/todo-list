import {Task} from './Task'

const TaskTitle = (title) => {
    const content = document.querySelector('.content')
    const h1 = document.createElement('h1')
    content.textContent = ''
    h1.className = 'taskTitle'
    h1.textContent = title
    content.appendChild(h1)
}

const DisplayTask = () => {
    const content = document.querySelector('.content')
    content.appendChild(Task())

    return content
}


export {TaskTitle, DisplayTask}