import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/services", "Nos services", "pages/service.html", [], "js/service.js"),
    new Route("/noshabitats", "Nos Habitats", "pages/allHabitats.html", [], "js/allHabitats.js"),
    new Route("/habitat", "Habitat", "/pages/habitat.html", [], "js/habitat.js"),
    new Route("/avis", "Laisser un avis", "/pages/rating.html", [])
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";