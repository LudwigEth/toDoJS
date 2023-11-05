import './style.css';
import { settingsButton, settingsDialog } from './modules/settings.js';
import {
    addClickEventListener,
    removeClickEventListener,
    settingsButtonClickHandler,
    documentOpenSettingsDialogClickHandler,
    closeModalOnOutsideClick
} from './modules/event-handlers.js';
import {
    createToDoCard,
    createToDoSubtask,
    appendSubtaskToToDoCard,
    addNewTaskButton,
    addNewTaskModal
} from './modules/create-to-do-card';


addClickEventListener(settingsButton, settingsButtonClickHandler);

addNewTaskButton.addEventListener('click', e => {
    addNewTaskModal.showModal();
    addClickEventListener(addNewTaskModal, modalCallbackWrapper);
});

export function modalCallbackWrapper(e) {
    closeModalOnOutsideClick(addNewTaskModal, e);
};