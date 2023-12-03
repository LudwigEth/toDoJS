
import { navbar, navbarToDoEvents } from './modules/navbarBottom';
import { loadToDoListFromLocalStorage } from './modules/toDoItem';
import './style.css';

// document.getElementById('navbar').addEventListener('click', e => {
//     console.log('test');
// });

navbar.todo.addEventListener('click', navbarToDoEvents);
loadToDoListFromLocalStorage();