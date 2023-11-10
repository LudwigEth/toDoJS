import { addClickEventListener, subtaskButtonClickHandler, toggleCheckbox } from "./event-handlers";

export function createToDoCard(taskID, taskDescription) {


    const divToDoCard = document.createElement('div');
    const divCheckbox = document.createElement('div');
    const divCheckmark1 = document.createElement('div');
    const divCheckmark2 = document.createElement('div');
    const divToDoTaskContainer =  document.createElement('div');
    const paraToDoTask = document.createElement('p');
    const buttonToDoMenu = document.createElement('button');
    const divHamburgerMenuDots = document.createElement('div');
    const divHamburgerDotTop = document.createElement('div');
    const divHamburgerDotMiddle = document.createElement('div');
    const divHamburgerDotBottom = document.createElement('div');
    const divToDoSubtask = document.createElement('div');
    const ulForSubtasks = document.createElement('ul');


    divCheckbox.setAttribute('aria-checked', 'false');
    divCheckbox.setAttribute('tabindex', 0);


    divToDoCard.classList.add('to-do-card');
    divToDoTaskContainer.classList.add('to-do-task-container');
    divCheckbox.classList.add('checkbox');
    divCheckmark1.classList.add('checkmark1');
    divCheckmark2.classList.add('checkmark2');
    paraToDoTask.classList.add('to-do-task');
    buttonToDoMenu.classList.add('to-do-menu');
    divHamburgerMenuDots.classList.add('hamburger-menu-dots');
    divHamburgerDotTop.classList.add('hamburger-dots');
    divHamburgerDotMiddle.classList.add('hamburger-dots');
    divHamburgerDotBottom.classList.add('hamburger-dots');
    divToDoSubtask.classList.add('to-do-subtask', 'hidden');

    paraToDoTask.textContent = taskDescription;

    divToDoCard.dataset.taskId = taskID;

    // still need to attach eventlisteners to the buttons

    addClickEventListener(divCheckbox, toggleCheckbox);

    divCheckbox.appendChild(divCheckmark1);
    divCheckbox.appendChild(divCheckmark2);

    divHamburgerMenuDots.appendChild(divHamburgerDotTop);
    divHamburgerMenuDots.appendChild(divHamburgerDotMiddle);
    divHamburgerMenuDots.appendChild(divHamburgerDotBottom);
    buttonToDoMenu.appendChild(divHamburgerMenuDots);

    divToDoSubtask.appendChild(ulForSubtasks);

    divToDoTaskContainer.appendChild(paraToDoTask);
    divToDoTaskContainer.appendChild(divToDoSubtask);

    divToDoCard.appendChild(divCheckbox);
    divToDoCard.appendChild(divToDoTaskContainer);
    divToDoCard.appendChild(buttonToDoMenu);

    return divToDoCard;
};


export function createToDoSubtask(SubtaskToDo) {
    const liToDoSubtask = document.createElement('li');
    const buttonToDoSubtask = document.createElement('button');

    buttonToDoSubtask.textContent = SubtaskToDo;

    addClickEventListener(buttonToDoSubtask, subtaskButtonClickHandler);

    liToDoSubtask.appendChild(buttonToDoSubtask);

    return liToDoSubtask;
};

export function appendSubtaskToToDoCard(toDoCard, subtaskToDo) {
    const subtask = createToDoSubtask(subtaskToDo);
    const subtaskContainer = toDoCard.querySelector('.to-do-subtask ul');
    subtaskContainer.appendChild(subtask);
};

export const addNewTaskButton = document.getElementById('addNewTaskButton');
export const addNewTaskModal = document.getElementById('addNewTaskModal');