
import { navbar, navbarMenuEvents, navbarToDoEvents } from './modules/navbarBottom';
import { closeSideMenuOnOutsideClick, collapseColor, collapseLanguage, darkmode, lightmode, setUserColorTheme, sideMenu, toggleCollapse, toggleDarkMode, userColorTheme } from './modules/sideMenu';
import { loadToDoListFromLocalStorage } from './modules/toDoItem';
import './style.css';

// document.getElementById('navbar').addEventListener('click', e => {
//     console.log('test');
// });

export const userConfig = {
    primaryColor: 'rgb(255, 209, 220',
    // primaryColorDomElem: sideMenu.primaryColorChoice.querySelector('.primary-pink'),
    secondaryColor: 'rgb(184, 216, 184',
    // secondaryColorDomElem: sideMenu.secondaryColorChoice.querySelector('.primary-green'),
    darkMode: false,
};

export function saveUserConfigToLocalStorage() {
    localStorage.setItem('userConfig', JSON.stringify(userConfig));
};

export function getUserConfigFromLocalStorage() {
    const storedConfig = localStorage.getItem('userConfig');
    if (storedConfig) {
        const storedUserConfig = JSON.parse(storedConfig);
        userConfig.primaryColor = storedUserConfig.primaryColor;
        userConfig.secondaryColor = storedUserConfig.secondaryColor;
        userConfig.darkMode = storedUserConfig.darkMode;
    } else {
        return;
    };
};

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleDarkModeChange(e) {
    if (e.matches) {
        darkmode();
        userConfig.darkMode = true;
    } else {
        lightmode();
        userConfig.darkMode = false;
    };
    saveUserConfigToLocalStorage();
};

darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

handleDarkModeChange(darkModeMediaQuery);


window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1500);
    };
});

sideMenu.menu.addEventListener('click', closeSideMenuOnOutsideClick);
sideMenu.darkmodeButton.addEventListener('click', toggleDarkMode);
sideMenu.primaryColorChoice.addEventListener('click', userColorTheme);
sideMenu.secondaryColorChoice.addEventListener('click', userColorTheme);
sideMenu.dropdownLanguage.addEventListener('click', toggleCollapse);
sideMenu.dropdownColor.addEventListener('click', toggleCollapse);

navbar.todo.addEventListener('click', navbarToDoEvents);
loadToDoListFromLocalStorage();
getUserConfigFromLocalStorage();
setUserColorTheme(userConfig.primaryColor, userConfig.secondaryColor);

navbar.menu.addEventListener('click', navbarMenuEvents);
console.log(userConfig);