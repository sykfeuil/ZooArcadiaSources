import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/services", "Nos services", "pages/data/service.html", [], "js/service.js"),
    new Route("/noshabitats", "Nos Habitats", "pages/data/allHabitats.html", [], "js/allHabitats.js"),
    new Route("/habitat", "Habitat", "/pages/data/habitat.html", [], "js/habitat.js"),
    new Route("/avis", "Laisser un avis", "/pages/user/rating.html", []),
    new Route("/connexion", "Connexion", "/pages/user/connection.html", []),
    new Route("/contact", "Contactez-nous", "/pages/user/contact.html", []),
    new Route("/espaceAdministrateur", "Mon espace", "/pages/account/administrator.html", [], "js/account/administrator.js")
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";