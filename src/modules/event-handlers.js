import {settingsButton, settingsDialog, submitToDoFormButton} from "../index.js";
import { addNewTaskButton, addNewTaskModal } from "./create-to-do-card";
import { addNewToDo, saveToDoListToLocalStorage, toDoID, toDoList } from "./todos";

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
        removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
        removeClickEventListener(submitToDoFormButton, submitEdit);
        resetNewToDoFormInputs();
        dialogModal.close();
        removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
    };
};

export function modalCallbackWrapper(e) {
    closeModalOnOutsideClick(addNewTaskModal, e);
};

export function addNewTaskButtonClickHandler(event) {
    addNewTaskModal.showModal();
    addClickEventListener(submitToDoFormButton, submitNewToDoForm);
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
}

export function subtaskButtonClickHandler() {
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
        addNewTaskModal.close();
        return;
    };
    const dueDate = new Date();
    addNewToDo(toDoDescription, dueDate);
    resetNewToDoFormInputs();
    removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
    addNewTaskModal.close();
};

export function resetNewToDoFormInputs() {
    const toDoDescription = document.getElementById('newToDoDescription');
    const categoryButton = document.getElementById('btn-addCategoryTag');
    toDoDescription.value = '';
    categoryButton.textContent = 'category';
};

export function toggleClassName(element, className) {
    element.classList.toggle(className);
};

export function toggleCheckbox() {
    toggleClassName(this, "checked");
};

export function editToDoCard(e) {
    const toDoDescription = e.target.closest('.to-do-card').querySelector('.to-do-task');
    const currentToDoDescription = toDoDescription.textContent;
    const editCurrentInput = document.getElementById('newToDoDescription');
    editCurrentInput.value = currentToDoDescription;

    const currentToDoCardId = e.target.closest('.to-do-card').dataset.taskId;
    submitToDoFormButton.dataset.taskId = currentToDoCardId.toString();
    const currentToDoCardCategory = getToDoItem(currentToDoCardId).category;
    
    const editCurrentCategoryButton = document.getElementById('btn-addCategoryTag');
    editCurrentCategoryButton.textContent = currentToDoCardCategory;

    addNewTaskModal.showModal();
    removeClickEventListener(submitToDoFormButton, submitEdit);
    removeClickEventListener(submitToDoFormButton, submitNewToDoForm);
    addClickEventListener(submitToDoFormButton, submitEdit);
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
};

export function submitEdit(e) {
    const toDoItemId = parseInt(submitToDoFormButton.dataset.taskId);
    const toDoItem = getToDoItem(toDoItemId);
    toDoItem.description = document.getElementById('newToDoDescription').value;
    toDoItem.category = document.getElementById('btn-addCategoryTag').textContent;
    const editedTask = document.querySelector(`.to-do-card[data-task-id='${toDoItemId}'] .to-do-task`);
    editedTask.textContent = toDoItem.description;
    removeClickEventListener(submitToDoFormButton, submitEdit);
    removeClickEventListener(addNewTaskModal, modalCallbackWrapper);
    saveToDoListToLocalStorage();
    resetNewToDoFormInputs();
    addNewTaskModal.close();
};

export function getToDoItem(taskId) {
    taskId = parseInt(taskId);
    return toDoList.find(item => item.id === taskId);
};