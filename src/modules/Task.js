import Storage from "./Storage"

const Task = () => {
    const DisplayGrid = document.createElement('div')
    DisplayGrid.className = 'displayTask'

    let task = Storage().Get('task')
    let ITEM = []
    Array.from(task).forEach((item, index) => {
        const taskItem = document.createElement('div')
        taskItem.className = 'taskItem'
        taskItem.innerHTML = `<p>${task[index].title}</p><p>${task[index].dueDate}</p>`
        ITEM.push(taskItem)
    })
    ITEM.reverse()
    ITEM.forEach((item, index) => {
        DisplayGrid.appendChild(item)
    })

    return DisplayGrid

}


export {Task}