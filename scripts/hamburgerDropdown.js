const hamburgerButtonElement = document.querySelector('.hamburgerButton');  

// Helper function
function hamburgerDropdownToggle() {
    hamburgerButtonElement.classList.toggle('fa-bars')
    hamburgerButtonElement.classList.toggle('fa-angle-up')
    hamburgerButtonElement.parentElement.nextElementSibling.classList.toggle('navDropdownActive')
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