import { darkModeMediaQuery, saveUserConfigToLocalStorage, userConfig } from "..";
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
    const dropdownTrigger = e.target.closest('.dropdown');
    dropdownTrigger.querySelector('section').classList.toggle('section-open');
    dropdownTrigger.querySelector('svg').closest('span').classList.toggle('dropdown-open');
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
            const openSections = modal.querySelectorAll('.section-open');
            const dropdownOpenIndicators = modal.querySelectorAll('.dropdown-open');
            openSections.forEach(section => {
                section.classList.remove('section-open');
            });
            dropdownOpenIndicators.forEach(indicator => {
                indicator.classList.remove('dropdown-open');
            });
        }, 150);
    };
};

const white = '#ffffff';
const black = '#000000';


export function setUserColorTheme(primaryColor = '#ffd1dc', secondaryColor = '#b8d8be') {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    if (userConfig.darkMode === true) {
        darkmode();
        saveUserConfigToLocalStorage();
    };
};

export function toggleDarkMode(e) {
    document.documentElement.classList.add('color-transition');
    if (userConfig.darkMode === false) {
        darkmode();
        userConfig.darkMode = true;
    } else if (userConfig.darkMode === true) {
        lightmode();
        userConfig.darkMode = false;
    };
    saveUserConfigToLocalStorage();
    setTimeout(() => {
        document.documentElement.classList.remove('color-transition');
    }, 100);
};

export function darkmode() {
    document.documentElement.style.setProperty('--primary-text-color', white);
    document.documentElement.style.setProperty('--secondary-text-color', black);
    document.documentElement.style.setProperty('--background-color-primary', '#222528');
    document.documentElement.style.setProperty('--background-color-secondary', '#323538');
    document.documentElement.style.setProperty('--checkbox-color', '#dddddd');
};

export function lightmode() {
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
    
    const currentColor = colorPalette.querySelector('.option-chosen');
    const backgroundColor = getComputedStyle(e.target).backgroundColor;

    if (colorPalette.id === 'primary-color-choice') {
        if (backgroundColor === userConfig.secondaryColor) return;
        userConfig.primaryColor = backgroundColor;
        document.documentElement.style.setProperty('--primary-color', userConfig.primaryColor);
        if (currentColor) {
            currentColor.classList.toggle('option-chosen');
        };
        e.target.classList.toggle('option-chosen');
        userConfig.primaryColorDomElem = colorChoice;
    }
    if (colorPalette.id === 'secondary-color-choice') {
        if (backgroundColor === userConfig.primaryColor) return;
        userConfig.secondaryColor = backgroundColor;
        document.documentElement.style.setProperty('--secondary-color', userConfig.secondaryColor);
        if (currentColor) {
            currentColor.classList.toggle('option-chosen');
        };
        e.target.classList.toggle('option-chosen');
        userConfig.secondaryColorDomElem = colorChoice;
    };
    saveUserConfigToLocalStorage();
    console.log(userConfig.primaryColor);
};