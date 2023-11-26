import { createSubtaskItemContainer } from "./createElements";
import { toggleClassName } from "./eventHandlers";
import { addNewSubtaskItem, addTaskModalEvents, createSubtasksArray, removeTaskModalEvents, resetTaskModal, submitNewToDo, taskModal } from "./taskModal";
import { appendSubtaskToToDoCard, categories, saveToDoListToLocalStorage, toDoList } from "./toDoItem";

export const toDoContainer = {
    toDoContainer: document.getElementById('toDoContainer'),
};

export function getToDoItem(taskId) {
    taskId = parseInt(taskId);
    return toDoList.find(item => item.id === taskId);
};

export function getThisToDoItem(e) {
    const taskId = e.target.closest('.to-do-card').dataset.taskId;
    return getToDoItem(taskId);
};

export function editToDoCard(e) {
    document.body.classList.add('no-scroll');
    const currentCardId = e.target.closest('.to-do-card').dataset.taskId;
    const currentToDoDescription = e.target.closest('.to-do-card').querySelector('.to-do-task').textContent;
    const currentToDoSubtasks = toDoList[currentCardId].subtasks;
    taskModal.mainTask.value = currentToDoDescription;
    taskModal.submitButton.dataset.taskId = currentCardId.toString();
    if (getToDoItem(currentCardId).category === categories[0]) {
        taskModal.categoryButton.textContent = 'category';
    } else {
        taskModal.categoryButton.textContent = getToDoItem(currentCardId).category;
    };
    if (currentToDoSubtasks.length > 0) {
        currentToDoSubtasks.forEach(subtask => {
            const subtaskContainer = createSubtaskItemContainer(subtask.description, subtask.id);
            taskModal.subtasksContainer.appendChild(subtaskContainer);
        });
    };
    taskModal.dialog.showModal();
    addTaskModalEvents();
    taskModal.submitButton.removeEventListener('click', submitNewToDo);
    taskModal.submitButton.addEventListener('click', submitEdit);
};

export function removeExistingSubtask(e) {
    const currentToDo = getToDoItem(taskModal.submitButton.dataset.taskId);
    const subtaskId = parseInt(e.target.closest('.newSubtaskItem').firstElementChild.dataset.id);
    const newSubtasksArray = currentToDo.subtasks.filter(subtask => subtask.id !== subtaskId);
    currentToDo.subtasks = newSubtasksArray;

};

export function submitEdit(e) {
    const lastClickedToDoId = parseInt(taskModal.submitButton.dataset.taskId);
    const toDoItemLastClickedId = getToDoItem(lastClickedToDoId);
    const cardToEdit = document.querySelector(`.to-do-card[data-task-id='${lastClickedToDoId}']`);
    toDoItemLastClickedId.toDoDescription = document.getElementById('newToDoDescription').value;
    if (categories.includes(taskModal.categoryButton.textContent)) {
        toDoItemLastClickedId.category = taskModal.categoryButton.textContent;
    } else {
        toDoItemLastClickedId.category = 'All';
    };



    toDoItemLastClickedId.subtasks = createSubtasksArray();

    const oldSubtasks = cardToEdit.querySelectorAll('li');
    if (oldSubtasks.length > 0) {
        Array.from(oldSubtasks).forEach(subtask => {
            subtask.firstElementChild.removeEventListener('click', toDoCardSubtaskEvents);
            subtask.remove();
        });
    };

    const editedToDo = document.querySelector(`.to-do-card[data-task-id='${lastClickedToDoId}'] .to-do-task`);
    editedToDo.textContent = toDoItemLastClickedId.toDoDescription;
    if (toDoItemLastClickedId.subtasks.length > 0) {
        toDoItemLastClickedId.subtasks.forEach(subtask => {
            appendSubtaskToToDoCard(cardToEdit, subtask.description, subtask.id, subtask.status);
        });
    };
    if (taskModal.subtasksContainer.querySelectorAll('.newSubtaskItem').length === 0) {
        cardToEdit.querySelector('.to-do-subtask').classList.add('hidden');
    };
    resetTaskModal();
    removeTaskModalEvents();
    taskModal.dialog.close();
    saveToDoListToLocalStorage();
    taskModal.submitButton.removeEventListener('click', submitEdit);
};

export function checkBoxClickEvents(e) {
    const clickedCheckbox = this;
    toggleClassName(clickedCheckbox, 'checked');
    const currentCardId = e.target.closest('.to-do-card').dataset.taskId;
    const currentToDoItem = getToDoItem(currentCardId);
    currentToDoItem.status = currentToDoItem.status === 'checked' ? 'unchecked' : 'checked';

    if (currentToDoItem.status === 'checked') {
        clickedCheckbox.setAttribute('aria-checked', 'true');
    } else {
        clickedCheckbox.setAttribute('aria-checked', 'false');
    };
    saveToDoListToLocalStorage();
};

export function toDoCardSubtaskEvents(e) {
    const currentToDo = getThisToDoItem(e);
    const currentToDoCard = e.target.closest('.to-do-card');
    const currentSubtask = currentToDo.subtasks.find( subtask => subtask.id === parseInt(e.target.dataset.id));
    if (e.target.classList.contains('subtask-done')) {
        e.target.classList.remove('subtask-done');
        e.target.dataset.status = 'open';
        currentSubtask.status = 'open';
    } else {
        e.target.classList.add('subtask-done');
        e.target.dataset.status = 'done';
        currentSubtask.status = 'done';
    };
    const subtasksNodeList = currentToDoCard.querySelectorAll('.to-do-subtask button');
    if (Array.from(subtasksNodeList).every(subtask => subtask.dataset.status === 'done')) {
        if (!currentToDoCard.firstElementChild.classList.contains('checked')) {
            currentToDoCard.firstElementChild.click();
        };
    };
    saveToDoListToLocalStorage();
};