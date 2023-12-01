import { hideToDoExcept, hightlightActiveFilter, tagBar } from "./tagBar";

export const bottomNav = {
    navbar: document.getElementById('navbar'),
    menu: document.getElementById('button-menu'),
    todo: document.getElementById('button-todo'),
    calendar: document.getElementById('button-calendar'),
};

bottomNav.todo.addEventListener('click', bottomNavToDoEvents);

export function bottomNavToDoEvents() {
    console.log('bottomnav');
    hightlightActiveFilter(tagBar.existingCategoryContainer.firstElementChild.firstElementChild);
    hideToDoExcept(tagBar.existingCategoryContainer.firstElementChild.firstElementChild.textContent);
};