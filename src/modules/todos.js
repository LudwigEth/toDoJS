import { createToDoCard, createToDoSubtask, appendSubtaskToToDoCard } from "./create-to-do-card";

export const toDoList = [];
export const categoryTags = [];
export let toDoID = 0;

export function addNewToDo(toDoDescription, dueDate) {
    const newToDo = {
        id: toDoID,
        description: toDoDescription,
        creationDate: new Date(),
        subtasks: [],
        tags: [],
        dueDate,
    };
    toDoList.push(newToDo);
    toDoID++;

    const newToDoCard = createToDoCard(toDoDescription);

    saveToDoListToLocalStorage();
};

export function saveToDoListToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

export function loadToDoListFromLocalStorage() {
    const storedToDoList = localStorage.getItem('toDoList');
    if (storedToDoList) {
        toDoList = JSON.parse(storedToDoList);
        toDoID = Math.max(...toDoList.map(item => item.id)) + 1;
    };
};

loadToDoListFromLocalStorage();