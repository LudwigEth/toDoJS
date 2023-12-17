import { createScrollItem, createScrollItemDeleteSymbol } from "./createElements";
import { toggleClassName, dialogFadeOutAnimation } from "./eventHandlers";
import { addTaskModalEvents, newTaskButtonEventListeners, taskModal } from "./taskModal";
import { mainContent } from "./toDoContainer";
import { categories, saveToDoListToLocalStorage, toDoList } from "./toDoItem";

export const tagBar = {
    container: document.getElementById('tag-bar'),
    grower: document.getElementById('grower'),
    newCategoryContainer: document.querySelector('.addNewCategoryContainer'),
    input: document.getElementById('addNewCategoryInput'),
    cancelButton: document.getElementById('cancelNewCategoryButton'),
    submitButton: document.getElementById('submitNewCategoryButton'),
    existingCategoryContainer: document.getElementById('scrollItemContainer'),
    settingsButton: document.getElementById('btn-settings'),
    menuDots: document.getElementById('menuDots'),
    dueDateFilter: document.getElementById('due-date-filter'),
    dueDateScrollContainer: document.getElementById('dueDateScrollContainer'),
    get settingsDialog() { return document.getElementById('dialog-settings-tasks'); },
    get removeCategoryButton() { return document.getElementById('removeCategory'); },
    get addCategoryButton() { return document.getElementById('addCategory'); },
    get editCategoryButton() { return document.getElementById('editCategory'); },
};

tagBar.settingsButton.addEventListener('click', settingsButtonClickHandler);
tagBar.addCategoryButton.addEventListener('click', tagBarAddCategoryEvents);
tagBar.existingCategoryContainer.addEventListener('click', filterToDoItemsByCategory);
tagBar.removeCategoryButton.addEventListener('click', removeCategoryButtonEvents);
tagBar.editCategoryButton.addEventListener('click', editCategoryButtonEvents);
tagBar.dueDateFilter.firstElementChild.addEventListener('click', swipeDueDateFilterLeft);
tagBar.dueDateFilter.lastElementChild.addEventListener('click', swipeDueDateFilterRight);

let activeCategoryFilter = '';

export function settingsButtonClickHandler(e) {
    if (mainContent.main.classList.contains('blur')) {
        return;
    };
    toggleClassName(tagBar.menuDots, 'spread');
    if (tagBar.settingsDialog.open) {
        dialogFadeOutAnimation(tagBar.settingsDialog);
        tagBar.settingsDialog.close();
        e.stopPropagation();
        document.removeEventListener('click', closeSettingsDialogOnOutsideClick);
    } else {
        tagBar.settingsDialog.show();
        document.addEventListener('click', closeSettingsDialogOnOutsideClick);
    };
};

export function closeSettingsDialogOnOutsideClick(e) {
    if (e.target !== tagBar.settingsDialog && e.target !== tagBar.settingsButton) {
        toggleClassName(tagBar.menuDots, 'spread');
        dialogFadeOutAnimation(tagBar.settingsDialog);
        tagBar.settingsDialog.close();
        document.removeEventListener('click', closeSettingsDialogOnOutsideClick);
    };
};

export function populateCategoriesContainer() {
    categories.forEach(category => {
        const categoryItem = createScrollItem(category);
        tagBar.existingCategoryContainer.appendChild(categoryItem);
        if (category === 'All') {
            categoryItem.firstElementChild.classList.add('active-tag');
        };
    });
};

export function tagBarAddCategoryEvents() {
    if (!tagBar.newCategoryContainer.classList.contains('hidden')) {
        tagBar.input.focus();
        return;
    };
    toggleTagBar(confirmNewCategory, cancelNewCategory);
    setTimeout(() => {
        tagBar.input.focus();
    }, 400);
    tagBar.input.addEventListener('keydown', confirmNewCategoryOnKeyDown);
};

export function removeCategoryButtonEvents() {
    const scrollItemsArray = tagBar.existingCategoryContainer.querySelectorAll('.scroll-item');
    if (Array.from(scrollItemsArray).length > 1) {
        Array.from(scrollItemsArray).slice(1).forEach(item => {
            item.firstElementChild.lastElementChild.classList.toggle('hidden');
        });
    } else {
        return;
    };
    
    tagBar.existingCategoryContainer.addEventListener('click', tagBarRemoveCategoryOnClick);
    initTagBarSettingsEvents(cancelRemoveCategoryEvents);
};

export function initTagBarSettingsEvents(callback) {
    hightlightActiveFilter(tagBar.existingCategoryContainer.firstElementChild.firstElementChild);
    hideToDoExcept(tagBar.existingCategoryContainer.firstElementChild.firstElementChild.textContent);
    tagBar.existingCategoryContainer.removeEventListener('click', filterToDoItemsByCategory);
    tagBar.input.addEventListener('keydown', confirmNewCategoryOnKeyDown);
    taskModal.floatingButton.removeEventListener('click', newTaskButtonEventListeners);
    taskModal.floatingButton.addEventListener('click', callback);
    taskModal.floatingButton.classList.toggle('upAndRotate');
    mainContent.main.classList.toggle('blur');
};

export function undoTagBarSettingsEvents(callback) {
    taskModal.floatingButton.classList.toggle('downAndRotate');
    mainContent.main.classList.toggle('blur');
    tagBar.input.removeEventListener('keydown', confirmNewCategoryOnKeyDown);
    taskModal.floatingButton.removeEventListener('click', callback);
    taskModal.floatingButton.addEventListener('click', newTaskButtonEventListeners);
    tagBar.existingCategoryContainer.addEventListener('click', filterToDoItemsByCategory);
    setTimeout(() => {
        taskModal.floatingButton.classList.remove('upAndRotate', 'downAndRotate');
    }, 666);
};

export function cancelRemoveCategoryEvents() {
    const scrollItemsArray = tagBar.existingCategoryContainer.querySelectorAll('.scroll-item');
    if (Array.from(scrollItemsArray).length > 1) {
        Array.from(scrollItemsArray).slice(1).forEach(item => {
        item.firstElementChild.lastElementChild.classList.toggle('hidden');
        });
    };
    tagBar.existingCategoryContainer.removeEventListener('click', tagBarRemoveCategoryOnClick);
    undoTagBarSettingsEvents(cancelRemoveCategoryEvents);
};

export function cancelEditCategoryEvents() {
    tagBar.existingCategoryContainer.removeEventListener('click', tagBarEditCategoryOnClick);
    undoTagBarSettingsEvents(cancelEditCategoryEvents);
};

export function tagBarRemoveCategoryOnClick(e) {
    if (tagBar.existingCategoryContainer.contains(e.target) && e.target !== tagBar.existingCategoryContainer) {
        const itemToRemove = e.target.closest('.scroll-item');
        const categoryToRemove = itemToRemove.firstElementChild.firstElementChild.textContent;
        let index = categories.indexOf(categoryToRemove);
        if (index > 0) {
            categories.splice(index, 1);
        };
        itemToRemove.remove();
        toDoList.forEach(todo => {
            if (todo.category === categoryToRemove) {
                todo.category = 'All';
            };
        });
        if (categories.length === 1) {
            taskModal.floatingButton.click();
        };
        saveToDoListToLocalStorage();
    };
};

export function tagBarEditCategoryOnClick(e) {
    if (tagBar.existingCategoryContainer.contains(e.target) && e.target !== tagBar.existingCategoryContainer) {
        const itemToEdit = e.target.closest('.scroll-item');
        const categoryToEdit = itemToEdit.firstElementChild.firstElementChild.textContent;
        let index = categories.indexOf(categoryToEdit);
        if (index === 0) return;
        tagBar.input.value = categoryToEdit;
        tagBar.submitButton.dataset.edit = categoryToEdit;
        toggleTagBar(confirmEditCategory, cancelEditCategory);
    };
};

export function editCategoryButtonEvents() {
    if (categories.length === 1) return;
    initTagBarSettingsEvents(cancelEditCategoryEvents);
    tagBar.existingCategoryContainer.addEventListener('click', tagBarEditCategoryOnClick);
};


export function resetNewCategoryInput() {
    tagBar.input.value = '';
};

export function cancelNewCategory() {
    resetNewCategoryInput();
    toggleTagBar(confirmNewCategory, cancelNewCategory);
};

export function confirmNewCategory() {
    const inputValue = tagBar.input.value.trim();
    if (inputValue === '' || categories.includes(inputValue)) {
        resetNewCategoryInput();
        toggleTagBar(confirmNewCategory, cancelNewCategory);
    } else {
        categories.push(inputValue);
        document.getElementById('scrollItemContainer').appendChild(createScrollItem(categories[categories.length -1]));
        resetNewCategoryInput();
        toggleTagBar(confirmNewCategory, cancelNewCategory);
        saveToDoListToLocalStorage();
    };
};

export function cancelEditCategory() {
    resetNewCategoryInput();
    toggleTagBar(confirmEditCategory, cancelEditCategory);
};

export function confirmEditCategory() {
    const scrollItemsArray = Array.from(tagBar.existingCategoryContainer.querySelectorAll('.scroll-item'));
    toDoList.forEach(todo => {
        if (todo.category === tagBar.submitButton.dataset.edit) {
            todo.category = tagBar.input.value.trim();
        };
    });
    for (let i = 1; i <= categories.length - 1; i++) {
        if (categories[i] === tagBar.submitButton.dataset.edit) {
            categories[i] = tagBar.input.value.trim();
        };
    };
    scrollItemsArray.forEach(scrollItem => {
        if (scrollItem.firstElementChild.firstElementChild.textContent === tagBar.submitButton.dataset.edit) {
            scrollItem.firstElementChild.firstElementChild.textContent = tagBar.input.value;
        };
    });
    console.log(tagBar.input.value.trim(), tagBar.submitButton.dataset.edit);
    console.log(categories);
    saveToDoListToLocalStorage();
    resetNewCategoryInput();
    toggleTagBar(confirmEditCategory, cancelEditCategory);
};

export function confirmNewCategoryOnKeyDown(e) {
    if (e.key === 'Enter' && document.activeElement === tagBar.input) {
        tagBar.submitButton.click();
    };
};

export function filterToDoItemsByCategory(e) {
    if(tagBar.existingCategoryContainer.contains(e.target) && e.target !== tagBar.existingCategoryContainer) {
        const filterButton = e.target.closest('.scroll-item').firstElementChild;
        hightlightActiveFilter(filterButton);
        hideToDoExcept(filterButton.firstElementChild.textContent);
    };
};

export function hightlightActiveFilter(newFilter) {
    if (activeCategoryFilter === '') {
        activeCategoryFilter = tagBar.existingCategoryContainer.firstElementChild.firstElementChild;
    };
    activeCategoryFilter.classList.toggle('active-tag');
    newFilter.classList.toggle('active-tag');
    activeCategoryFilter = newFilter;
};

export function hideToDoExcept(categoryToFilterBy) {
    const toDoCards = mainContent.toDoContainer.getElementsByClassName('to-do-card');
    Array.from(toDoCards).forEach(card => {
        const currentCardCategory = toDoList.find(todo => todo.id === parseInt(card.dataset.taskId)).category;
        if (categoryToFilterBy === categories[0]) {
            card.classList.remove('hidden');
            return;
        };
        if (currentCardCategory !== categoryToFilterBy) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        };
    });
};

export function toggleTagBar(submitEvent, cancelEvent) {
    toggleClassName(tagBar.grower, 'grow');
    if (tagBar.newCategoryContainer.classList.contains('hidden')) {
        setTimeout(() => {
            toggleClassName(tagBar.newCategoryContainer, 'hidden');
            toggleClassName(tagBar.existingCategoryContainer, 'hidden');
            toggleClassName(tagBar.grower, 'grow');
        }, 330);
        tagBar.submitButton.addEventListener('click', submitEvent);
        tagBar.cancelButton.addEventListener('click', cancelEvent);
        tagBar.input.addEventListener('keydown', confirmNewCategoryOnKeyDown);
        setTimeout(() => {
            tagBar.input.focus();
        }, 500);
    } else {
        setTimeout(() => {
            toggleClassName(tagBar.newCategoryContainer, 'hidden');
            toggleClassName(tagBar.existingCategoryContainer, 'hidden');
            toggleClassName(tagBar.grower, 'grow');
        }, 330);
        tagBar.submitButton.removeEventListener('click', submitEvent);
        tagBar.cancelButton.removeEventListener('click', cancelEvent);
        tagBar.input.removeEventListener('keydown', confirmNewCategoryOnKeyDown);
    };
};

export function updateDueDateFilterArrows() {
    const maxScrollLeft = tagBar.dueDateScrollContainer.scrollWidth - tagBar.dueDateScrollContainer.clientWidth;
    tagBar.dueDateFilter.firstElementChild.style.opacity = tagBar.dueDateScrollContainer.scrollLeft > 0 ? '1' : '0.5';
    tagBar.dueDateFilter.lastElementChild.style.opacity = tagBar.dueDateScrollContainer.scrollLeft < maxScrollLeft ? '1' : '0.5';
};

export function swipeDueDateFilterLeft() {
    tagBar.dueDateScrollContainer.scrollBy({
        left: -tagBar.dueDateScrollContainer.clientWidth,
        behavior: 'smooth',
    });
    setTimeout(() => {
        updateDueDateFilterArrows();
    }, 500);
};

export function swipeDueDateFilterRight() {
    tagBar.dueDateScrollContainer.scrollBy({
        left: tagBar.dueDateScrollContainer.clientWidth,
        behavior: 'smooth',
    });
    setTimeout(() => {
        updateDueDateFilterArrows();
    }, 500);
};