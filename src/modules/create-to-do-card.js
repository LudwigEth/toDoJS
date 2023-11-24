// import { addClickEventListener, checkboxClickHandler, editToDoCard, subtaskButtonClickHandler, toggleCheckbox } from "./event-handlers";

// export function createToDoCard(toDoID, taskDescription, status) {


//     const divToDoCard = document.createElement('div');
//     const divCheckbox = document.createElement('div');
//     const divCheckmark1 = document.createElement('div');
//     const divCheckmark2 = document.createElement('div');
//     const divToDoTaskContainer =  document.createElement('div');
//     const paraToDoTask = document.createElement('p');
//     const buttonToDoMenu = document.createElement('button');
//     const divHamburgerMenuDots = document.createElement('div');
//     const divHamburgerDotTop = document.createElement('div');
//     const divHamburgerDotMiddle = document.createElement('div');
//     const divHamburgerDotBottom = document.createElement('div');
//     const divToDoSubtask = document.createElement('div');
//     const ulForSubtasks = document.createElement('ul');

//     if (status === 'checked') {
//         divCheckbox.classList.add('checked');
//         divCheckbox.setAttribute('aria-checked', 'true');
//     } else {
//         divCheckbox.setAttribute('aria-checked', 'false');
//         divCheckbox.classList.remove('checked');
//     };
//     divCheckbox.setAttribute('tabindex', 0);


//     divToDoCard.classList.add('to-do-card');
//     divToDoTaskContainer.classList.add('to-do-task-container');
//     divCheckbox.classList.add('checkbox');
//     divCheckmark1.classList.add('checkmark1');
//     divCheckmark2.classList.add('checkmark2');
//     paraToDoTask.classList.add('to-do-task');
//     buttonToDoMenu.classList.add('to-do-menu');
//     divHamburgerMenuDots.classList.add('hamburger-menu-dots');
//     divHamburgerDotTop.classList.add('hamburger-dots');
//     divHamburgerDotMiddle.classList.add('hamburger-dots');
//     divHamburgerDotBottom.classList.add('hamburger-dots');
//     divToDoSubtask.classList.add('to-do-subtask', 'hidden');

//     paraToDoTask.textContent = taskDescription;

//     divToDoCard.dataset.taskId = toDoID;
    
//     addClickEventListener(divCheckbox, checkboxClickHandler);
//     addClickEventListener(buttonToDoMenu, editToDoCard);

//     divCheckmark1.appendChild(divCheckmark2);
//     divCheckbox.appendChild(divCheckmark1);

//     divHamburgerMenuDots.appendChild(divHamburgerDotTop);
//     divHamburgerMenuDots.appendChild(divHamburgerDotMiddle);
//     divHamburgerMenuDots.appendChild(divHamburgerDotBottom);
//     buttonToDoMenu.appendChild(divHamburgerMenuDots);

//     divToDoSubtask.appendChild(ulForSubtasks);

//     divToDoTaskContainer.appendChild(paraToDoTask);
//     divToDoTaskContainer.appendChild(divToDoSubtask);

//     divToDoCard.appendChild(divCheckbox);
//     divToDoCard.appendChild(divToDoTaskContainer);
//     divToDoCard.appendChild(buttonToDoMenu);

//     return divToDoCard;
// };


// export function createToDoSubtask(SubtaskToDo) {
//     const liToDoSubtask = document.createElement('li');
//     const buttonToDoSubtask = document.createElement('button');

//     buttonToDoSubtask.textContent = SubtaskToDo;

//     addClickEventListener(buttonToDoSubtask, subtaskButtonClickHandler);

//     liToDoSubtask.appendChild(buttonToDoSubtask);

//     return liToDoSubtask;
// };

// export function appendSubtaskToToDoCard(toDoCard, subtaskToDo) {
//     const subtask = createToDoSubtask(subtaskToDo);
//     const subtaskContainer = toDoCard.querySelector('.to-do-subtask ul');
//     subtaskContainer.appendChild(subtask);
// };

// export const addNewTaskButton = document.getElementById('addNewTaskButton');
// export const addNewTaskModal = document.getElementById('addNewTaskModal');

// import { createToDoCard, createToDoSubtask, appendSubtaskToToDoCard } from "./create-to-do-card";
// import { populateCategoriesContainer } from "./event-handlers";

// export let toDoList = [];
// export let categories = ['Show All'];
// export let toDoID = 0;
// export const toDoContainer = document.getElementById('toDoContainer');

// export function addNewToDo(toDoDescription, dueDate, category) {
//     const newToDo = {
//         id: toDoID,
//         description: toDoDescription,
//         creationDate: new Date(),
//         subtasks: [],
//         category: category,
//         status: 'unchecked',
//         dueDate,
//     };
//     toDoList.push(newToDo);
//     const newToDoCard = createToDoCard(toDoID, toDoDescription);
//     toDoID++;
//     toDoContainer.appendChild(newToDoCard);
//     saveToDoListToLocalStorage();
// };

// export function saveToDoListToLocalStorage() {
//     localStorage.setItem('toDoList', JSON.stringify(toDoList));
//     localStorage.setItem('categories', JSON.stringify(categories));
// };

// export function loadToDoListFromLocalStorage() {
//     const storedToDoList = localStorage.getItem('toDoList');
//     const storedCategories = localStorage.getItem('categories');
//     if (storedToDoList) {
//         toDoList = JSON.parse(storedToDoList);
//         toDoID = Math.max(...toDoList.map(item => item.id)) + 1;

//         toDoContainer.innerHTML = '';
//         toDoList.forEach(toDo => {
//             const newToDoCard = createToDoCard(toDo.id, toDo.description, toDo.status);
//             toDo.subtasks.forEach(subtask => {
//                 appendSubtaskToToDoCard(newToDoCard, subtask);
//             });

//             toDoContainer.appendChild(newToDoCard);
//         });
//     };
//     if (storedCategories) {
//         categories = JSON.parse(storedCategories);
//     };
//     populateCategoriesContainer();
// };