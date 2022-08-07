// Manage navbar dropdown menu
import hamburgerDropdownButtonListener from './scripts/hamburgerDropdown.js';
import { hamburgerDropdownElementListener, navNameAnchorElementListener } from './scripts/hamburgerDropdown.js';

const app = {};

app.init = function () {
    // Add event listeners for navigation elements
    hamburgerDropdownButtonListener();
    hamburgerDropdownElementListener();
    navNameAnchorElementListener();
}

app.init()

