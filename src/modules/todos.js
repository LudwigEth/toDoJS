import { createToDoCard, createToDoSubtask, appendSubtaskToToDoCard } from "./create-to-do-card";

export let toDoList = [];
export let categoryTags = [];
export let toDoID = 0;
export const toDoContainer = document.getElementById('toDoContainer');

export function addNewToDo(toDoDescription, dueDate, toDoID) {
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

    const newToDoCard = createToDoCard(toDoID, toDoDescription);

    toDoContainer.appendChild(newToDoCard);
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

        toDoContainer.innerHTML = '';
        toDoList.forEach(toDo => {
            const newToDoCard = createToDoCard(toDo.id, toDo.description);
            toDo.subtasks.forEach(subtask => {
                appendSubtaskToToDoCard(newToDoCard, subtask);
            });

            toDoContainer.appendChild(newToDoCard);
        });
    };
};