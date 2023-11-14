export function createCategoryButton(category) {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('dialog-btn');
    button.textContent = category;
    return button;
};

export function createScrollItem(category) {
    const scrollItem = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = category;
    scrollItem.classList.add('scroll-item');
    scrollItem.appendChild(button);
    return scrollItem;
};