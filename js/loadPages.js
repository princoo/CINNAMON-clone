async function loadComponent(id, file) {
    console.log('first')
    try {
        const response = await fetch(file);
        if (!response.ok) {
            console.log(`Error loading the file ${file}`)
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

loadComponent("navbar", "html/navBar.html");
loadComponent("hello-section", "html/helloPage.html");
loadComponent("scope-section", "html/scope.html");
loadComponent("offer-section", "html/offerPage.html");
loadComponent("user-experience-section", "html/userExperiencePage.html");
loadComponent("actions-tracked-section", "html/actionsTracked.html");
loadComponent("search-details-section", "html/searchDetailsPage.html");
loadComponent("search-history-section", "html/searchHistory.html");
loadComponent("matched-offers-section", "html/matchedOffers.html");
loadComponent("stricking-balance-section", "html/strickingBalance.html");
loadComponent("effortless-design-section", "html/effortlesDesign.html");
loadComponent("styleguide-section", "html/styleguide.html");
loadComponent("colors-section", "html/colors.html");
loadComponent("projects-section", "html/similarProjects.html");
loadComponent("work-together-section", "html/workTogether.html");
loadComponent("footer-section", "html/footer.html");
