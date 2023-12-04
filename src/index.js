
import { navbar, navbarMenuEvents, navbarToDoEvents } from './modules/navbarBottom';
import { loadToDoListFromLocalStorage } from './modules/toDoItem';
import './style.css';

// document.getElementById('navbar').addEventListener('click', e => {
//     console.log('test');
// });

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1500);
    }
});


navbar.todo.addEventListener('click', navbarToDoEvents);
loadToDoListFromLocalStorage();

navbar.menu.addEventListener('click', navbarMenuEvents);