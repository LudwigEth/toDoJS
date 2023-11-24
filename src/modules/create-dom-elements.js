// import { addClickEventListener, removeNewSubtaskButtonClickHandler } from "./event-handlers";

// export function createCategoryButton(category) {
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.classList.add('dialog-btn');
//     button.textContent = category;
//     return button;
// };

// export function createScrollItem(category) {
//     const scrollItem = document.createElement('div');
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.textContent = category;
//     scrollItem.classList.add('scroll-item');
//     scrollItem.appendChild(button);
//     return scrollItem;
// };

// export function createNewSubtaskItemContainer() {
//     const SubtaskItemContainer = document.createElement('div');
//     const input = document.createElement('input');
//     const deleteButton = document.createElement('button');
//     const deleteSymbolLine1 = document.createElement('div');
//     const deleteSymbolLine2 = document.createElement('div');

//     deleteButton.type = 'button';
//     input.type = 'text';
//     input.placeholder = 'Add new subtask here';
//     input.autocomplete = 'off';
//     input.name = 'newSubtaskInput';


//     SubtaskItemContainer.classList.add('newSubtaskItem');
//     input.classList.add('addNewTaskInput', 'addNewSubtaskInput');
//     deleteButton.classList.add('delete-button');
//     deleteSymbolLine1.classList.add('delete-button-l1');
//     deleteSymbolLine2.classList.add('delete-button-l2');

//     addClickEventListener(deleteButton, removeNewSubtaskButtonClickHandler);

//     deleteSymbolLine1.appendChild(deleteSymbolLine2);
//     deleteButton.appendChild(deleteSymbolLine1);
//     SubtaskItemContainer.appendChild(input);
//     SubtaskItemContainer.appendChild(deleteButton);
//     return SubtaskItemContainer;
// };