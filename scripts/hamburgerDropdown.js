const navNameElement = document.querySelector('.navBar a');
const navHamburgerButtonElement = document.querySelector('.hamburgerButton');  
const navDropdownElement = document.querySelector('.navDropdown');;
const navDropdownAnchorElementAll = document.querySelectorAll('.navDropdown a');

// Helper functions
function hamburgerDropdownToggle() {
    // Toggle active for hamburgerButton and dropdown
    navHamburgerButtonElement.classList.toggle('hamburgerButtonActive');
    navDropdownElement.classList.toggle('navDropdownActive');

    // Toggle aria-label for hamburger button
    // Toggle tabindex for dropdown list items depending on visibility
    if (navDropdownElement.classList.contains('navDropdownActive')) {
        navHamburgerButtonElement.setAttribute('aria-label', 'close menu');
        navDropdownAnchorElementAll.forEach((navDropdownAnchorElement) => {
            navDropdownAnchorElement.setAttribute('tabindex', 0);
        });
    } else {
        navHamburgerButtonElement.setAttribute('aria-label', 'open menu')
        navDropdownAnchorElementAll.forEach((navDropdownAnchorElement) => {
            navDropdownAnchorElement.setAttribute('tabindex', -1);
        });
    }
}

// Minimize dropdown
function hamburgerDropdownMinimize() {
    // Add the classes, then toggle to remove them
    navHamburgerButtonElement.classList.add('hamburgerButtonActive');
    navDropdownElement.classList.add('navDropdownActive');
    hamburgerDropdownToggle();
}

// Event Listeners
// Toggles <nav> dropdown on hamburger click or enter
export default function hamburgerDropdownButtonListener() {
    navHamburgerButtonElement.addEventListener('click', () => {
        hamburgerDropdownToggle();
    })

    navHamburgerButtonElement.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            hamburgerDropdownToggle();
        }
    })
}

// Minimize dropdown when an item in the nav is clicked
export function hamburgerDropdownElementListener() {
    navDropdownAnchorElementAll.forEach((navDropdownAnchorElement) => {
        navDropdownAnchorElement.addEventListener('click', () => {
            hamburgerDropdownMinimize();
        })
    })
}

// Minimize dropdown when name anchor in the nav is clicked
export function navNameAnchorElementListener() {
    navNameElement.addEventListener('click', () => {
        hamburgerDropdownMinimize();
    })
}