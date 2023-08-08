// Add 'active' class to the clicked navigation item
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Get the greeting element
const greeting = document.getElementById('greeting');

window.addEventListener('mousemove', moveImage);

function moveImage(event) {
    const image = document.getElementById('moving-image');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const containerRect = image.parentNode.getBoundingClientRect();
    const offsetX = mouseX - containerRect.left;
    const offsetY = mouseY - containerRect.top;
    const translateX = (offsetX / containerRect.width) * 20 - 10;
    const translateY = (offsetY / containerRect.height) * 20 - 10;
    image.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

