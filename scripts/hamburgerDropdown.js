function hamburgerDropdown() {
    const hamburgerButtonElement = document.querySelector('.hamburgerButton');    

    // .navDropdownActive brings down the navigational menu
    hamburgerButtonElement.addEventListener('click', () => {

        hamburgerButtonElement.firstElementChild.classList.toggle('fa-bars')
        hamburgerButtonElement.firstElementChild.classList.toggle('fa-angle-up')

        hamburgerButtonElement.nextElementSibling.classList.toggle('navDropdownActive')
    })
}

export default hamburgerDropdown;