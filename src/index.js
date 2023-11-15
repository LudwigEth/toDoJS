import './style.css';
import {
    addClickEventListener,
    settingsButtonClickHandler,
    addNewTaskButtonClickHandler,
    modalCallbackWrapper,
    addNewCategoryButtonClickHandler,
    addSubtaskButtonClickHandler
} from './modules/event-handlers.js';
import {
    addNewTaskButton,
    addNewTaskModal
} from './modules/create-to-do-card';
import {
    loadToDoListFromLocalStorage
} from './modules/todos';

export const settingsButton = document.getElementById('btn-settings');
export const settingsDialog = document.getElementById('dialog-settings-tasks');
export const submitToDoFormButton = document.getElementById('btn-submitToDo');
export const addCategoryDialog = document.getElementById('dialog-categories');
export const addCategoryButton = document.getElementById('btn-addCategoryTag');
export const addSubtaskButton = document.getElementById('btn-addSubtask');

addClickEventListener(settingsButton, settingsButtonClickHandler);

addNewTaskButton.addEventListener('click', e => {
    addNewTaskModal.showModal();
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
});

addClickEventListener(addNewTaskButton, addNewTaskButtonClickHandler);

const addNewCategorybtn = document.getElementById('addCategory');

addClickEventListener(addNewCategorybtn, addNewCategoryButtonClickHandler);

loadToDoListFromLocalStorage();