import image from '../img/add.svg'

const Function = () => {

    const Title = (obj) => {
        const parent = document.querySelector(`.${obj.parent}`)
        const h1 = document.createElement('h1')
        h1.className = obj.class
        h1.textContent = obj.text
        parent.appendChild(h1)
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


export const Interface = (() => {
    const {Title, addButton, addLabel} = Function()

    const Append = (element) => {
        const container = document.querySelector('.container')
        container.appendChild(element)
    }

    const Header = () => {
        const parent = document.createElement('div')
        parent.className = 'header'
     
        Append(parent)
    }

    const Sidebar = () => {
        const parent = document.createElement('div')
        parent.className = 'sidebar'
        Append(parent)
    }

    const Content = () => {
        const parent = document.createElement('div')
        parent.className = 'content'
        Append(parent)
    }

    const AddTask = () => {
        const button = document.createElement('button')
        const labelImg = document.createElement('img')
        labelImg.src = image
        button.appendChild(labelImg)
        button.className = 'addbtn'
        Append(button)
    }

    const Modal = () => {
        const modal = document.createElement('div')
        modal.className = 'modal'
        
        const modalBox = document.createElement('div')
        modalBox.className = 'modalBox'

        const modalHeader = document.createElement('div')
        modalHeader.className = 'modalHeader'

        const modalSidebar = document.createElement('div')
        modalSidebar.className = 'modalSidebar'

        const modalContent = document.createElement('div')
        modalContent.className = 'modalContent'



        modalBox.appendChild(modalContent)
        modalBox.appendChild(modalHeader)
        modalBox.appendChild(modalSidebar)
        modal.appendChild(modalBox)
        Append(modal)
    }


    const LOAD = () => {
        Header()
        Sidebar()
        Content()
        AddTask()
        Modal()
    }

    LOAD()
})()


export { Function }