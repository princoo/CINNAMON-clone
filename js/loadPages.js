async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Error loading ${file}: ${response.statusText}`);
        }
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const menuButton = document.getElementById("menu-toggle");
    menu.classList.toggle("hidden");
  }

loadComponent("navbar", "navBar.html");
// loadComponent("hello-section", "helloPage.html");
// loadComponent("scope-section", "scope.html");
// loadComponent("offer-section", "offerPage.html");
// loadComponent("user-experience-section", "userExperiencePage.html");
// loadComponent("actions-tracked-section", "actionsTracked.html");
// loadComponent("search-details-section", "searchDetailsPage.html");
// loadComponent("search-history-section", "searchHistory.html");
// loadComponent("matched-offers-section", "matchedOffers.html");
// loadComponent("stricking-balance-section", "strickingBalance.html");
// loadComponent("effortless-design-section", "effortlesDesign.html");
// loadComponent("styleguide-section", "styleguide.html");
// loadComponent("colors-section", "colors.html");
loadComponent("projects-section", "similarProjects.html");
loadComponent("work-together-section", "workTogether.html");
