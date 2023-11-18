// Get the container and content elements
const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-content');

// Set the container width based on the content width
container.style.width = `${content.offsetWidth}px`;


const cer = document.querySelector('.scroll-container');
const ct = document.querySelector('.scroll-content');