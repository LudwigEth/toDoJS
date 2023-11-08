import './style.css';
import {
    addClickEventListener,
    removeClickEventListener,
    settingsButtonClickHandler,
    documentOpenSettingsDialogClickHandler,
    closeModalOnOutsideClick,
    addNewTaskButtonClickHandler,
    submitNewToDoForm
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
addClickEventListener(settingsButton, settingsButtonClickHandler);

addNewTaskButton.addEventListener('click', e => {
    addNewTaskModal.showModal();
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
});

export function modalCallbackWrapper(e) {
    closeModalOnOutsideClick(addNewTaskModal, e);
};

addClickEventListener(addNewTaskButton, addNewTaskButtonClickHandler);

const submitNewToDoFormButton = document.getElementById('btn-submitToDo');

addClickEventListener(submitNewToDoFormButton, submitNewToDoForm);

loadToDoListFromLocalStorage();