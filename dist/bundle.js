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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



const Event = (() => {
  const {
    Home, Today, Thisweek, Task,
  } = (0,_Interface__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { set, get } = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const loadTask = (key) => {
    const tasks = get(key);
    const TaskGrid = document.querySelector('.TaskGrid');

    Array.from(tasks).forEach((task) => {
      const div = document.createElement('div');
      const title = document.createElement('p');
      title.textContent = task.title;
      const date = document.createElement('p');
      date.textContent = task.dueDate;
      div.appendChild(title);
      div.appendChild(date);

      TaskGrid.append(div);
    });
  };

  const activeButton = (element, className) => {
    if (element.classList.contains('active')) return;
    const buttons = document.querySelectorAll(`.${className}`);
    Array.from(buttons).forEach((button) => {
      button.classList.remove('active');
    });
    element.classList.add('active');
  };

  const SubmitButton = () => {
    const modal = document.querySelector('.modal');
    let object = {};
    const submit = document.querySelector('.submitBtn');
    submit.addEventListener('click', (e) => {
      const form = document.querySelector('.Form');
      const title = document.querySelector('#taskTitle');
      const descript = document.querySelector('#taskDescript');
      const due = document.querySelector('#taskDue');
      const priority = document.querySelector('input[type=radio][name=priority]:checked');
      e.preventDefault();
      if (form.checkValidity() === false) {
        form.reportValidity();
      } else {
        object = {
          title: title.value,
          description: descript.value,
          dueDate: due.value,
          priority: priority.value,
        };
        set('task', object);
        title.value = '';
        descript.value = '';
        due.value = '';
        modal.classList.remove('show');
      }
    });
  };

  const PriorityButton = () => {
    const PriorityActive = (element) => {
      if (element.classList.contains('priorActive')) return;
      const priorityBtns = document.querySelectorAll('.priorbtn');
      Array.from(priorityBtns).forEach((button) => {
        button.classList.remove('priorActive');
      });
      element.classList.add('priorActive');
    };

    const lowBtn = document.querySelector('.low');
    lowBtn.addEventListener('click', () => {
      PriorityActive(lowBtn);
    });

    const medBtn = document.querySelector('.medium');
    medBtn.addEventListener('click', () => {
      PriorityActive(medBtn);
    });

    const highBtn = document.querySelector('.high');
    highBtn.addEventListener('click', () => {
      PriorityActive(highBtn);
    });
  };

  const sideBarButton = () => {
    const homebtn = document.querySelector('.home');
    homebtn.addEventListener('click', () => {
      activeButton(homebtn, 'btn');
      Home();
      loadTask('task');
    });

    const todaybtn = document.querySelector('.today');
    todaybtn.addEventListener('click', () => {
      activeButton(todaybtn, 'btn');
      Today();
    });

    const weekbtn = document.querySelector('.week');
    weekbtn.addEventListener('click', () => {
      activeButton(weekbtn, 'btn');
      Thisweek();
    });

    const taskbtn = document.querySelector('.taskbtn');
    taskbtn.addEventListener('click', () => {
      activeButton(taskbtn, 'modalbtn');
      Task();
      PriorityButton();
      SubmitButton();
    });

    const projbtn = document.querySelector('.projbtn');
    projbtn.addEventListener('click', () => {
      activeButton(projbtn, 'modalbtn');
    });
  };

  const OpenCloseModal = () => {
    const addbtn = document.querySelector('.addbtn');
    const modal = document.querySelector('.modal');
    addbtn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  };

  const HideModal = () => {
    const closebtn = document.querySelector('.modalClose');
    const modal = document.querySelector('.modal');
    closebtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  };

  const Homepage = () => {
    const homebtn = document.querySelector('.home');
    activeButton(homebtn, 'btn');
    Home();
    loadTask('task');
  };

  const ShowMenu = () => {
    const menu = document.querySelector('.toggle-menu');
    const sidebar = document.querySelector('.sidebar');

    menu.addEventListener('touchend', () => {
      sidebar.classList.toggle('showMenu');
      menu.classList.toggle('change');
    });
  };
  ShowMenu();
  sideBarButton();
  OpenCloseModal();
  HideModal();
  Homepage();
})();


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
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';

    const title = document.createElement('h1');
    title.textContent = 'Home';

    content.appendChild(title);
    content.appendChild(TaskGrid);
  };

  const Today = () => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'Today';
    content.appendChild(title);
    content.appendChild(TaskGrid);
  };

  const Thisweek = () => {
    const content = document.querySelector('.content');
    const TaskGrid = document.createElement('div');
    TaskGrid.className = 'TaskGrid';
    content.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'This week';
    content.appendChild(title);
    content.appendChild(TaskGrid);
  };

  const Task = () => {
    const modalContent = document.querySelector('.modalContent');
    modalContent.textContent = '';

    const Form = document.createElement('form');
    Form.className = 'Form';

    const Title = document.createElement('input');
    Title.type = 'text';
    Title.className = 'taskTitle';
    Title.id = 'taskTitle';
    Title.required = true;
    Title.placeholder = 'Task title (e.g. Grocery)';

    const Description = document.createElement('textarea');
    Description.className = 'taskDescript';
    Description.id = 'taskDescript';
    Description.placeholder = 'Task Description (e.g. Buying foods, etc)';
    Description.maxLength = '200';

    const DueLabel = document.createElement('label');
    DueLabel.innerText = 'Duedate';
    DueLabel.className = 'dateLabel';
    const DueDate = document.createElement('input');
    DueDate.type = 'date';
    DueDate.id = 'taskDue';
    DueDate.required = true;
    DueLabel.appendChild(DueDate);

    const PriorDiv = document.createElement('div');
    PriorDiv.className = 'priorDiv';

    const Priorlabel = document.createElement('p');
    Priorlabel.textContent = 'Priority';

    const lowLabel = document.createElement('label');
    const medLabel = document.createElement('label');
    const highLabel = document.createElement('label');
    lowLabel.htmlFor = 'low';
    lowLabel.className = 'low priorbtn';
    lowLabel.innerText = 'Low';
    medLabel.htmlFor = 'medium';
    medLabel.className = 'medium priorbtn';
    medLabel.innerText = 'Med';
    highLabel.htmlFor = 'high';
    highLabel.className = 'high priorbtn';
    highLabel.innerText = 'High';
    const low = document.createElement('input');
    const medium = document.createElement('input');
    const high = document.createElement('input');
    low.required = true;
    low.type = 'radio';
    medium.type = 'radio';
    high.type = 'radio';
    low.id = 'low';
    medium.id = 'medium';
    high.id = 'high';
    low.name = 'priority';
    medium.name = 'priority';
    high.name = 'priority';
    low.value = 'low';
    medium.value = 'medium';
    high.value = 'high';
    low.className = 'lowprior';
    medium.className = 'medprior';
    high.className = 'highprior';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.className = 'submitBtn';
    submitBtn.value = 'Add';

    PriorDiv.appendChild(Priorlabel);
    PriorDiv.appendChild(low);
    PriorDiv.appendChild(medium);
    PriorDiv.appendChild(high);
    PriorDiv.appendChild(lowLabel);
    PriorDiv.appendChild(medLabel);
    PriorDiv.appendChild(highLabel);
    Form.appendChild(Title);
    Form.appendChild(Description);
    Form.appendChild(DueLabel);
    Form.appendChild(PriorDiv);
    Form.appendChild(submitBtn);
    modalContent.appendChild(Form);
  };

  return {
    Home, Today, Thisweek, Task,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Storage = () => {
  const storage = localStorage;

  const get = (key) => {
    const getter = storage.getItem(key);
    return JSON.parse(getter);
  };

  const set = (key, value) => {
    let existingData = [];
    const temp = [];
    let array = [];
    if (get(key) !== null) {
      existingData = get(key);
    }
    temp.push(value);
    array = temp.concat(existingData);
    storage.setItem(key, JSON.stringify(array));
  };

  return { set, get };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDSjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLHNEQUFTO0FBQ2YsVUFBVSxXQUFXLEVBQUUsb0RBQU87O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoSXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDdkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9JbnRlcmZhY2UnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcblxuY29uc3QgRXZlbnQgPSAoKCkgPT4ge1xuICBjb25zdCB7XG4gICAgSG9tZSwgVG9kYXksIFRoaXN3ZWVrLCBUYXNrLFxuICB9ID0gSW50ZXJmYWNlKCk7XG4gIGNvbnN0IHsgc2V0LCBnZXQgfSA9IFN0b3JhZ2UoKTtcblxuICBjb25zdCBsb2FkVGFzayA9IChrZXkpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGdldChrZXkpO1xuICAgIGNvbnN0IFRhc2tHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRhc2tHcmlkJyk7XG5cbiAgICBBcnJheS5mcm9tKHRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBUYXNrR3JpZC5hcHBlbmQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmVCdXR0b24gPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IFN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRm9ybScpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1RpdGxlJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHQnKTtcbiAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRHVlJyk7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9cHJpb3JpdHldOmNoZWNrZWQnKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0ID0ge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHQudmFsdWUsXG4gICAgICAgICAgZHVlRGF0ZTogZHVlLnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0KCd0YXNrJywgb2JqZWN0KTtcbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHQudmFsdWUgPSAnJztcbiAgICAgICAgZHVlLnZhbHVlID0gJyc7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBQcmlvcml0eUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBQcmlvcml0eUFjdGl2ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yQWN0aXZlJykpIHJldHVybjtcbiAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcmJ0bicpO1xuICAgICAgQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JBY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmlvckFjdGl2ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Jyk7XG4gICAgbG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgUHJpb3JpdHlBY3RpdmUobG93QnRuKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0nKTtcbiAgICBtZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQcmlvcml0eUFjdGl2ZShtZWRCdG4pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGlnaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoJyk7XG4gICAgaGlnaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFByaW9yaXR5QWN0aXZlKGhpZ2hCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZGVCYXJCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgaG9tZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFjdGl2ZUJ1dHRvbihob21lYnRuLCAnYnRuJyk7XG4gICAgICBIb21lKCk7XG4gICAgICBsb2FkVGFzaygndGFzaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kYXlidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgICB0b2RheWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFjdGl2ZUJ1dHRvbih0b2RheWJ0biwgJ2J0bicpO1xuICAgICAgVG9kYXkoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdlZWtidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuICAgIHdlZWtidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhY3RpdmVCdXR0b24od2Vla2J0biwgJ2J0bicpO1xuICAgICAgVGhpc3dlZWsoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2J0bicpO1xuICAgIHRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhY3RpdmVCdXR0b24odGFza2J0biwgJ21vZGFsYnRuJyk7XG4gICAgICBUYXNrKCk7XG4gICAgICBQcmlvcml0eUJ1dHRvbigpO1xuICAgICAgU3VibWl0QnV0dG9uKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pidG4nKTtcbiAgICBwcm9qYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWN0aXZlQnV0dG9uKHByb2pidG4sICdtb2RhbGJ0bicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IE9wZW5DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRidG4nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGFkZGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBIaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxDbG9zZScpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgYWN0aXZlQnV0dG9uKGhvbWVidG4sICdidG4nKTtcbiAgICBIb21lKCk7XG4gICAgbG9hZFRhc2soJ3Rhc2snKTtcbiAgfTtcblxuICBjb25zdCBTaG93TWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51Jyk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TWVudScpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjaGFuZ2UnKTtcbiAgICB9KTtcbiAgfTtcbiAgU2hvd01lbnUoKTtcbiAgc2lkZUJhckJ1dHRvbigpO1xuICBPcGVuQ2xvc2VNb2RhbCgpO1xuICBIaWRlTW9kYWwoKTtcbiAgSG9tZXBhZ2UoKTtcbn0pKCk7XG4iLCJjb25zdCBJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgVGFza0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUYXNrR3JpZC5jbGFzc05hbWUgPSAnVGFza0dyaWQnO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoVGFza0dyaWQpO1xuICB9O1xuXG4gIGNvbnN0IFRvZGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IFRhc2tHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVGFza0dyaWQuY2xhc3NOYW1lID0gJ1Rhc2tHcmlkJztcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKFRhc2tHcmlkKTtcbiAgfTtcblxuICBjb25zdCBUaGlzd2VlayA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBUYXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRhc2tHcmlkLmNsYXNzTmFtZSA9ICdUYXNrR3JpZCc7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoVGFza0dyaWQpO1xuICB9O1xuXG4gIGNvbnN0IFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGVudCcpO1xuICAgIG1vZGFsQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBGb3JtLmNsYXNzTmFtZSA9ICdGb3JtJztcblxuICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgIFRpdGxlLmNsYXNzTmFtZSA9ICd0YXNrVGl0bGUnO1xuICAgIFRpdGxlLmlkID0gJ3Rhc2tUaXRsZSc7XG4gICAgVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIFRpdGxlLnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUgKGUuZy4gR3JvY2VyeSknO1xuXG4gICAgY29uc3QgRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrRGVzY3JpcHQnO1xuICAgIERlc2NyaXB0aW9uLmlkID0gJ3Rhc2tEZXNjcmlwdCc7XG4gICAgRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnVGFzayBEZXNjcmlwdGlvbiAoZS5nLiBCdXlpbmcgZm9vZHMsIGV0YyknO1xuICAgIERlc2NyaXB0aW9uLm1heExlbmd0aCA9ICcyMDAnO1xuXG4gICAgY29uc3QgRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIER1ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWVkYXRlJztcbiAgICBEdWVMYWJlbC5jbGFzc05hbWUgPSAnZGF0ZUxhYmVsJztcbiAgICBjb25zdCBEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgRHVlRGF0ZS5pZCA9ICd0YXNrRHVlJztcbiAgICBEdWVEYXRlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBEdWVMYWJlbC5hcHBlbmRDaGlsZChEdWVEYXRlKTtcblxuICAgIGNvbnN0IFByaW9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgUHJpb3JEaXYuY2xhc3NOYW1lID0gJ3ByaW9yRGl2JztcblxuICAgIGNvbnN0IFByaW9ybGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgUHJpb3JsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5cbiAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbG93TGFiZWwuaHRtbEZvciA9ICdsb3cnO1xuICAgIGxvd0xhYmVsLmNsYXNzTmFtZSA9ICdsb3cgcHJpb3JidG4nO1xuICAgIGxvd0xhYmVsLmlubmVyVGV4dCA9ICdMb3cnO1xuICAgIG1lZExhYmVsLmh0bWxGb3IgPSAnbWVkaXVtJztcbiAgICBtZWRMYWJlbC5jbGFzc05hbWUgPSAnbWVkaXVtIHByaW9yYnRuJztcbiAgICBtZWRMYWJlbC5pbm5lclRleHQgPSAnTWVkJztcbiAgICBoaWdoTGFiZWwuaHRtbEZvciA9ICdoaWdoJztcbiAgICBoaWdoTGFiZWwuY2xhc3NOYW1lID0gJ2hpZ2ggcHJpb3JidG4nO1xuICAgIGhpZ2hMYWJlbC5pbm5lclRleHQgPSAnSGlnaCc7XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxvdy5yZXF1aXJlZCA9IHRydWU7XG4gICAgbG93LnR5cGUgPSAncmFkaW8nO1xuICAgIG1lZGl1bS50eXBlID0gJ3JhZGlvJztcbiAgICBoaWdoLnR5cGUgPSAncmFkaW8nO1xuICAgIGxvdy5pZCA9ICdsb3cnO1xuICAgIG1lZGl1bS5pZCA9ICdtZWRpdW0nO1xuICAgIGhpZ2guaWQgPSAnaGlnaCc7XG4gICAgbG93Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIG1lZGl1bS5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBoaWdoLm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGxvdy52YWx1ZSA9ICdsb3cnO1xuICAgIG1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIGhpZ2gudmFsdWUgPSAnaGlnaCc7XG4gICAgbG93LmNsYXNzTmFtZSA9ICdsb3dwcmlvcic7XG4gICAgbWVkaXVtLmNsYXNzTmFtZSA9ICdtZWRwcmlvcic7XG4gICAgaGlnaC5jbGFzc05hbWUgPSAnaGlnaHByaW9yJztcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdEJ0bic7XG4gICAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCc7XG5cbiAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChQcmlvcmxhYmVsKTtcbiAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChsb3cpO1xuICAgIFByaW9yRGl2LmFwcGVuZENoaWxkKG1lZGl1bSk7XG4gICAgUHJpb3JEaXYuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgUHJpb3JEaXYuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICAgIFByaW9yRGl2LmFwcGVuZENoaWxkKG1lZExhYmVsKTtcbiAgICBQcmlvckRpdi5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoVGl0bGUpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoRGVzY3JpcHRpb24pO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoRHVlTGFiZWwpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoUHJpb3JEaXYpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoRm9ybSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBIb21lLCBUb2RheSwgVGhpc3dlZWssIFRhc2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmZhY2U7XG4iLCJjb25zdCBTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuXG4gIGNvbnN0IGdldCA9IChrZXkpID0+IHtcbiAgICBjb25zdCBnZXR0ZXIgPSBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXR0ZXIpO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgbGV0IGV4aXN0aW5nRGF0YSA9IFtdO1xuICAgIGNvbnN0IHRlbXAgPSBbXTtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0KGtleSkgIT09IG51bGwpIHtcbiAgICAgIGV4aXN0aW5nRGF0YSA9IGdldChrZXkpO1xuICAgIH1cbiAgICB0ZW1wLnB1c2godmFsdWUpO1xuICAgIGFycmF5ID0gdGVtcC5jb25jYXQoZXhpc3RpbmdEYXRhKTtcbiAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICB9O1xuXG4gIHJldHVybiB7IHNldCwgZ2V0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=