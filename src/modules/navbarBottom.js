import { closeModalOnOutsideClick } from "./eventHandlers";
import { hideToDoExcept, hightlightActiveFilter, tagBar } from "./tagBar";
import { newTaskButtonEventListeners, taskModal } from "./taskModal";
import { mainContent } from "./toDoContainer";

export const navbar = {
    menu: document.getElementById('button-menu'),
    todo: document.getElementById('button-todo'),
    calendar: document.getElementById('button-calendar'),
    sideMenu: document.getElementById('navbar-menu-dialog'),
    sideHeader: document.getElementById('navbar-menu-header'),
    sideItems: document.getElementById('navbar-menu-items'),
};

export function navbarToDoEvents() {
    hightlightActiveFilter(tagBar.existingCategoryContainer.firstElementChild.firstElementChild);
    hideToDoExcept(tagBar.existingCategoryContainer.firstElementChild.firstElementChild.textContent);
    mainContent.toDoContainer.scrollTop = 0;
    tagBar.cancelButton.click();
};

export function navbarMenuEvents(e) {
    navbar.sideMenu.showModal();
    navbar.sideMenu.classList.toggle('side-menu-open');
};