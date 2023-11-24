
import { loadToDoListFromLocalStorage } from './modules/toDoItem';
import './style.css';

// addClickEventListener(settingsButton, settingsButtonClickHandler);

// addNewTaskButton.addEventListener('click', e => {
//     addNewTaskModal.showModal();
//     addClickEventListener(addNewTaskModal, modalCallbackWrapper);
// });

// addClickEventListener(addNewTaskButton, addNewTaskButtonClickHandler);

// const addNewCategorybtn = document.getElementById('addCategory');

// addClickEventListener(addNewCategorybtn, addNewCategoryButtonClickHandler);
// addClickEventListener(categoriesContainer, filterToDoItemsByCategory);



// taskModal.addNewTaskButton.addEventListener('click', newTaskButtonEventListeners);

loadToDoListFromLocalStorage();