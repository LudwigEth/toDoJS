import { createSubtask, createToDoCard } from "./createElements";
import { populateCategoriesContainer } from "./tagBar";
import { toDoContainer } from "./toDoContainer";

export let toDoList = [];
export let categories = ['All'];
export let toDoID = 0;

export function addNewToDo(toDoDescription, dueDate, categoryTag, SubtaskArrayOfObjects) {
    const newToDo = {
        id: toDoID,
        toDoDescription,
        dueDate,
        category: categoryTag,
        creationDate: new Date(),
        subtasks: SubtaskArrayOfObjects,
        status: 'unchecked',
    };
    toDoList.push(newToDo);
    const newToDoCard = createToDoCard(toDoID, toDoDescription, newToDo.status);
    if (newToDo.subtasks.length > 0) {
        newToDo.subtasks.forEach(subtask => {
            appendSubtaskToToDoCard(newToDoCard, subtask.description, subtask.id, subtask.status);
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

export function addNewSubtaskObject(description, id) {
    const subtaskObject = {
        description,
        id,
        status: 'open',
    };
    return subtaskObject;
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
            if (toDo.subtasks.length > 0) {
                toDo.subtasks.forEach(subtask => {
                    appendSubtaskToToDoCard(newToDoCard, subtask.description, subtask.id, subtask.status);
                });
            };

            toDoContainer.toDoContainer.appendChild(newToDoCard);
        });
    };
    if (storedCategories) {
        categories = JSON.parse(storedCategories);
    };
    populateCategoriesContainer();
};


export function appendSubtaskToToDoCard(toDoCard, description, id, status) {
    const subtask = createSubtask(description, id, status);
    const subtaskContainer = toDoCard.querySelector('.to-do-subtask');
    const subtaskList = toDoCard.querySelector('.to-do-subtask ul');
    subtaskList.appendChild(subtask);
    subtaskContainer.classList.remove('hidden');
};