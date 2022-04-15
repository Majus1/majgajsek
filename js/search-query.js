// :::::::::::::::::::::::::::::::::::::
// Search query on Pretekla dela page
// :::::::::::::::::::::::::::::::::::::

// Search query
const projectGridNav = document.querySelector("#previous-work")

function removeToggledCategor() {
    // Function that removes toggled categoryes
    let theToggledCategory = document.querySelector(".toggled-category")
    theToggledCategory.classList.remove("toggled-category")
}

function showAllWebDevProjects() {
    // Function hides all UI/UX and branding project and shows only Web Dev projects

    // Hides all UI & UX projects
    let allUiUxProjects = document.querySelectorAll(".mg-ui-ux-project");
    allUiUxProjects.forEach( UiUxProject => {
        UiUxProject.style.display = "none"
    })

    // Hides all Branding projects
    let allbrandingProjects = document.querySelectorAll(".mg-branding-project");
    allbrandingProjects.forEach( brandingProject => {
        brandingProject.style.display = "none"
    })

    // Shows all Web Dev projects
    let allWebDevProjects = document.querySelectorAll(".mg-web-dev-project");
    allWebDevProjects.forEach( WebDevProject => {
        WebDevProject.style.display = "inline-block"
    })
}

function showAllUiUxProjects() {
    // Function hides all WEB DEv and branding project and shows only UI / UX projects

    // Hides all Branding projects
    let allbrandingProjects = document.querySelectorAll(".mg-branding-project");
    allbrandingProjects.forEach( brandingProject => {
        brandingProject.style.display = "none"
    })

    // Hides all Web Dev projects
    let allWebDevProjects = document.querySelectorAll(".mg-web-dev-project");
    allWebDevProjects.forEach( WebDevProject => {
        WebDevProject.style.display = "none"
    })

    // Shows all UI & UX projects
    let allUiUxProjects = document.querySelectorAll(".mg-ui-ux-project");
    allUiUxProjects.forEach( UiUxProject => {
        UiUxProject.style.display = "inline-block"
    })
}

function showAllBrandingProjects() {
    // Function hides all WEB DEv and UI / UX project and shows only branding projects

    // Hides all Web Dev projects
    let allWebDevProjects = document.querySelectorAll(".mg-web-dev-project");
    allWebDevProjects.forEach( WebDevProject => {
        WebDevProject.style.display = "none"
    })

    // Hides all UI & UX projects
    let allUiUxProjects = document.querySelectorAll(".mg-ui-ux-project");
    allUiUxProjects.forEach( UiUxProject => {
        UiUxProject.style.display = "none"
    })

    // Shows all Branding projects
    let allbrandingProjects = document.querySelectorAll(".mg-branding-project");
    allbrandingProjects.forEach( brandingProject => {
        brandingProject.style.display = "inline-block"
    })
}

function showAllProjects() {
    // Function hides all projects

    // Shows all Web Dev projects
    let allWebDevProjects = document.querySelectorAll(".mg-web-dev-project");
    allWebDevProjects.forEach( WebDevProject => {
        WebDevProject.style.display = "inline-block"
    })

    // Shows all UI & UX projects
    let allUiUxProjects = document.querySelectorAll(".mg-ui-ux-project");
    allUiUxProjects.forEach( UiUxProject => {
        UiUxProject.style.display = "inline-block"
    })

    // Shows all Branding projects
    let allbrandingProjects = document.querySelectorAll(".mg-branding-project");
    allbrandingProjects.forEach( brandingProject => {
        brandingProject.style.display = "inline-block"
    })
}

projectGridNav.addEventListener("click", (event)=> {
    if (event.target.id === "all-categories") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za vse skupaj");
        // Function hides all projects
        showAllProjects()
    } 
    else if (event.target.id === "web-dev-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za web dev");
        // Function hides all WEB DEv and UI / UX project and shows only branding projects
        showAllWebDevProjects()
    }
    else if (event.target.id === "ui-ux-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za UI / UX");
        // Function hides all WEB DEv and branding project and shows only UI / UX projects
        showAllUiUxProjects()
    }
    else if (event.target.id === "branding-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za branding");
        // Function hides all UI/UX and branding project and shows only Web Dev projects
        showAllBrandingProjects()
    }

})
// Search query