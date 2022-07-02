import Storage from "./Storage"

const Task = () => {
    const store = Storage()
    let task = []

    let obj = {
        'title': 'My Will',
        'Date': 'July 13 2022'
        
    }
    let obj2 = {
        'title': 'My War',
        'Date': 'July 20 2022'   
    }
    task.push(obj)
    task.push(obj2)
    store.Set('task', JSON.stringify(task))
   
    const DisplayGrid = document.createElement('div')
    DisplayGrid.className = 'displayTask'

    let LocalTask = JSON.parse(localStorage.getItem('task'))
    Array.from(LocalTask).forEach((item, index) => {
        const taskItem = document.createElement('div')
        taskItem.className = 'taskItem'
        taskItem.innerHTML = `<p>${LocalTask[index].title}</p><p>${LocalTask[index].Date}</p>`
        DisplayGrid.appendChild(taskItem)
    })
    

    
    



    return DisplayGrid

}


export {Task}