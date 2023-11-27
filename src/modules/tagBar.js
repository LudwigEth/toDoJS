import { createScrollItem } from "./createElements";
import { toggleClassName, dialogFadeOutAnimation } from "./eventHandlers";
import { addTaskModalEvents, taskModal } from "./taskModal";
import { toDoContainer } from "./toDoContainer";
import { categories, saveToDoListToLocalStorage, toDoList } from "./toDoItem";

export const tagBar = {
    grower: document.getElementById('grower'),
    newCategoryContainer: document.querySelector('.addNewCategoryContainer'),
    input: document.getElementById('addNewCategoryInput'),
    cancelButton: document.getElementById('cancelNewCategoryButton'),
    submitButton: document.getElementById('submitNewCategoryButton'),
    existingCategoryContainer: document.getElementById('scrollItemContainer'),
    settingsButton: document.getElementById('btn-settings'),
    menuDots: document.getElementById('menuDots'),
    get settingsDialog() { return document.getElementById('dialog-settings-tasks'); },
    get removeCategoryButton() { return document.getElementById('removeCategory'); },
    get addCategoryButton() { return document.getElementById('addCategory'); },
    get editCategoryButton() { return document.getElementById('editCategory'); },
};

tagBar.settingsButton.addEventListener('click', settingsButtonClickHandler);
tagBar.addCategoryButton.addEventListener('click', tagBarAddCategoryEvents);
tagBar.existingCategoryContainer.addEventListener('click', filterToDoItemsByCategory);

export function settingsButtonClickHandler(e) {
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
    });
};

export function tagBarAddCategoryEvents() {
    if (!tagBar.newCategoryContainer.classList.contains('hidden')) {
        tagBar.input.focus();
        return;
    };
    toggleTagBar();
    setTimeout(() => {
        tagBar.input.focus();
    }, 400);
    tagBar.input.addEventListener('keydown', confirmNewCategoryOnKeyDown);
};

export function resetNewCategoryInput() {
    tagBar.input.value = '';
};

export function cancelNewCategory() {
    resetNewCategoryInput();
    toggleTagBar();
};

export function confirmNewCategory() {
    const inputValue = tagBar.input.value.trim();
    if (inputValue === '' || categories.includes(inputValue)) {
        resetNewCategoryInput();
        toggleTagBar();
    } else {
        categories.push(inputValue);
        document.getElementById('scrollItemContainer').appendChild(createScrollItem(categories[categories.length -1]));
        resetNewCategoryInput();
        toggleTagBar();
        saveToDoListToLocalStorage();
    };
    if (taskModal.dialog.dataset.tags === 'none') {
        taskModal.dialog.showModal();
        addTaskModalEvents();
    };
};

export function confirmNewCategoryOnKeyDown(e) {
    if (e.key === 'Enter' && document.activeElement === tagBar.input) {
        tagBar.submitButton.click();
    };
};

export function filterToDoItemsByCategory(e) {
    if (e.target.tagName === 'BUTTON') {
        const categoryToFilterBy = e.target.textContent;
        e.stopPropagation();
        hideToDoExcept(categoryToFilterBy);
    };
};

export function hideToDoExcept(categoryToFilterBy) {
    const toDoCards = toDoContainer.toDoContainer.getElementsByClassName('to-do-card');
    Array.from(toDoCards).forEach(card => {
        const currentCardCategory = toDoList[parseInt(card.dataset.taskId)].category;
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

export function toggleTagBar() {
    toggleClassName(tagBar.grower, 'grow');
    if (tagBar.newCategoryContainer.classList.contains('hidden')) {
        setTimeout(() => {
            toggleClassName(tagBar.newCategoryContainer, 'hidden');
            toggleClassName(tagBar.existingCategoryContainer, 'hidden');
            toggleClassName(tagBar.grower, 'grow');
        }, 330);
        tagBar.submitButton.addEventListener('click', confirmNewCategory);
        tagBar.cancelButton.addEventListener('click', cancelNewCategory);
        tagBar.input.addEventListener('keydown', confirmNewCategoryOnKeyDown);
    } else {
        setTimeout(() => {
            toggleClassName(tagBar.newCategoryContainer, 'hidden');
            toggleClassName(tagBar.existingCategoryContainer, 'hidden');
            toggleClassName(tagBar.grower, 'grow');
        }, 330);
        tagBar.submitButton.removeEventListener('click', confirmNewCategory);
        tagBar.cancelButton.removeEventListener('click', cancelNewCategory);
        tagBar.input.removeEventListener('keydown', confirmNewCategoryOnKeyDown);
    };
};