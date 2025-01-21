// Toggle Main Menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Toggle Submenu
function toggleSubMenu() {
    const submenu = document.getElementById('learnHereMenu');
    const arrow = document.querySelector('.arrow');

    if (submenu.classList.contains('hidden')) {
        submenu.style.display = 'block';
        arrow.classList.add('up'); // Rotate arrow upwards
    } else {
        submenu.style.display = 'none';
        arrow.classList.remove('up'); // Rotate arrow downwards
    }

    submenu.classList.toggle('hidden');
}

// Navigate to Section
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}


