import Interface from "./Interface"

const Event = (() => {

    const {Home, Today, Thisweek, Task} = Interface()

    const activeButton = (element, className) => {
        if(element.classList.contains('active')) return
        const buttons = document.querySelectorAll(`.${className}`)
        Array.from(buttons).forEach((button) => {
            button.classList.remove('active')
        })
        element.classList.add('active')
    }

    const sideBarButton = () => {
        const homebtn = document.querySelector('.home')
         homebtn.addEventListener('click', () => {
            activeButton(homebtn, 'btn')
            Home()
         })

         const todaybtn = document.querySelector('.today')
         todaybtn.addEventListener('click', () => {
            activeButton(todaybtn, 'btn')
            Today()
            
         })

         const weekbtn = document.querySelector('.week')
         weekbtn.addEventListener('click', () => {
            activeButton(weekbtn, 'btn')
            Thisweek()
         })

         const taskbtn = document.querySelector('.taskbtn')
         taskbtn.addEventListener('click', () => {
            activeButton(taskbtn, 'modalbtn')
            Task()
            PriorityButton()
            SubmitButton()
         })

         const projbtn = document.querySelector('.projbtn')
         projbtn.addEventListener('click', () => {
            activeButton(projbtn, 'modalbtn')
         })
    }

    const OpenCloseModal = () => {
        const addbtn = document.querySelector('.addbtn')
        const modal = document.querySelector('.modal')
        addbtn.addEventListener('click', () => {
            modal.classList.add('show')
        })
    }

    const HideModal = () => {
        const closebtn = document.querySelector('.modalClose')
        const modal = document.querySelector('.modal')
        closebtn.addEventListener('click', () => {
            modal.classList.remove('show')
        })
    }

    const PriorityButton = () => {
        const PriorityActive = (element) => {
            if(element.classList.contains('priorActive')) return
            const priorityBtns = document.querySelectorAll('.priorbtn')
            Array.from(priorityBtns).forEach((button) => {
                button.classList.remove('priorActive')
            })
            element.classList.add('priorActive')
        }

        const low = document.querySelector('#low')
        const lowBtn = document.querySelector('.low')
        lowBtn.addEventListener('click', () => {
            PriorityActive(lowBtn)
            console.log(low.checked)
        })

        const med = document.querySelector('#medium')
        const medBtn = document.querySelector('.medium')
        medBtn.addEventListener('click', () => {
            PriorityActive(medBtn)
            console.log(med.checked)
        })

        const high = document.querySelector('#high')
        const highBtn = document.querySelector('.high')
        highBtn.addEventListener('click', () => {
            PriorityActive(highBtn)
            console.log(high.checked)
        })
    }

    const SubmitButton = () => {
        const form = document.querySelector('.Form')
        const submit = document.querySelector('.submitBtn')
        const title = document.querySelector('#taskTitle')
        const descript = document.querySelector('#taskDescript')
        const due = document.querySelector('#taskDue')

        submit.addEventListener('click', (e) => {
            e.preventDefault()
            if(form.checkValidity() == false) {
                form.reportValidity()
                low.reportValidity()
            }
            else {
                console.log(title.value)
                console.log(descript.value)
                console.log(due.value)
            }
        
        })
    }

    sideBarButton()
    OpenCloseModal()
    HideModal()
    
})()