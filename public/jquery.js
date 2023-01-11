const divs = document.querySelectorAll('div[id^="id-"]');

// Add a click event listener to each div 
divs.forEach(div => {
    div.addEventListener('click', () => {

        // Get the text value of the clicked div 
        const textValue = div.innerText;

        // Copy the text value to clipboard 
        navigator.clipboard.writeText(textValue);

    });
});
