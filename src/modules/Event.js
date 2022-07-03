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

    return { sideBarEvent, homepage, Add }

}

export default EventHandler