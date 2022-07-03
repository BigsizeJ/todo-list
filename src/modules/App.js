import {TaskTitle, DisplayTask, ShowModal} from './Interface'
import add from '../img/add.svg'
import Storage from './Storage'

export const App = (() => {
    const container = document.querySelector('.container')

    const Header = () => {
        const parent = document.createElement('div')
        const title = document.createElement('h1')
        parent.className = 'header'
        title.textContent = 'To-do'
        parent.appendChild(title)
        return parent
    }

    const Content = () => {
        const parent = document.createElement('div')
        parent.className = 'content'
        return parent
    }

    const Sidebar = () => {
        const Navbar = () => {
            const Home_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'Home'
                button.className = 'btn'

                button.addEventListener('click', () => {
                    TaskTitle('Home')
                    DisplayTask()
                    activeButton(button)
                })
                return button
            }
            const Today_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'Today'
                button.className = 'btn'
        
                button.addEventListener('click', () => {
                    TaskTitle('Today')
                    activeButton(button)
                })
                return button
            }
            const thisWeek_Button = () => {
                const button = document.createElement('button')
                button.textContent = 'This Week'
                button.className = 'btn'
        
                button.addEventListener('click', () => {
                    TaskTitle('This Week')
                    activeButton(button)
                })
                return button
            }
            const Project = () => {
                const p = document.createElement('p')
                p.className = 'project'
                p.textContent = 'Project'
                return p
            }
            const activeButton = (element) => {
                const buttons = document.querySelectorAll('.btn')
        
                Array.from(buttons).forEach((button) => {
                    button.classList.remove('active')
                });
        
                element.classList.add('active')
            }
            const load = () => {
                const nav = document.createElement('nav')
                nav.className = 'navbar'
                nav.appendChild(Home_Button())
                nav.appendChild(Today_Button())
                nav.appendChild(thisWeek_Button())
                nav.appendChild(Project())
                
                return nav
            }
            return load()
        }
        const parent = document.createElement('div')
        parent.className = 'sidebar'
        parent.appendChild(Navbar())
        return parent
    }

    const Modal = () => {
        const Create  = () => {
            const modal = document.createElement('div')
            const content = document.createElement('div')
            modal.className = 'modal'
            content.className = 'modalContent'
            modal.appendChild(content)
           
            return {modal, content}
        }
    
        const ModalForm = () => {
            const parent = document.createElement('form')
            parent.className = 'modalForm'
            return parent
        }
    
        const ModalHeader = () => {
            const header = document.createElement('div')
            const h1 = document.createElement('h1')
            const close = document.createElement('button')
            const img = document.createElement('img')
            img.src = add
            close.className = 'modalClose'
            close.appendChild(img)
            h1.textContent = 'Create a new...'
    
            close.addEventListener('click', () => {
                ShowModal()
            })  
            header.className = 'modalHeader'
            header.appendChild(h1)
            header.appendChild(close)
    
            return header
        }
    
        const ModalSidebar = () => {
            const parent = document.createElement('div')
            parent.className = 'modalSidebar'
            
            const CreateTodo = () => {
                const form = document.querySelector('.modalForm')
                const title = document.createElement('input')
                const date = document.createElement('input')
                const submit = document.createElement('input')
                title.id = 'taskTitle'
                title.setAttribute('required', '')
                date.setAttribute('required', '')
                date.id = 'taskDueDate'
                title.type = 'text'
                date.type = 'date'
                submit.type = 'submit'
                title.placeholder = 'Task Title'
                submit.className = 'tasksubmit'
                submit.addEventListener('click', (e) => {
                    e.preventDefault()
                    if(!form.checkValidity()) {
                        form.reportValidity()
                        return
                    }
                    let task = {
                        'title': title.value,
                        'dueDate': date.value
                    }
                    Storage().Set('task', task)
                    
                })
                form.appendChild(title)
                form.appendChild(date)
                form.appendChild(submit)
            }
    
            const TaskButton = () => {
                const button = document.createElement('button')
                button.className = 'btn modalbtn'
                button.textContent = 'Task'
                
                button.addEventListener('click', () => {
                    if(button.classList.contains('active')) return
                    activeButton(button)
                    CreateTodo()
                })
                return button
            }
    
            const activeButton = (element) => {
                if(element.classList.contains('active')) return
                const buttons = document.querySelectorAll('.modalbtn')
                Array.from(buttons).forEach((button) => {
                    button.classList.remove('active')
                })
                element.classList.add('active')
            }
    
            parent.appendChild(TaskButton())
            return parent
        }
    
        const CreateModal = () => {
            const {modal, content} = Create()
            content.appendChild(ModalHeader())
            content.appendChild(ModalSidebar())
            content.appendChild(ModalForm())
            return modal
        }
    
        return CreateModal()
        
    }

    const Add_Button = () => {
        const button = document.createElement('button')
        const img = document.createElement('img')
        button.className = 'addButton'
        img.src = add
        button.appendChild(img)
        button.addEventListener('click', () => {
            ShowModal()
        })
        return button
    }
   
    container.appendChild(Header())
    container.appendChild(Sidebar())
    container.appendChild(Content())
    container.appendChild(Add_Button())
    container.appendChild(Modal())
})()


