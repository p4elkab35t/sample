
// Get the body element
const body = document.querySelector('body');

// Add event listener to track mouse movement


window.onload = () => {
    document.addEventListener('mousemove', (event) => {
        // Check if mouse is outside of the page
        if (event.clientX < 5 || event.clientY < 5 || event.clientX > window.innerWidth - 5 || event.clientY > window.innerHeight - 5) {
            // Change everything to black color
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        } else {
            // Restore actual content
            body.style.backgroundColor = '';
            body.style.color = '';
        }
    });
}

