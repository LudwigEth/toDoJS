const buttonSettings = document.getElementById('btn-settings');
const dialogSettings = document.getElementById('dialog-settings-tasks');
const wrapperContent = document.getElementById('wrapper-content');

buttonSettings.addEventListener('click', e => {
    if (isDialogOpen(dialogSettings)) {
        fadeOut(dialogSettings);
        closeDialog(dialogSettings);
    } else {
        openDialog(dialogSettings);
    };
});

document.addEventListener('click', e => {
    handleOutsideClick(e, dialogSettings);
});

function openDialog(elementName) {
    elementName.show();
};

function closeDialog(elementName) {
    elementName.close();
};

function isDialogOpen(elementName) {
    return getComputedStyle(elementName).display !== 'none';
};

function handleOutsideClick(e, elementName) {
    if (e.target !== elementName && e.target !== buttonSettings) {
        fadeOut(elementName);
        closeDialog(elementName);
    };
};

function fadeOut(elementName) {
    elementName.classList.add('dialog-fade-out');
    setTimeout(() => {
        elementName.classList.remove('dialog-fade-out');
    }, 200);
};