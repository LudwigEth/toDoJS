import './style.css';
import {
    addClickEventListener,
    removeClickEventListener,
    settingsButtonClickHandler,
    documentOpenSettingsDialogClickHandler,
    closeModalOnOutsideClick,
    addNewTaskButtonClickHandler,
    submitNewToDoForm,
    modalCallbackWrapper,
    categoryButtonClickHandler
} from './modules/event-handlers.js';
import {
    createToDoCard,
    createToDoSubtask,
    appendSubtaskToToDoCard,
    addNewTaskButton,
    addNewTaskModal
} from './modules/create-to-do-card';
import {
    toDoList,
    categoryTags,
    toDoID,
    loadToDoListFromLocalStorage
} from './modules/todos';

export const settingsButton = document.getElementById('btn-settings');
export const settingsDialog = document.getElementById('dialog-settings-tasks');
export const submitToDoFormButton = document.getElementById('btn-submitToDo');
export const addCategoryDialog = document.getElementById('dialog-categories');
export const addCategoryButton = document.getElementById('btn-addCategoryTag');

addClickEventListener(settingsButton, settingsButtonClickHandler);

addNewTaskButton.addEventListener('click', e => {
    addNewTaskModal.showModal();
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
});

addClickEventListener(addNewTaskButton, addNewTaskButtonClickHandler);

loadToDoListFromLocalStorage();