import { createCategoryButton, createScrollItem, createSubtaskItemContainer } from "./createElements";
import { closeModalOnOutsideClick, getChildTextContent } from "./eventHandlers";
import { confirmNewCategory, initTagBarSettingsEvents, resetNewCategoryInput, tagBar, toggleTagBar, undoTagBarSettingsEvents } from "./tagBar";
import { deleteToDoButtonEvents, mainContent, removeExistingSubtask, submitEdit } from "./toDoContainer";
import { addNewSubtaskObject, addNewToDo, categories, saveToDoListToLocalStorage, toDoList } from "./toDoItem";

export const taskModal = {
    get floatingButton() { return document.getElementById('addNewTaskButton'); },
    get dialog() { return document.getElementById('addNewTaskModal'); },
    get form() { return document.getElementById('newToDoForm'); },
    get mainTask() { return document.getElementById('newToDoDescription'); },
    get subtasksContainer() { return document.getElementById('newSubtasksContainer'); },
    get moreSubtasksButtonContainer() { return document.querySelector('.moreSubtasksButtonContainer'); },
    get moreSubtasksButton() { return document.getElementById('moreSubtasksButton'); },
    get categoryButton() { return document.getElementById('btn-addCategoryTag'); },
    get dueDateButton() { return document.getElementById('btn-addDueDate'); },
    get subtaskButton() { return document.getElementById('btn-addSubtask'); },
    get submitButton() { return document.getElementById('btn-submitToDo'); },
    get categoriesDialog() { return document.getElementById('dialog-categories'); },
    get categoriesWrapper() { return document.getElementById('categoriesModal'); },
    get subtaskItems() { return document.getElementsByClassName('newSubtaskItem'); },
    get deleteButton() { return document.getElementById('btn-removeToDo'); },
    get deleteDialog() { return document.getElementById('dialog-remove-todo'); },
    get taskToDelete() { return document.getElementById('taskToDelete'); },
    get confirmRemoval() { return document.getElementById('btn-confirm-removal'); },
    get declineRemoval() { return document.getElementById('btn-decline-removal'); },
};

taskModal.floatingButton.addEventListener('click', newTaskButtonEventListeners);

export function newTaskButtonEventListeners(e) {
    taskModal.deleteButton.classList.add('hidden');
    taskModal.dialog.showModal();
    addTaskModalEvents();
    taskModal.mainTask.focus();
    console.log('newtaskbuttoneventlistener');
};

export function addTaskModalEvents() {
    document.body.classList.add('no-scroll');
    mainContent.main.classList.add('blur');
    taskModal.dialog.addEventListener('click', closeModalOnOutsideClick);
    taskModal.dialog.addEventListener('keydown', keyDownEventsTaskModal);
    taskModal.submitButton.addEventListener('click', submitNewToDo);
    taskModal.categoryButton.addEventListener('click', categoryButtonEvents);
    taskModal.subtaskButton.addEventListener('click', subtaskButtonEvents);
    taskModal.moreSubtasksButton.addEventListener('click', addNewSubtaskItem);
    console.log('addtaskmodalevents');
};

export function removeTaskModalEvents() {
    taskModal.dialog.removeEventListener('click', closeModalOnOutsideClick);
    taskModal.dialog.removeEventListener('keydown', keyDownEventsTaskModal);
    taskModal.submitButton.removeEventListener('click', submitNewToDo);
    taskModal.submitButton.removeEventListener('click', submitEdit);
    taskModal.deleteButton.removeEventListener('click', deleteToDoButtonEvents);
    taskModal.categoryButton.removeEventListener('click', categoryButtonEvents);
    taskModal.subtaskButton.removeEventListener('click', subtaskButtonEvents);
    taskModal.moreSubtasksButton.removeEventListener('click', addNewSubtaskItem);
    taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
    taskModal.deleteButton.removeEventListener('click', deleteToDoButtonEvents);
    console.log('removetaskmodalevents');
};

export function resetTaskModal() {
    document.body.classList.remove('no-scroll');
    mainContent.main.classList.remove('blur');
    taskModal.mainTask.value = '';
    taskModal.categoryButton.textContent = 'category';
    Array.from(taskModal.subtaskItems).forEach(item => {
        const deleteButton = item.children[1];
        deleteButton.removeEventListener('click', removeSubtaskContainer);
        taskModal.subtasksContainer.removeChild(item);
    });
    taskModal.moreSubtasksButtonContainer.classList.add('hidden');
    taskModal.moreSubtasksButtonContainer.removeEventListener('click', addNewSubtaskItem);
    console.log('resetevent');
};

export function removeSubtaskContainer(e) {
    const button = e.currentTarget;

    if (taskModal.subtasksContainer.innerHTML === '') {
        taskModal.moreSubtasksButtonContainer.classList.add('hidden');
    };
    button.removeEventListener('click', removeSubtaskContainer);
    e.target.closest('.newSubtaskItem').remove();
    console.log('removesubevents');
};

export function submitNewToDo() {
    const toDoDescription = taskModal.mainTask.value.trim();
    let dueDate;
    let category = 'All';

    if (!toDoDescription) {
        removeTaskModalEvents();
        resetTaskModal();
        taskModal.dialog.close();
        return;
    };
    
    if (taskModal.categoryButton.textContent === 'category' ||
        !categories.includes(taskModal.categoryButton.textContent)) {
            category = 'All';
    } else {
        category = taskModal.categoryButton.textContent;
    };

    addNewToDo(toDoDescription, dueDate, category, createSubtasksArray());
    resetTaskModal();
    removeTaskModalEvents();
    taskModal.dialog.close();
    console.log('subtminewtodoevents');
    console.log(toDoList);
};

export function createSubtasksArray() {
    const subtaskItemsArray = taskModal.subtasksContainer.querySelectorAll('.newSubtaskItem');
    let subtasks = [];
    let subtaskId = 0;
    if (taskModal.subtasksContainer.innerHTML !== '') {
        Array.from(subtaskItemsArray).forEach(item => {
            if (item.firstElementChild.value.trim() !== '') {
                const newSubtasksObject = addNewSubtaskObject(item.firstElementChild.value.trim(), subtaskId);
                subtasks.push(newSubtasksObject);
                subtaskId++;
            };
        });
    };
    return subtasks;
};

export function subtaskButtonEvents() {
    taskModal.moreSubtasksButtonContainer.classList.remove('hidden');
    addNewSubtaskItem();
    console.log('subtaskbuttnevents');
};

export function addNewSubtaskItem() {
    taskModal.subtasksContainer.appendChild(createSubtaskItemContainer());
    taskModal.subtasksContainer.lastElementChild.firstElementChild.focus();
    console.log('addnewsubtaskitemevent');
};

export function categoryButtonEvents(e) {
    const buttonDimension = taskModal.categoryButton.getBoundingClientRect();
    taskModal.categoriesDialog.style.position = 'absolute';
    taskModal.categoriesDialog.style.left = `${buttonDimension.left}px`;
    taskModal.categoriesDialog.style.top = `calc(${buttonDimension.bottom}px + 0.5rem)`;
    populateCategoriesDialog();
    removeTaskModalEvents();
    taskModal.categoriesDialog.classList.add('fade-in');
    taskModal.categoriesDialog.showModal();
    taskModal.categoriesDialog.addEventListener('click', categoryDialogEvents);
    taskModal.categoriesDialog.addEventListener('keydown', keyDownEventsCategoriesDialog);
    console.log('Categorybuttonevents');
};

export function categoryDialogEvents(e) {
    e.stopPropagation();
    const modalDimension = taskModal.categoriesDialog.getBoundingClientRect();
    if (
        e.clientX < modalDimension.left ||
        e.clientX > modalDimension.right ||
        e.clientY < modalDimension.top ||
        e.clientY > modalDimension.bottom
    ) {
        taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
        taskModal.categoriesDialog.removeEventListener('keydown', keyDownEventsCategoriesDialog);
        taskModal.categoriesDialog.close();
        addTaskModalEvents();
        return;
    };
    if (getChildTextContent(taskModal.categoriesDialog, 'BUTTON', e)) {
        if (getChildTextContent(taskModal.categoriesDialog, 'BUTTON', e) === 'Add Category') {
            taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
            taskModal.categoriesDialog.removeEventListener('keydown', keyDownEventsCategoriesDialog);
            taskModal.categoriesDialog.close();
            taskModal.dialog.removeEventListener('click', closeModalOnOutsideClick);
            taskModal.dialog.close();
            initTagBarSettingsEvents(backToTaskModal);
            toggleTagBar(confirmAddCategory, cancelAddCategory);
        };
        taskModal.categoryButton.textContent = getChildTextContent(taskModal.categoriesDialog, 'BUTTON', e);
        taskModal.categoriesDialog.close();
        taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
        taskModal.categoriesDialog.removeEventListener('keydown', keyDownEventsCategoriesDialog);
        addTaskModalEvents();
        console.log('categorydialogevents1');
    };
    console.log('categorydialogevents2');
};

export function confirmAddCategory() {
    const inputValue = tagBar.input.value.trim();
    if (inputValue === '' || categories.includes(inputValue)) {
        resetNewCategoryInput();
        backToTaskModal();
    } else {
        categories.push(inputValue);
        document.getElementById('scrollItemContainer').appendChild(createScrollItem(categories[categories.length -1]));
        resetNewCategoryInput();
        saveToDoListToLocalStorage();
        backToTaskModal();
    };
};

export function cancelAddCategory() {
    backToTaskModal();
};

export function backToTaskModal() {
    resetNewCategoryInput();
    toggleTagBar(confirmAddCategory, cancelAddCategory);
    undoTagBarSettingsEvents(backToTaskModal);
    if (categories.length > 1) {
        taskModal.categoryButton.textContent = categories[1];
    };
    setTimeout(() => {
        taskModal.dialog.showModal();
        taskModal.dialog.addEventListener('click', closeModalOnOutsideClick);
    }, 666);
};

export function populateCategoriesDialog() {
    while (taskModal.categoriesWrapper.firstChild) {
        taskModal.categoriesWrapper.removeChild(taskModal.categoriesWrapper.firstChild);
    };
    for (let i = 1; i < categories.length; i++) {
        taskModal.categoriesWrapper.appendChild(createCategoryButton(categories[i]));
    };
    if (taskModal.categoriesWrapper.innerHTML === '') {
        taskModal.categoriesWrapper.appendChild(createCategoryButton('Add Category'))
    };
};

export function keyDownEventsTaskModal(e) {
    if (e.key === 'Escape') {
        removeTaskModalEvents();
        resetTaskModal();
    };
    if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        taskModal.dialog.removeEventListener('click', closeModalOnOutsideClick);
        if (document.activeElement === taskModal.mainTask && taskModal.subtasksContainer.innerHTML === '') {
            taskModal.submitButton.click();
            console.log('submitted');
        };
        if (document.activeElement.classList.contains('newSubtaskInput')) {
            if (document.activeElement === taskModal.subtasksContainer.lastElementChild.firstElementChild &&
                taskModal.subtasksContainer.lastElementChild.firstElementChild.value !== '') {
                taskModal.moreSubtasksButton.click();
            } else {
                taskModal.subtasksContainer.lastElementChild.firstElementChild.focus();
            };
        };
        if (document.activeElement === taskModal.categoryButton ||
            document.activeElement === taskModal.subtaskButton  ||
            document.activeElement === taskModal.submitButton    
        ) {
            document.activeElement.click();
        };
        taskModal.dialog.addEventListener('click', closeModalOnOutsideClick);
    };
};

export function keyDownEventsCategoriesDialog(e) {
    if (e.key === 'Escape') {
        e.preventDefault();
        taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
        taskModal.categoriesDialog.removeEventListener('keydown', keyDownEventsCategoriesDialog);
        taskModal.categoriesDialog.close();
        addTaskModalEvents();
    };
    if (e.key === 'Enter' && document.activeElement.tagName === 'BUTTON' && taskModal.categoriesDialog.contains(document.activeElement)) {
        if (taskModal.categoriesDialog.contains(document.activeElement)) {
            e.preventDefault();
            e.stopPropagation();
            taskModal.categoryButton.textContent = document.activeElement.textContent;
            taskModal.categoriesDialog.close();
            console.log('should close');
            addTaskModalEvents();
            taskModal.categoriesDialog.removeEventListener('click', categoryDialogEvents);
            taskModal.categoriesDialog.removeEventListener('keydown', keyDownEventsCategoriesDialog);
        };
    };
};