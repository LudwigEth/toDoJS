import { createSubtaskItemContainer } from "./createElements";
import { toggleClassName } from "./eventHandlers";
import { addNewSubtaskItem, addTaskModalEvents, removeTaskModalEvents, resetTaskModal, submitNewToDo, taskModal } from "./taskModal";
import { categories, saveToDoListToLocalStorage, toDoList } from "./toDoItem";

export const toDoContainer = {
    toDoContainer: document.getElementById('toDoContainer'),
};

export function getToDoItem(taskId) {
    taskId = parseInt(taskId);
    return toDoList.find(item => item.id === taskId);
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
            taskModal.subtasksContainer.appendChild(createSubtaskItemContainer(subtask));
        });
    };
    taskModal.dialog.showModal();
    addTaskModalEvents();
    taskModal.submitButton.removeEventListener('click', submitNewToDo);
    taskModal.submitButton.addEventListener('click', submitEdit);
};

export function submitEdit(e) {
    const lastClickedToDoId = parseInt(taskModal.submitButton.dataset.taskId);
    const toDoItemLastClickedId = getToDoItem(lastClickedToDoId);
    toDoItemLastClickedId.toDoDescription = document.getElementById('newToDoDescription').value;
    let subtasks = [];
    if (categories.includes(taskModal.categoryButton.textContent)) {
        toDoItemLastClickedId.category = taskModal.categoryButton.textContent;
    } else {
        toDoItemLastClickedId.category = 'Show All';
    };
    if(taskModal.subtasksContainer.innerHTML !== '') {
        const subtaskItemsArray = taskModal.subtasksContainer.querySelectorAll('.newSubtaskItem');
        Array.from(subtaskItemsArray).forEach(item => {
            if (item.firstElementChild.value.trim() !== '') {
                subtasks.push(item.firstElementChild.value.trim());
            };
        });
    };
    toDoItemLastClickedId.subtasks = subtasks;
    const editedToDo = document.querySelector(`.to-do-card[data-task-id='${lastClickedToDoId}'] .to-do-task`);
    editedToDo.textContent = toDoItemLastClickedId.toDoDescription;
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
    if (e.target.classList.contains('subtask-done')) {
        e.target.classList.remove('subtask-done');
    } else {
        e.target.classList.add('subtask-done');
    };
};