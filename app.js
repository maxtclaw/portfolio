// Importing default function from module
import moduleDefaultFunction from './scripts/script.js'

// Importing named function from module
import { moduleFunction } from './scripts/script.js'

// Calling imported functions
moduleDefaultFunction();
moduleFunction();


// Manage hamburger dropdown menu
import hamburgerDropdown from './scripts/hamburgerDropdown.js';
import { hamburgerDropdownMinimize } from './scripts/hamburgerDropdown.js'

hamburgerDropdown();
hamburgerDropdownMinimize();
