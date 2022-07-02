import {TaskTitle, DisplayTask} from './Interface'
import add from '../img/add.svg'

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

    const Add_Button = () => {
        const button = document.createElement('button')
        const img = document.createElement('img')
        button.className = 'addButton'
        img.src = add
        button.appendChild(img)
        return button
    }

    container.appendChild(Header())
    container.appendChild(Sidebar())
    container.appendChild(Content())
    container.appendChild(Add_Button())
})()


