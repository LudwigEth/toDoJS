import { createSubtask, createToDoCard } from "./createElements";
import { populateCategoriesContainer } from "./tagBar";
import { toDoContainer } from "./toDoContainer";

export let toDoList = [];
export let categories = ['Show All'];
export let toDoID = 0;

export function addNewToDo(toDoDescription, dueDate, categoryTag, subtaskDescriptions) {
    const newToDo = {
        id: toDoID,
        toDoDescription,
        dueDate,
        category: categoryTag,
        creationDate: new Date(),
        subtasks: subtaskDescriptions,
        status: 'unchecked',
    };
    toDoList.push(newToDo);
    const newToDoCard = createToDoCard(toDoID, toDoDescription, newToDo.status);
    if (newToDo.subtasks.length > 0) {
        newToDoCard.querySelector('.to-do-subtask').classList.remove('hidden');
        subtaskDescriptions.forEach(subtask => {
            appendSubtaskToToDoCard(newToDoCard, subtask);
        });
    };
    toDoID++;
    toDoContainer.toDoContainer.appendChild(newToDoCard);
    saveToDoListToLocalStorage();
};

export function saveToDoListToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    localStorage.setItem('categories', JSON.stringify(categories));
};

export function loadToDoListFromLocalStorage() {
    const storedToDoList = localStorage.getItem('toDoList');
    const storedCategories = localStorage.getItem('categories');
    if (storedToDoList) {
        toDoList = JSON.parse(storedToDoList);
        toDoID = Math.max(...toDoList.map(item => item.id)) + 1;

        toDoContainer.toDoContainer.innerHTML = '';
        toDoList.forEach(toDo => {
            const newToDoCard = createToDoCard(toDo.id, toDo.toDoDescription, toDo.status);
            toDo.subtasks.forEach(subtask => {
                appendSubtaskToToDoCard(newToDoCard, subtask);
            });

            toDoContainer.toDoContainer.appendChild(newToDoCard);
        });
    };
    if (storedCategories) {
        categories = JSON.parse(storedCategories);
    };
    populateCategoriesContainer();
};


export function appendSubtaskToToDoCard(toDoCard, subtaskDescription) {
    const subtask = createSubtask(subtaskDescription);
    const subtaskContainer = toDoCard.querySelector('.to-do-subtask ul');
    subtaskContainer.appendChild(subtask);
};