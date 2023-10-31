
const settingsButton = document.getElementById('btn-settings');
const settingsDialog = document.getElementById('dialog-settings-tasks');


function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
};

function removeClickEventListener(element, callback) {
    element.removeEventListener('click', callback);
};

function isDialogOpen(dialogElement) {
    return getComputedStyle(dialogElement).display !== 'none';
};

function dialogFadeOutAnimation(dialogElement) {
    dialogElement.classList.add('dialog-fade-out');
    setTimeout(() => {
        dialogElement.classList.remove('dialog-fade-out');
    }, 300);
};



function outsideDialogClickHandler(event, dialogElement, openDialogButton) {
    if (event.target !== dialogElement && event.target !== openDialogButton) {
        dialogFadeOutAnimation(dialogElement);
        dialogElement.close();
        removeClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
};

function settingsButtonClickHandler(event) {
    if (isDialogOpen(settingsDialog)) {
        dialogFadeOutAnimation(settingsDialog);
        settingsDialog.close();
        event.stopPropagation();
        removeClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
    if (!isDialogOpen(settingsDialog)) {
        settingsDialog.show();
        addClickEventListener(document, documentOpenSettingsDialogClickHandler);
    };
};

function documentOpenSettingsDialogClickHandler(event) {
    outsideDialogClickHandler(event, settingsDialog, settingsButton);
};

addClickEventListener(settingsButton, settingsButtonClickHandler);