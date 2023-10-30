
const buttonSettings = document.getElementById('btn-settings');
const dialogSettings = document.getElementById('dialog-settings-tasks');

buttonSettings.addEventListener('click', e => {
});

function openDialog(elementName) {
    elementName.show();
};

function closeDialog(elementName) {
    elementName.close();
};