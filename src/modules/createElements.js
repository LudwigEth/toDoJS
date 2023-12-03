import { removeSubtaskContainer } from "./taskModal";
import { checkBoxClickEvents, editToDoCard, toDoCardSubtaskEvents } from "./toDoContainer";

export function createToDoCard(id, description, status) {
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

    if (status === 'checked') {
        divCheckbox.classList.add('checked');
        divCheckbox.setAttribute('aria-checked', 'true');
    } else {
        divCheckbox.setAttribute('aria-checked', 'false');
        divCheckbox.classList.remove('checked');
    };
    divCheckbox.setAttribute('tabindex', 0);


    divToDoCard.classList.add('to-do-card', 'fade-in');
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

    paraToDoTask.textContent = description;

    divToDoCard.dataset.taskId = id;
    
    divCheckbox.addEventListener('click', checkBoxClickEvents)
    buttonToDoMenu.addEventListener('click', editToDoCard);

    divCheckmark1.appendChild(divCheckmark2);
    divCheckbox.appendChild(divCheckmark1);

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


/**
 * Creates the subtask li element for the todo cards
 * @param {string} description - String of the ToDo task. 
 * @returns {Element} - Returns a list item that represents a subtask with a description.
 */
export function createSubtask(description, id, status) {
    const subtask = document.createElement('li');
    const buttonToDoSubtask = document.createElement('button');

    buttonToDoSubtask.textContent = description;
    buttonToDoSubtask.addEventListener('click', toDoCardSubtaskEvents);
    buttonToDoSubtask.dataset.id = id;
    buttonToDoSubtask.dataset.status = status;
    if (status === 'done') {
        buttonToDoSubtask.classList.add('subtask-done');
    };

    subtask.classList.add('fade-in');
    subtask.appendChild(buttonToDoSubtask);

    return subtask;
};

/**
 * Creates a button element with the category as textContent.
 * @param {string} category - Value of an existing category from the categories array.
 * @returns - A button element with a category name, used to populate the categoryModal.
 */
export function createCategoryButton(category) {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('dialog-btn');
    button.textContent = category;
    return button;
};

export function createScrollItem(category) {
    const scrollItem = document.createElement('div');
    const button = document.createElement('button');
    const span = document.createElement('span');
    const deleteSymbolLine1 = document.createElement('div');
    const deleteSymbolLine2 = document.createElement('div');

    button.type = 'button';
    span.textContent = category;
    scrollItem.classList.add('scroll-item');
    deleteSymbolLine1.classList.add('delete-button-l1', 'hidden');
    deleteSymbolLine2.classList.add('delete-button-l2');
    deleteSymbolLine1.appendChild(deleteSymbolLine2);
    button.appendChild(span);
    button.appendChild(deleteSymbolLine1);
    scrollItem.appendChild(button);
    return scrollItem;
};

export function createSubtaskItemContainer(subtask, id) {
    const SubtaskItemContainer = document.createElement('div');
    const input = document.createElement('input');
    const deleteButton = document.createElement('button');
    const deleteSymbolLine1 = document.createElement('div');
    const deleteSymbolLine2 = document.createElement('div');

    deleteButton.type = 'button';
    input.type = 'text';
    input.placeholder = 'Add new subtask here';
    input.autocomplete = 'off';
    input.name = 'newSubtaskInput';
    input.classList.add('newSubtaskInput');
    input.dataset.id = id;

    subtask ? input.value = subtask : input.value = '';

    SubtaskItemContainer.classList.add('newSubtaskItem', 'fade-in');
    input.classList.add('addNewTaskInput', 'addNewSubtaskInput');
    deleteButton.classList.add('delete-button');
    deleteSymbolLine1.classList.add('delete-button-l1');
    deleteSymbolLine2.classList.add('delete-button-l2');

    deleteButton.addEventListener('click', removeSubtaskContainer);

    deleteSymbolLine1.appendChild(deleteSymbolLine2);
    deleteButton.appendChild(deleteSymbolLine1);
    SubtaskItemContainer.appendChild(input);
    SubtaskItemContainer.appendChild(deleteButton);
    return SubtaskItemContainer;
};