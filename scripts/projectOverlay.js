// Adds event listeners to each project card, which toggles and untoggles an overlay
function projectOverlay() {
    const projectListItemAll = document.querySelectorAll('.projectListItem');
    projectListItemAll.forEach((projectListItem) => {
        projectListItem.addEventListener('click', () => {
            const projectOverlay = projectListItem.querySelector('.projectOverlay');
            projectOverlay.classList.toggle('projectOverlayActive')
            console.log(projectOverlay)
        })
    })
    
}

// Add to app.js
// import projectOverlay from './scripts/projectOverlay.js';
// projectOverlay();

// Add as child of .projectListItem
{/* <div class="projectOverlay">
    <h3 aria-hidden="true">#Project Title</h3>
    <p>#Project description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, atque?</p>
    <div>
        <a href="#" class="button">View Live</a>
        <a href="#" class="button">GitHub</a>
    </div>
</div> */}

// Add as a style of .sectionProjects
// .projectOverlay {
//     position: absolute;
//     top: 0;
//     left: 0;

//     display: none;
//     // display: flex;
//     flex - direction: column;
//     gap: $spacing;
//     justify - content: center;
//     align - items: center;

//     width: 100 %;
//     height: 100 %;

//     padding: $spacing;

//     background - color: rgba($color: #000000, $alpha: 0.6);

//     h3, p {
//         margin - bottom: 0;
//         color: $colorSix;
//     }
// }

// .sectionProjects {
//     .projectOverlay {
//         display: none;
//     }

//     .projectOverlayActive {
//         display: flex;
//     }
// }


export default projectOverlay;