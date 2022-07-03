import image from '../img/add.svg'

export const Interface = (() => {
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
        
        const modalContent = document.createElement('div')
        modalContent.className = 'modalContent'

        const modalHeader = document.createElement('div')
        modalHeader.className = 'modalHeader'

        const modalSidebar = document.createElement('div')
        modalSidebar.className = 'modalSidebar'

        modal.appendChild(modalHeader)
        modal.appendChild(modalSidebar)
        modal.appendChild(modalContent)
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