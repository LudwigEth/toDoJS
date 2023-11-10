import {settingsButton, settingsDialog} from "../index.js";
import { addNewTaskButton, addNewTaskModal } from "./create-to-do-card";
import { addNewToDo, toDoID } from "./todos";

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
        dialogModal.close();
        removeClickEventListener(dialogModal, addNewTaskButtonClickHandler);
    };
};

export function modalCallbackWrapper(e) {
    closeModalOnOutsideClick(addNewTaskModal, e);
};

export function addNewTaskButtonClickHandler(event) {
    addNewTaskModal.showModal();
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
    addNewToDo(toDoDescription, dueDate, toDoID);
    resetNewToDoFormInputs();
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