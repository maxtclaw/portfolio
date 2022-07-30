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

// Add as child of .projectListItem
{/* <div class="projectOverlay">
    <h3 aria-hidden="true">#Project Title</h3>
    <p>#Project description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, atque?</p>
    <div>
        <a href="#" class="button">View Live</a>
        <a href="#" class="button">GitHub</a>
    </div>
</div> */}


export default projectOverlay;