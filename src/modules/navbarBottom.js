import { hideToDoExcept, hightlightActiveFilter, tagBar } from "./tagBar";
import { mainContent } from "./toDoContainer";

export const navbar = {
    menu: document.getElementById('button-menu'),
    todo: document.getElementById('button-todo'),
    calendar: document.getElementById('button-calendar'),
};

export function navbarToDoEvents() {
    hightlightActiveFilter(tagBar.existingCategoryContainer.firstElementChild.firstElementChild);
    hideToDoExcept(tagBar.existingCategoryContainer.firstElementChild.firstElementChild.textContent);
    mainContent.toDoContainer.scrollTop = 0;
    tagBar.cancelButton.click();
};