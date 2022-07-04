import './Interface'
import Event from './Event'
import { Function } from './Interface'

const App = (() => {
    const {Title, addButton, addLabel} = Function()
    const {sideBarEvent, modalSidebarEvent, homepage, Add} = Event()

    const object = {
        Title: {
            text: 'To Do',
            parent: 'header',
            class: 'headerTitle',
        },

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

        modalTitle: {
            text: 'Create a new...',
            parent: 'modalHeader',
            class: 'modalTitle'
        },

        modalTaskBtn: {
            name: 'Task',
            parent: 'modalSidebar',
            class: 'taskbtn modalbtn'
        },

        modalProjectBtn: {
            name: 'Project',
            parent: 'modalSidebar',
            class: 'projectbtn modalbtn'
        }
    }

    const sidebarButton = () => {
        addButton(object.home)
        addButton(object.today)
        addButton(object.thisweek)
        addLabel(object.projectlabel)
    }

    const modalUI = () => {
        addButton(object.modalTaskBtn)
        addButton(object.modalProjectBtn)
    }

    const EventLoad = () => {
        Add()
        homepage()
        sideBarEvent()
        modalSidebarEvent()

    }

    Title(object.Title)
    Title(object.modalTitle)
    sidebarButton()
    modalUI()
    EventLoad()
})()

