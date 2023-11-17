import { createToDoCard, createToDoSubtask, appendSubtaskToToDoCard } from "./create-to-do-card";
import { populateCategoriesContainer } from "./event-handlers";

export let toDoList = [];
export let categories = ['Show All'];
export let toDoID = 0;
export const toDoContainer = document.getElementById('toDoContainer');

export function addNewToDo(toDoDescription, dueDate, category) {
    const newToDo = {
        id: toDoID,
        description: toDoDescription,
        creationDate: new Date(),
        subtasks: [],
        category: category,
        status: 'unchecked',
        dueDate,
    };
    toDoList.push(newToDo);
    const newToDoCard = createToDoCard(toDoID, toDoDescription);
    toDoID++;
    toDoContainer.appendChild(newToDoCard);
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

        toDoContainer.innerHTML = '';
        toDoList.forEach(toDo => {
            const newToDoCard = createToDoCard(toDo.id, toDo.description, toDo.status);
            toDo.subtasks.forEach(subtask => {
                appendSubtaskToToDoCard(newToDoCard, subtask);
            });

            toDoContainer.appendChild(newToDoCard);
        });
    };
    if (storedCategories) {
        categories = JSON.parse(storedCategories);
    };
    populateCategoriesContainer();
};