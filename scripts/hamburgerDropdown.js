const hamburgerButtonElement = document.querySelector('.hamburgerButton');  

// Helper function
function hamburgerDropdownToggle() {
    const navDropdownElement = hamburgerButtonElement.parentElement.nextElementSibling;

    hamburgerButtonElement.classList.toggle('fa-bars');
    hamburgerButtonElement.classList.toggle('fa-angle-up');
    navDropdownElement.classList.toggle('navDropdownActive');

    // Toggle aria-label
    if (navDropdownElement.classList.contains('navDropdownActive') > 0) {
        hamburgerButtonElement.setAttribute('aria-label', 'close menu');
    } else {
        hamburgerButtonElement.setAttribute('aria-label', 'open menu')
    }
}

// Toggles <nav> dropdown  on hamburger click
export default function hamburgerDropdown() {
    // .navDropdownActive brings down the navigational menu
    hamburgerButtonElement.addEventListener('click', () => {
        hamburgerDropdownToggle();
    })
}

// Minimize dropdown when an item in the dropdown is clicked
export function hamburgerDropdownMinimize() {
    const dropdownAnchorElementAll = document.querySelectorAll('ol a');

    dropdownAnchorElementAll.forEach((dropdownAnchorElement) => {
        dropdownAnchorElement.addEventListener('click', () => {
            hamburgerDropdownToggle();
        })
    })
}