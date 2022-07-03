import './Interface'
import Event from './Event'

const Function = () => {

    const Title = (img, text) => {
        const header = document.querySelector('.header')
        const h1 = document.createElement('h1')
        h1.className = 'headerTitle'
        h1.textContent = text
        header.appendChild(h1)
    }

    const addButton = (obj) => {
        const parent = document.querySelector(`.${obj.parent}`)
        const button = document.createElement('button')
        button.textContent = obj.name
        button.className = obj.class
        parent.appendChild(button)
        
    }

    const addLabel = (obj) => {
        const parent = document.querySelector(`.${obj.parent}`)
        const label = document.createElement('p')
        label.textContent = obj.text
        label.className = obj.class
        parent.appendChild(label)
        
    }

    return {Title, addButton, addLabel}
}

const App = (() => {
    const {Title, addButton, addLabel} = Function()
    const {sideBarEvent, homepage, Add} = Event()

    Title('', 'To Do')
    const object = {
        home: {
            name: 'Home',
            parent: 'sidebar',
            class: 'homebtn  btn'
        },

        today: {
            name: 'Today',
            parent: 'sidebar',
            class: 'todaybtn btn'
        },

        thisweek: {
            name: 'This week',
            parent: 'sidebar',
            class: 'weekbtn btn'
        },

        projectlabel: {
            text: 'Project',
            parent: 'sidebar',
            class: 'projectLabel'
        },
    }

    const sidebarButton = () => {
        addButton(object.home)
        addButton(object.today)
        addButton(object.thisweek)
        addLabel(object.projectlabel)
    }
    
    sidebarButton()
    sideBarEvent()
    Add()
    homepage()
})()

