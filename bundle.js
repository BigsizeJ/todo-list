/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Event.js":
/*!******************************!*\
  !*** ./src/modules/Event.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interface */ "./src/modules/Interface.js");


const Event = (() => {

    const {Home, Today, Thisweek, Task} = (0,_Interface__WEBPACK_IMPORTED_MODULE_0__["default"])()

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

/***/ }),

/***/ "./src/modules/Interface.js":
/*!**********************************!*\
  !*** ./src/modules/Interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Interface = () => {

    const Home = () => {
        const content = document.querySelector('.content')
        const TaskGrid = document.createElement('div')
        TaskGrid.className = 'TaskGrid'
        content.textContent = ''
        const title = document.createElement('h1')
        title.textContent = 'Home'
        content.appendChild(title)
        content.appendChild(TaskGrid)
    }

    const Today = () => {
        const content = document.querySelector('.content')
        const TaskGrid = document.createElement('div')
        TaskGrid.className = 'TaskGrid'
        content.textContent = ''
        const title = document.createElement('h1')
        title.textContent = 'Today'
        content.appendChild(title)
        content.appendChild(TaskGrid)
    }

    const Thisweek = () => {
        const content = document.querySelector('.content')
        const TaskGrid = document.createElement('div')
        TaskGrid.className = 'TaskGrid'
        content.textContent = ''
        const title = document.createElement('h1')
        title.textContent = 'This week'
        content.appendChild(title)
        content.appendChild(TaskGrid)
    }

    const Task = () => {
        const modalContent = document.querySelector('.modalContent')
        modalContent.textContent = ''

        const Form = document.createElement('form')
        Form.className = 'Form'
        
        const Title = document.createElement('input')
        Title.type = 'text'
        Title.className = 'taskTitle'
        Title.id = 'taskTitle'
        Title.required = true
        Title.placeholder = 'Task title (e.g. Grocery)'

        const Description = document.createElement('textarea')
        Description.className = 'taskDescript'
        Description.id = 'taskDescript'
        Description.placeholder = 'Task Description (e.g. Buying foods, etc)'
        Description.maxLength = '200'

        const DueLabel = document.createElement('label')
        DueLabel.innerText = 'Duedate'
        DueLabel.className = 'dateLabel'
        const DueDate = document.createElement('input')
        DueDate.type = 'date'
        DueDate.id = 'taskDue'
        DueDate.required = true
        DueLabel.appendChild(DueDate)

        const PriorDiv = document.createElement('div')
        PriorDiv.className = 'priorDiv'

        const Priorlabel = document.createElement('p')
        Priorlabel.textContent = 'Priority'

        const lowLabel = document.createElement('label')
        const medLabel = document.createElement('label')
        const highLabel = document.createElement('label')
        lowLabel.htmlFor = 'low'
        lowLabel.className = 'low priorbtn'
        lowLabel.innerText = 'Low'
        medLabel.htmlFor = 'medium'
        medLabel.className = 'medium priorbtn'
        medLabel.innerText = 'Med'
        highLabel.htmlFor = 'high'
        highLabel.className = 'high priorbtn'
        highLabel.innerText = 'High'
        const low = document.createElement('input')
        const medium = document.createElement('input')
        const high = document.createElement('input')
        low.required = true
        low.type = 'radio'
        medium.type = 'radio'
        high.type = 'radio'
        low.id = 'low'
        medium.id = 'medium'
        high.id = 'high'
        low.name = 'priorty'
        medium.name = 'priorty'
        high.name = 'priorty'
        low.value = 'low'
        medium.value = 'medium'
        high.value = 'high'
        low.className = 'lowprior'
        medium.className = 'medprior'
        high.className = 'highprior'

        const submitBtn = document.createElement('input')
        submitBtn.type = 'submit'
        submitBtn.className = 'submitBtn'
        submitBtn.value = 'Add'

        PriorDiv.appendChild(Priorlabel)
        PriorDiv.appendChild(low)
        PriorDiv.appendChild(medium)
        PriorDiv.appendChild(high)
        PriorDiv.appendChild(lowLabel)
        PriorDiv.appendChild(medLabel)
        PriorDiv.appendChild(highLabel) 
        Form.appendChild(Title)
        Form.appendChild(Description)
        Form.appendChild(DueLabel)
        Form.appendChild(PriorDiv)
        Form.appendChild(submitBtn)
        modalContent.appendChild(Form)
    }

    return {Home, Today, Thisweek, Task}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Event */ "./src/modules/Event.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQzs7QUFFbkM7O0FBRUEsV0FBVyw2QkFBNkIsRUFBRSxzREFBUzs7QUFFbkQ7QUFDQTtBQUNBLHNEQUFzRCxVQUFVO0FBQ2hFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDM0hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7O1VDN0hmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRlcmZhY2UgZnJvbSBcIi4vSW50ZXJmYWNlXCJcblxuY29uc3QgRXZlbnQgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qge0hvbWUsIFRvZGF5LCBUaGlzd2VlaywgVGFza30gPSBJbnRlcmZhY2UoKVxuXG4gICAgY29uc3QgYWN0aXZlQnV0dG9uID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVyblxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApXG4gICAgICAgIEFycmF5LmZyb20oYnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGNvbnN0IHNpZGVCYXJCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvbWVidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG4gICAgICAgICBob21lYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlQnV0dG9uKGhvbWVidG4sICdidG4nKVxuICAgICAgICAgICAgSG9tZSgpXG4gICAgICAgICB9KVxuXG4gICAgICAgICBjb25zdCB0b2RheWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpXG4gICAgICAgICB0b2RheWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbih0b2RheWJ0biwgJ2J0bicpXG4gICAgICAgICAgICBUb2RheSgpXG4gICAgICAgICAgICBcbiAgICAgICAgIH0pXG5cbiAgICAgICAgIGNvbnN0IHdlZWtidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpXG4gICAgICAgICB3ZWVrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlQnV0dG9uKHdlZWtidG4sICdidG4nKVxuICAgICAgICAgICAgVGhpc3dlZWsoKVxuICAgICAgICAgfSlcblxuICAgICAgICAgY29uc3QgdGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrYnRuJylcbiAgICAgICAgIHRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVCdXR0b24odGFza2J0biwgJ21vZGFsYnRuJylcbiAgICAgICAgICAgIFRhc2soKVxuICAgICAgICAgICAgUHJpb3JpdHlCdXR0b24oKVxuICAgICAgICAgICAgU3VibWl0QnV0dG9uKClcbiAgICAgICAgIH0pXG5cbiAgICAgICAgIGNvbnN0IHByb2pidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamJ0bicpXG4gICAgICAgICBwcm9qYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlQnV0dG9uKHByb2pidG4sICdtb2RhbGJ0bicpXG4gICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IE9wZW5DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkYnRuJylcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgICAgICBhZGRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBIaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ2xvc2UnKVxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgICAgIGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgUHJpb3JpdHlCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFByaW9yaXR5QWN0aXZlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvckFjdGl2ZScpKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcmJ0bicpXG4gICAgICAgICAgICBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yQWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yQWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb3cnKVxuICAgICAgICBjb25zdCBsb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93JylcbiAgICAgICAgbG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgUHJpb3JpdHlBY3RpdmUobG93QnRuKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG93LmNoZWNrZWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lZGl1bScpXG4gICAgICAgIGNvbnN0IG1lZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0nKVxuICAgICAgICBtZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBQcmlvcml0eUFjdGl2ZShtZWRCdG4pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZWQuY2hlY2tlZClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZ2gnKVxuICAgICAgICBjb25zdCBoaWdoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gnKVxuICAgICAgICBoaWdoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgUHJpb3JpdHlBY3RpdmUoaGlnaEJ0bilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpZ2guY2hlY2tlZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVGl0bGUnKVxuICAgICAgICBjb25zdCBkZXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHQnKVxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZScpXG5cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgaWYoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KClcbiAgICAgICAgICAgICAgICBsb3cucmVwb3J0VmFsaWRpdHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHQudmFsdWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHVlLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaWRlQmFyQnV0dG9uKClcbiAgICBPcGVuQ2xvc2VNb2RhbCgpXG4gICAgSGlkZU1vZGFsKClcbiAgICBcbn0pKCkiLCJjb25zdCBJbnRlcmZhY2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBIb21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb25zdCBUYXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIFRhc2tHcmlkLmNsYXNzTmFtZSA9ICdUYXNrR3JpZCdcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKFRhc2tHcmlkKVxuICAgIH1cblxuICAgIGNvbnN0IFRvZGF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb25zdCBUYXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIFRhc2tHcmlkLmNsYXNzTmFtZSA9ICdUYXNrR3JpZCdcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChUYXNrR3JpZClcbiAgICB9XG5cbiAgICBjb25zdCBUaGlzd2VlayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgY29uc3QgVGFza0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBUYXNrR3JpZC5jbGFzc05hbWUgPSAnVGFza0dyaWQnXG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJ1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKFRhc2tHcmlkKVxuICAgIH1cblxuICAgIGNvbnN0IFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRlbnQnKVxuICAgICAgICBtb2RhbENvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgICAgIGNvbnN0IEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgRm9ybS5jbGFzc05hbWUgPSAnRm9ybSdcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBUaXRsZS50eXBlID0gJ3RleHQnXG4gICAgICAgIFRpdGxlLmNsYXNzTmFtZSA9ICd0YXNrVGl0bGUnXG4gICAgICAgIFRpdGxlLmlkID0gJ3Rhc2tUaXRsZSdcbiAgICAgICAgVGl0bGUucmVxdWlyZWQgPSB0cnVlXG4gICAgICAgIFRpdGxlLnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUgKGUuZy4gR3JvY2VyeSknXG5cbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgIERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrRGVzY3JpcHQnXG4gICAgICAgIERlc2NyaXB0aW9uLmlkID0gJ3Rhc2tEZXNjcmlwdCdcbiAgICAgICAgRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnVGFzayBEZXNjcmlwdGlvbiAoZS5nLiBCdXlpbmcgZm9vZHMsIGV0YyknXG4gICAgICAgIERlc2NyaXB0aW9uLm1heExlbmd0aCA9ICcyMDAnXG5cbiAgICAgICAgY29uc3QgRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIER1ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWVkYXRlJ1xuICAgICAgICBEdWVMYWJlbC5jbGFzc05hbWUgPSAnZGF0ZUxhYmVsJ1xuICAgICAgICBjb25zdCBEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBEdWVEYXRlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgRHVlRGF0ZS5pZCA9ICd0YXNrRHVlJ1xuICAgICAgICBEdWVEYXRlLnJlcXVpcmVkID0gdHJ1ZVxuICAgICAgICBEdWVMYWJlbC5hcHBlbmRDaGlsZChEdWVEYXRlKVxuXG4gICAgICAgIGNvbnN0IFByaW9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgUHJpb3JEaXYuY2xhc3NOYW1lID0gJ3ByaW9yRGl2J1xuXG4gICAgICAgIGNvbnN0IFByaW9ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgUHJpb3JsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcblxuICAgICAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgY29uc3QgbWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgbG93TGFiZWwuaHRtbEZvciA9ICdsb3cnXG4gICAgICAgIGxvd0xhYmVsLmNsYXNzTmFtZSA9ICdsb3cgcHJpb3JidG4nXG4gICAgICAgIGxvd0xhYmVsLmlubmVyVGV4dCA9ICdMb3cnXG4gICAgICAgIG1lZExhYmVsLmh0bWxGb3IgPSAnbWVkaXVtJ1xuICAgICAgICBtZWRMYWJlbC5jbGFzc05hbWUgPSAnbWVkaXVtIHByaW9yYnRuJ1xuICAgICAgICBtZWRMYWJlbC5pbm5lclRleHQgPSAnTWVkJ1xuICAgICAgICBoaWdoTGFiZWwuaHRtbEZvciA9ICdoaWdoJ1xuICAgICAgICBoaWdoTGFiZWwuY2xhc3NOYW1lID0gJ2hpZ2ggcHJpb3JidG4nXG4gICAgICAgIGhpZ2hMYWJlbC5pbm5lclRleHQgPSAnSGlnaCdcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGxvdy5yZXF1aXJlZCA9IHRydWVcbiAgICAgICAgbG93LnR5cGUgPSAncmFkaW8nXG4gICAgICAgIG1lZGl1bS50eXBlID0gJ3JhZGlvJ1xuICAgICAgICBoaWdoLnR5cGUgPSAncmFkaW8nXG4gICAgICAgIGxvdy5pZCA9ICdsb3cnXG4gICAgICAgIG1lZGl1bS5pZCA9ICdtZWRpdW0nXG4gICAgICAgIGhpZ2guaWQgPSAnaGlnaCdcbiAgICAgICAgbG93Lm5hbWUgPSAncHJpb3J0eSdcbiAgICAgICAgbWVkaXVtLm5hbWUgPSAncHJpb3J0eSdcbiAgICAgICAgaGlnaC5uYW1lID0gJ3ByaW9ydHknXG4gICAgICAgIGxvdy52YWx1ZSA9ICdsb3cnXG4gICAgICAgIG1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nXG4gICAgICAgIGhpZ2gudmFsdWUgPSAnaGlnaCdcbiAgICAgICAgbG93LmNsYXNzTmFtZSA9ICdsb3dwcmlvcidcbiAgICAgICAgbWVkaXVtLmNsYXNzTmFtZSA9ICdtZWRwcmlvcidcbiAgICAgICAgaGlnaC5jbGFzc05hbWUgPSAnaGlnaHByaW9yJ1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdEJ0bidcbiAgICAgICAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCdcblxuICAgICAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChQcmlvcmxhYmVsKVxuICAgICAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChsb3cpXG4gICAgICAgIFByaW9yRGl2LmFwcGVuZENoaWxkKG1lZGl1bSlcbiAgICAgICAgUHJpb3JEaXYuYXBwZW5kQ2hpbGQoaGlnaClcbiAgICAgICAgUHJpb3JEaXYuYXBwZW5kQ2hpbGQobG93TGFiZWwpXG4gICAgICAgIFByaW9yRGl2LmFwcGVuZENoaWxkKG1lZExhYmVsKVxuICAgICAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChoaWdoTGFiZWwpIFxuICAgICAgICBGb3JtLmFwcGVuZENoaWxkKFRpdGxlKVxuICAgICAgICBGb3JtLmFwcGVuZENoaWxkKERlc2NyaXB0aW9uKVxuICAgICAgICBGb3JtLmFwcGVuZENoaWxkKER1ZUxhYmVsKVxuICAgICAgICBGb3JtLmFwcGVuZENoaWxkKFByaW9yRGl2KVxuICAgICAgICBGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKEZvcm0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtIb21lLCBUb2RheSwgVGhpc3dlZWssIFRhc2t9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9