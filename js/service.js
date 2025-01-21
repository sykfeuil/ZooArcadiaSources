const galleryServices = document.getElementById("allServices");

let title = "Je suis un titre";
let imgSource = "../images/Services_Guide.jpg";
let description = "Je suis la description du service et je suis volontairement long pour vérifier les marges de ce paragraphe.";

// Boucle pour le nombre de services existants dans la BDD
for (let i=1; i< 6; i++) {
    galleryServices.innerHTML += getImage(title, imgSource, description);
}

function getImage(title, urlImage, description) {

    let sanitizedTitle = sanitizeHTML(title);
    let sanitizedUrlImage = sanitizeHTML(urlImage);
    let sanitizedDescription = sanitizeHTML(description);

    return `<div class="col-12 col-lg-4 p-3">
                <div class="service-box ratio ratio-1x1 text-center bg-black rounded-5">
                    <img class="w-100 h-100 rounded-5 object-fit-cover" src="${sanitizedUrlImage}">
                    <h3 class="title fs-2 fw-bold align-content-center text-white">${sanitizedTitle}</h3>
                    <p class="description align-content-center text-white">
                        ${sanitizedDescription}
                    </p>
                </div>
            </div>`;
}