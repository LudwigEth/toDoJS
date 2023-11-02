export function createToDoCard(taskToDo) {


    const divToDoCard = document.createElement('div');
    const buttonToDoCheck = document.createElement('button');
    const divToDoTaskContainer =  document.createElement('div');
    const paraToDoTask = document.createElement('p');
    const buttonToDoMenu = document.createElement('button');
    const divHamburgerMenuDots = document.createElement('div');
    const divHamburgerDotTop = document.createElement('div');
    const divHamburgerDotMiddle = document.createElement('div');
    const divHamburgerDotBottom = document.createElement('div');


    divToDoCard.classList.add('to-do-card');
    divToDoTaskContainer.classList.add('to-do-task-container');
    paraToDoTask.classList.add('to-do-task');
    buttonToDoMenu.classList.add('to-do-menu');
    divHamburgerMenuDots.classList.add('hamburger-menu-dots');
    divHamburgerDotTop.classList.add('hamburger-dots');
    divHamburgerDotMiddle.classList.add('hamburger-dots');
    divHamburgerDotBottom.classList.add('hamburger-dots');

    paraToDoTask.textContent = taskToDo;

    // still need to attach eventlisteners to the buttons

    divHamburgerMenuDots.appendChild(divHamburgerDotTop);
    divHamburgerMenuDots.appendChild(divHamburgerDotMiddle);
    divHamburgerMenuDots.appendChild(divHamburgerDotBottom);
    buttonToDoMenu.appendChild(divHamburgerMenuDots);

    divToDoTaskContainer.appendChild(paraToDoTask);

    divToDoCard.appendChild(buttonToDoCheck);
    divToDoCard.appendChild(divToDoTaskContainer);
    divToDoCard.appendChild(buttonToDoMenu);

    return divToDoCard;
}