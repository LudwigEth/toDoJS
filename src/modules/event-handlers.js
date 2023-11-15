import {addCategoryButton, addCategoryDialog, addSubtaskButton, settingsButton, settingsDialog, submitToDoFormButton} from "../index.js";
import { createCategoryButton, createNewSubtaskItemContainer, createScrollItem } from "./create-dom-elements.js";
import { addNewTaskButton, addNewTaskModal } from "./create-to-do-card";
import { addNewToDo, categories, saveToDoListToLocalStorage, toDoID, toDoList } from "./todos";

export function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
};

export function removeClickEventListener(element, callback) {
    element.removeEventListener('click', callback);
};

export function isDialogOpen(dialogElement) {
    return getComputedStyle(dialogElement).display !== 'none';
};

export function dialogFadeOutAnimation(dialogElement) {
    dialogElement.classList.add('dialog-fade-out');
    setTimeout(() => {
        dialogElement.classList.remove('dialog-fade-out');
    }, 300);
};

export function settingsButtonClickHandler(event) {
    const hamburgerMenuDots = document.getElementById('menuDots');
    toggleClassName(hamburgerMenuDots, 'spread');
    if (isDialogOpen(settingsDialog)) {
        dialogFadeOutAnimation(settingsDialog);
        settingsDialog.close();
        event.stopPropagation();
        removeClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
    if (!isDialogOpen(settingsDialog)) {
        settingsDialog.show();
        addClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
};

export function outsideDialogClickHandler(event, dialogElement, openDialogButton) {
    if (event.target !== dialogElement && event.target !== openDialogButton) {
        const hamburgerMenuDots = document.getElementById('menuDots');
        toggleClassName(hamburgerMenuDots, 'spread');
        dialogFadeOutAnimation(dialogElement);
        dialogElement.close();
        removeClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
};

export function documentOpenSettingsDialogClickHandler(event) {
    outsideDialogClickHandler(event, settingsDialog, settingsButton);
};

export function closeModalOnOutsideClick(dialogModal, e) {
    const dialogModalDimension = dialogModal.getBoundingClientRect();
    if (
        e.clientX < dialogModalDimension.left ||
        e.clientX > dialogModalDimension.right ||
        e.clientY < dialogModalDimension.top ||
        e.clientY > dialogModalDimension.bottom
    ) {
        if (addCategoryDialog.open) {
            categoryModalCloseEvents(e);
        } else {
            removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
            removeClickEventListener(submitToDoFormButton, submitEdit);
            removeClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
            removeClickEventListener(addCategoryDialog, categoryModalCallbackWrapper);
            resetNewToDoFormInputs();
            removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
            removeClickEventListener(addSubtaskButton, addSubtaskButtonClickHandler);
            dialogModal.close();
        };
    };
};

export function modalCallbackWrapper(e) {
        closeModalOnOutsideClick(addNewTaskModal, e);
};

export function categoryModalCallbackWrapper(e) {
    closeModalOnOutsideClick(addCategoryDialog, e);
    if(addCategoryDialog.contains(e.target)) {
        addCategoryButton.textContent = e.target.textContent;
    };
    categoryModalCloseEvents(e);
};

export function categoryModalCloseEvents(e) {
    removeClickEventListener(addCategoryDialog, categoryModalCallbackWrapper);
    removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
    removeClickEventListener(addSubtaskButton, addSubtaskButtonClickHandler);
    addCategoryDialog.close();
    e.stopPropagation();
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
};

export function addNewTaskButtonClickHandler(e) {
    addNewTaskModal.showModal();
    document.body.classList.add('no-scroll');
    addClickEventListener(submitToDoFormButton, submitNewToDoForm);
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
    addClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
    addClickEventListener(addSubtaskButton, addSubtaskButtonClickHandler);
};

export function subtaskButtonClickHandler() {
    document.body.classList.add('no-scroll');
    if (buttonToDoSubtask.classList.contains('subtask-done')) {
        buttonToDoSubtask.classList.remove('subtask-done');
    } else {
        buttonToDoSubtask.classList.add('subtask-done');
    };
};

export function submitNewToDoForm() {
    const toDoDescriptionInput = document.getElementById('newToDoDescription');
    const toDoDescription = toDoDescriptionInput.value.trim();
    if (!toDoDescription) {
        removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
        removeClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
        addNewTaskModal.close();
        return;
    };
    const dueDate = new Date();
    const category = addCategoryButton.textContent;
    addNewToDo(toDoDescription, dueDate, category);
    resetNewToDoFormInputs();
    removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
    removeClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
    addNewTaskModal.close();
};

export function resetNewToDoFormInputs() {
    document.body.classList.remove('no-scroll');
    const toDoDescription = document.getElementById('newToDoDescription');
    const categoryButton = document.getElementById('btn-addCategoryTag');
    toDoDescription.value = '';
    categoryButton.textContent = 'category';
    const newSubtasksContainer = document.getElementById('newSubtasksContainer');
    const subtaskItems = newSubtasksContainer.getElementsByClassName('newSubtaskItem');
    Array.from(subtaskItems).forEach(item => {
        const deleteButton = item.children[1];
        removeClickEventListener(deleteButton, removeNewSubtaskButtonClickHandler);
        newSubtasksContainer.removeChild(item);
    });
    const moreSubtasksButtonContainer = document.querySelector('div.moreSubtasksButtonContainer');
    moreSubtasksButtonContainer.classList.add('hidden');
    removeClickEventListener(moreSubtasksButtonContainer, addNewSubtaskButtonClickHandler);
};

export function toggleClassName(element, className) {
    element.classList.toggle(className);
};

export function toggleCheckbox(clickedCheckbox) {
    toggleClassName(clickedCheckbox, "checked");
};

export function editToDoCard(e) {
    document.body.classList.add('no-scroll');
    const toDoDescription = e.target.closest('.to-do-card').querySelector('.to-do-task');
    const currentToDoDescription = toDoDescription.textContent;
    const editCurrentInput = document.getElementById('newToDoDescription');
    editCurrentInput.value = currentToDoDescription;

    const currentToDoCardId = e.target.closest('.to-do-card').dataset.taskId;
    submitToDoFormButton.dataset.taskId = currentToDoCardId.toString();
    let currentToDoCardCategory = getToDoItem(currentToDoCardId).category;
    if (getToDoItem(currentToDoCardId).category === categories[0]) {
        currentToDoCardCategory = 'category';
    };
    addCategoryButton.textContent = currentToDoCardCategory;

    addNewTaskModal.showModal();
    removeClickEventListener(submitToDoFormButton, submitEdit);
    removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
    addClickEventListener(addSubtaskButton, addSubtaskButtonClickHandler);
    addClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
    addClickEventListener(submitToDoFormButton, submitEdit);
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
};

export function submitEdit(e) {
    const toDoItemId = parseInt(submitToDoFormButton.dataset.taskId);
    const toDoItem = getToDoItem(toDoItemId);
    toDoItem.description = document.getElementById('newToDoDescription').value;
    if (addCategoryButton.textContent === 'category') {
        toDoItem.category = 'Show All';
    } else {
        toDoItem.category = addCategoryButton.textContent;
    };
    const editedTask = document.querySelector(`.to-do-card[data-task-id='${toDoItemId}'] .to-do-task`);
    editedTask.textContent = toDoItem.description;
    removeClickEventListener(submitToDoFormButton, submitEdit);
    removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
    removeClickEventListener(addCategoryDialog, modalCallbackWrapper);
    removeClickEventListener(addCategoryButton, addCategoryButtonClickHandler);
    saveToDoListToLocalStorage();
    resetNewToDoFormInputs();
    addNewTaskModal.close();
};

export function getToDoItem(taskId) {
    taskId = parseInt(taskId);
    return toDoList.find(item => item.id === taskId);
};

export function addNewCategoryButtonClickHandler() {
    toggleTagBar();
};

export function resetNewCategoryInput() {
    const newCategoryInput = document.getElementById('addNewCategoryInput');
    newCategoryInput.value = '';
};

export function cancelNewCategoryButtonClickHandler() {
    resetNewCategoryInput();
    toggleTagBar();
};

export function confirmNewCategoryButtonClickHandler() {
    const newCategoryInput = document.getElementById('addNewCategoryInput');
    const newCategory = newCategoryInput.value.trim();
    if (newCategory === '' || categories.includes(newCategory)) {
        resetNewCategoryInput();
        toggleTagBar();
    } else {
    categories.push(newCategory);
    document.getElementById('scrollItemContainer').appendChild(createScrollItem(categories[categories.length -1]));
    resetNewCategoryInput();
    toggleTagBar();
    saveToDoListToLocalStorage();
    };
};

export function toggleTagBar() {
    const submitNewCategoryButton = document.getElementById('submitNewCategoryButton');
    const cancelNewCategoryButton = document.getElementById('cancelNewCategoryButton');
    const categoryContainer = document.querySelector('.addNewCategoryContainer');
    const scrollItemContainer = document.getElementById('scrollItemContainer');
    const growElement = document.getElementById('grower');
    growElement.classList.add('grow');
    console.log(toDoList);

    if (categoryContainer.classList.contains('hidden')) {
        setTimeout(() => {
            categoryContainer.classList.remove('hidden');
            scrollItemContainer.classList.add('hidden');
            growElement.classList.remove('grow');
        }, 330);
        addClickEventListener(submitNewCategoryButton, confirmNewCategoryButtonClickHandler);
        addClickEventListener(cancelNewCategoryButton, cancelNewCategoryButtonClickHandler);
    } else {
        setTimeout(() => {
            categoryContainer.classList.add('hidden');
            scrollItemContainer.classList.remove('hidden');
            growElement.classList.remove('grow');
        }, 330);
        removeClickEventListener(submitNewCategoryButton, confirmNewCategoryButtonClickHandler);
        removeClickEventListener(cancelNewCategoryButton, cancelNewCategoryButtonClickHandler);
    };
};

export function populateCategoriesContainer() {
    const categoryScrollContainer = document.getElementById('scrollItemContainer');
    categories.forEach(category => {
        const categoryItem = createScrollItem(category);
        categoryScrollContainer.appendChild(categoryItem);
    });
};

export function populateCategoriesModal() {
    const categoriesModal = document.getElementById('categoriesModal');
    while (categoriesModal.firstChild) {
        categoriesModal.removeChild(categoriesModal.firstChild);
    };
    for (let i = 1; i < categories.length; i++) {
        categoriesModal.appendChild(createCategoryButton(categories[i]));
    };
};

export function addCategoryButtonClickHandler(e) {
    document.body.classList.add('no-scroll');
    const categoryButtonDimensions = addCategoryButton.getBoundingClientRect();
    addCategoryDialog.style.position = 'absolute';
    addCategoryDialog.style.left = `${categoryButtonDimensions.left}px`;
    addCategoryDialog.style.top = `calc(${categoryButtonDimensions.bottom}px + 0.5rem)`;
    populateCategoriesModal();
    addCategoryDialog.showModal();
    removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
    addClickEventListener(addCategoryDialog, categoryModalCallbackWrapper);
};

export function checkboxClickHandler(e) {
    const clickedCheckbox = this;
    toggleCheckbox(clickedCheckbox);
    const currentToDoCardId = e.target.closest('.to-do-card').dataset.taskId;
    const currentToDoItem = getToDoItem(currentToDoCardId);
    currentToDoItem.status = currentToDoItem.status === 'checked' ? 'unchecked' : 'checked';

    if (currentToDoItem.status === 'checked') {
        clickedCheckbox.setAttribute('aria-checked', 'true');
    } else {
        clickedCheckbox.setAttribute('aria-checked', 'false');
    };
    saveToDoListToLocalStorage();
};

export function addNewSubtaskButtonClickHandler() {
    createSubtaskItemElement();
};

export function createSubtaskItemElement() {
    const newSubtasksContainer = document.getElementById('newSubtasksContainer');
    const newSubtaskItemContainer = createNewSubtaskItemContainer();
    newSubtasksContainer.appendChild(newSubtaskItemContainer);
};

export function removeNewSubtaskButtonClickHandler(e) {
    const newSubtasksContainer = document.getElementById('newSubtasksContainer');
    const moreSubtasksButtonContainer = document.querySelector('div.moreSubtasksButtonContainer');
    const button = e.currentTarget;
    e.target.closest('.newSubtaskItem').remove();
    if (newSubtasksContainer.innerHTML === '') {
        moreSubtasksButtonContainer.classList.add('hidden');
    };
    removeClickEventListener(button, removeNewSubtaskButtonClickHandler);
};

export function addSubtaskButtonClickHandler() {
    const moreSubtasksButtonContainer = document.querySelector('div.moreSubtasksButtonContainer');
    moreSubtasksButtonContainer.classList.remove('hidden');
    createSubtaskItemElement();
    addClickEventListener(moreSubtasksButtonContainer, addNewSubtaskButtonClickHandler);
};