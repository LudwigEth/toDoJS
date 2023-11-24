import { removeTaskModalEvents, resetTaskModal, taskModal } from "./taskModal";

export function toggleClassName(element, className) {
    element.classList.toggle(className);
};

export function clickIfActive(elementToClick, elementToBeActive) {
    if (document.activeElement === elementToBeActive) {
        elementToClick.click();
    };
};

export function isDialogOpen(dialogElement) {
    return getComputedStyle(dialogElement).display !== 'none';
};

export function dialogFadeOutAnimation(dialogElement) {
    dialogElement.classList.add('dialog-fade-out');
    setTimeout(() => {
        dialogElement.classList.remove('dialog-fade-out');
    }, 300);
};

export function closeModalOnOutsideClick(e) {
    const modal = this;
    const modalDimension = modal.getBoundingClientRect();
    if (
        e.clientX < modalDimension.left ||
        e.clientX > modalDimension.right ||
        e.clientY < modalDimension.top ||
        e.clientY > modalDimension.bottom
    ) {
        modal.close();
        resetTaskModal();
        if (modal === taskModal.dialog) {
            removeTaskModalEvents();
        };
    };
    console.log('close modal');
};

/**
 * Retrieves the text content of a specified child element within a parent element.
 * @param {Element} parentElement - The DOM element reference which contains the child element.
 * @param {string} childElementName - The tag name of the child element (e.g., 'DIV', 'P').
 * @param {Event} e - The event object.
 * @returns {string} The text content of the child element if it exists within the parent element; otherwise, undefined.
 */
export function getChildTextContent(parentElement, childElementName, e) {
    if (e.target.tagName === childElementName && parentElement.contains(e.target)) {
        return e.target.textContent;
    } else {
        return false;
    };
};