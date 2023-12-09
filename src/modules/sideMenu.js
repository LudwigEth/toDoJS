import { saveUserConfigToLocalStorage, userConfig } from "..";
import { tagBar } from "./tagBar";

export const sideMenu = {
    menu: document.getElementById('navbar-menu-dialog'),
    header: document.getElementById('navbar-menu-header'),
    items: document.getElementById('navbar-menu-items'),
    dropdownLanguage: document.getElementById('dropdown-language'),
    dropdownColor: document.getElementById('dropdown-color'),
    sectionLanguage: document.getElementById('language-selection'),
    sectionColorTheme: document.getElementById('color-theme'),
    primaryColorChoice: document.getElementById('primary-color-choice'),
    secondaryColorChoice: document.getElementById('secondary-color-choice'),
    darkmodeButton: document.getElementById('darkmode'),
};

export function toggleCollapse(e) {
    e.target.closest('.dropdown').querySelector('section').classList.toggle('section-open');
};

export function closeSideMenuOnOutsideClick(e) {
    const modal = this;
    const modalDimension = modal.getBoundingClientRect();
    if (
        e.clientX < modalDimension.left ||
        e.clientX > modalDimension.right ||
        e.clientY < modalDimension.top ||
        e.clientY > modalDimension.bottom
    ) {
        modal.classList.toggle('side-menu-open');
        setTimeout(() => {
            modal.close();
        }, 150);
    };
};

const white = '#ffffff';
const black = '#000000';


export function setUserColorTheme(primaryColor = '#ffd1dc', secondaryColor = '#b8d8be') {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    // if (userConfig.primaryColorDomElem !== null && userConfig.secondaryColorDomElem !== null) {
    //     userConfig.primaryColorDomElem.classList.toggle('color-chosen');
    //     userConfig.secondaryColorDomElem.classList.toggle('color-chosen');
    //     console.log('awooga');
    // };
    if (userConfig.darkMode === false) {
        lightmode();
    } else {
        darkmode();
    };
};

export function toggleDarkMode() {
    document.documentElement.classList.add('color-transition');
    if (userConfig.darkMode === false) {
        darkmode();
        userConfig.darkMode = true;
    } else {
        lightmode();
        userConfig.darkMode = false;
    }
    saveUserConfigToLocalStorage();
    setTimeout(() => {
        document.documentElement.classList.remove('color-transition');
    }, 100);
};

function darkmode() {
    document.documentElement.style.setProperty('--primary-text-color', white);
    document.documentElement.style.setProperty('--secondary-text-color', black);
    document.documentElement.style.setProperty('--background-color-primary', '#222528');
    document.documentElement.style.setProperty('--background-color-secondary', '#323538');
    document.documentElement.style.setProperty('--checkbox-color', '#dddddd');
};

function lightmode() {
    document.documentElement.style.setProperty('--primary-text-color', black);
    document.documentElement.style.setProperty('--secondary-text-color', white);
    document.documentElement.style.setProperty('--background-color-primary', '#fafafa');
    document.documentElement.style.setProperty('--background-color-secondary', '#eaeaea');
    document.documentElement.style.setProperty('--checkbox-color', '#ffffff');
};

export function userColorTheme(e) {
    const colorPalette = e.target.closest('.color-palette');
    const colorChoice = e.target.closest('.color-choice');
    if (!colorPalette || e.target === colorPalette) return;
    
    const currentColor = colorPalette.querySelector('.color-chosen');
    const backgroundColor = getComputedStyle(e.target).backgroundColor;

    if (colorPalette.id === 'primary-color-choice') {
        if (backgroundColor === userConfig.secondaryColor) return;
        userConfig.primaryColor = backgroundColor;
        document.documentElement.style.setProperty('--primary-color', userConfig.primaryColor);
        if (currentColor) {
            currentColor.classList.toggle('color-chosen');
        };
        e.target.classList.toggle('color-chosen');
        userConfig.primaryColorDomElem = colorChoice;
    }
    if (colorPalette.id === 'secondary-color-choice') {
        if (backgroundColor === userConfig.primaryColor) return;
        userConfig.secondaryColor = backgroundColor;
        document.documentElement.style.setProperty('--secondary-color', userConfig.secondaryColor);
        if (currentColor) {
            currentColor.classList.toggle('color-chosen');
        };
        e.target.classList.toggle('color-chosen');
        userConfig.secondaryColorDomElem = colorChoice;
    };
    saveUserConfigToLocalStorage();
    console.log(userConfig.primaryColor);
};