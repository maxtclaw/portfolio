const navNameElement = document.querySelector('.navBar a');
const navHamburgerButtonElement = document.querySelector('.hamburgerButton');  
const navDropdownElement = document.querySelector('.navDropdown');;
const navDropdownAnchorElementAll = document.querySelectorAll('.navDropdown a');

// Helper functions
function hamburgerDropdownToggle() {
    navDropdownElement.classList.toggle('navDropdownActive');
    navHamburgerButtonElement.classList.toggle('fa-bars');
    navHamburgerButtonElement.classList.toggle('fa-angle-up');

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

// 
function hamburgerDropdownMinimize() {
    navDropdownElement.classList.add('navDropdownActive');
    navHamburgerButtonElement.classList.remove('fa-bars');
    navHamburgerButtonElement.classList.add('fa-angle-up');
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