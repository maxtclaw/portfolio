// Template Array Item Object
/*
    {
        images: {
            path1: `lorem`,
            alt1: `lorem`,
            path2: `lorem`,
            alt2: `lorem`
        },
        title: `lorem`,
        skills: [`lorem`, `lorem`],
        description: `lorem`,
        liveLink: `lorem`,
        githubLink: `lorem`
    },
*/

const projectsArray = [
    {
        images: {
            path1: `../assets/public-list-1.png`,
            alt1: `Public List website with list creation and browsing options.`,
            path2: `../assets/public-list-2.png`,
            alt2: `Public List website viewing a list, with list item editing options.`
        },
        title: `Public List`,
        skills: [`HTML`, `CSS`, `JavaScript`, `React`, `Firebase`],
        description: `A Google Firebase web app built using React for users to create, save, edit, share, and browse public and private lists.`,
        liveLink: `https://public-list-production.netlify.app/`,
        githubLink: `https://github.com/maxtclaw/public-list`
    },
    {
        images: {
            path1: `../assets/world-urban-score-1.png`,
            alt1: `World Urban Score website header with continent and city selection options.`,
            path2: `../assets/world-urban-score-2.png`,
            alt2: `World Urban Score website showing scores and description for Toronto.`
        },
        title: `World Urban Score`,
        skills: [`HTML`, `SASS`, `JavaScript`],
        description: `A place to check various quality of life factors for urban areas around the world. The website connects to multiple endpoints in the Teleport API, and is made entirely through pair programming.`,
        liveLink: `https://world-urban-score.netlify.app/`,
        githubLink: `https://github.com/Max-Chow-project2/urban-score`
    },
    {
        images: {
            path1: `../assets/creative-1.png`,
            alt1: `Creative website's header with a navigation bar.`,
            path2: `../assets/creative-2.png`,
            alt2: `Creative website's contact page.`
        },
        title: `Creative`,
        skills: [`HTML`, `CSS`],
        description: `Conversion of a website design to a multi-page website template (Home, Blog, Contact) with basic navigational functionality, accessibility features, and responsive styling.`,
        liveLink: `https://css-creative.netlify.app/`,
        githubLink: `https://github.com/maxtclaw/creative`
    }
]

export default function populateProjects() {
    const ulEl = document.querySelector("ul.projectList");

    for (let i = 0; i < projectsArray.length; i++) {
        const liEl = document.createElement('li')
        liEl.classList.add('projectListItem')
        liEl.setAttribute('data-aos', 'fade-up')

        // Image Container
        const imgCtrEl = document.createElement('div')
        imgCtrEl.classList.add('imageContainer')
        
        const img1El = document.createElement('img')
        img1El.classList.add('hoverHide')
        img1El.setAttribute('src', projectsArray[i].images.path1)
        img1El.setAttribute('alt', projectsArray[i].images.alt1)

        const img2El = document.createElement('img')
        img2El.setAttribute('src', projectsArray[i].images.path2)
        img2El.setAttribute('alt', projectsArray[i].images.alt2)

        imgCtrEl.append(img1El, img2El)

        // Project Text Container
        const prjTxtCtrEl = document.createElement('div')
        prjTxtCtrEl.classList.add('projectTextContainer')

        // Text Container
        const txtCtrEl = document.createElement('div')
        txtCtrEl.classList.add('textContainer')

        const h3El = document.createElement('h3')
        h3El.classList.add('bold')
        h3El.innerText = projectsArray[i].title

        const prjSklEl = document.createElement('ul')
        prjSklEl.classList.add('projectSkills', 'bold')

        for (let j = 0; j < projectsArray[i].skills.length; j++) {
            const skillLiEl = document.createElement('li')
            skillLiEl.innerText = projectsArray[i].skills[j]
            prjSklEl.append(skillLiEl)
        }

        const pEl = document.createElement('p')
        pEl.innerText = projectsArray[i].description

        txtCtrEl.append(h3El, prjSklEl, pEl)

        // Project Links
        const prjLinksEl = document.createElement('div')
        prjLinksEl.classList.add('projectLinks')

        const liveLinkEl = document.createElement('a');
        liveLinkEl.classList.add('button')
        liveLinkEl.setAttribute('href', projectsArray[i].liveLink)
        liveLinkEl.innerText = 'View Live'

        const githubLinkEl = document.createElement('a')
        githubLinkEl.classList.add('button')
        githubLinkEl.setAttribute('href', projectsArray[i].githubLink)
        githubLinkEl.innerText = 'GitHub'

        prjLinksEl.append(liveLinkEl, githubLinkEl)

        prjTxtCtrEl.append(txtCtrEl, prjLinksEl)

        liEl.append(imgCtrEl, prjTxtCtrEl)
        ulEl.append(liEl)
    }

}

// Sample Output
/*
<li class="projectListItem" data-aos="fade-up">
    <div class="imageContainer">
        <img class="hoverHide" src="../assets/world-urban-score-1.png" alt="World Urban Score website header with continent and city selection options.">
        <img src="../assets/world-urban-score-2.png" alt="World Urban Score website showing scores and description for Toronto.">
    </div>
    <div class="projectTextContainer">
        <div class="textContianer">
            <h3 class="bold">World Urban Score</h3>
            <ul class="projectSkills bold">
                <li>HTML</li>
                <li>SASS</li>
                <li>JavaScript</li>
            </ul>
            <p>A place to check various quality of life factors for urban areas around the world. The website connects to multiple endpoints in the Teleport API, and is made entirely through pair programming.</p>
        </div>
        <div class="projectLinks">
            <a href="https://world-urban-score.netlify.app/" class="button">View Live</a>
            <a href="https://github.com/Max-Chow-project2/urban-score" class="button">GitHub</a>
        </div>
    </div>
</li>
*/