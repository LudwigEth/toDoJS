import './style.css';

const buttonSettings = document.getElementById('btn-settings');
const dialogSettings = document.getElementById('dialog-settings-tasks');
const wrapperContent = document.getElementById('wrapper-content');

buttonSettings.addEventListener('click', e => {
    if (isDialogOpen(dialogSettings)) {
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
        closeDialog(elementName);
    };
};