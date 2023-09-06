document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class .color
    const colorDivs = document.querySelectorAll('.color');

    // Loop through each element and set background color and hide text
    colorDivs.forEach((div) => {
    // Extract the hex code from the text content
    const hexCode = div.textContent.trim();

    // Set background color using extracted hex code
    div.style.backgroundColor = hexCode;

    // Replace the text with an empty string
    div.textContent = '';

    // Optionally, you can also add a class for styling purposes
    div.classList.add('hidden-text');
    });

    
});