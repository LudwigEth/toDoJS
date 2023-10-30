import './style.css';

const buttonSettings = document.getElementById('btn-settings');
const dialogSettings = document.getElementById('dialog-settings-tasks');

buttonSettings.addEventListener('click', e => {
    if (isDialogOpen(dialogSettings)) {
        closeDialog(dialogSettings);
    } else {
        openDialog(dialogSettings);
    };
});

dialogSettings.addEventListener('click', e => {
    const dialogDimensions = dialogSettings.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialogSettings.close();
    };
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

