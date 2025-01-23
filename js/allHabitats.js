const galleryHabitats = document.getElementById("allHabitats");

let title = "Je suis un titre";
let imgSource = "../images/Habitats_Jungle.jpg";

// Boucle pour le nombre de services existants dans la BDD
for (let i=1; i< 6; i++) {
    galleryHabitats.innerHTML += getImage(i, title, imgSource);
}

let allHabitats = document.querySelectorAll('.habitat');

allHabitats.forEach((element, index) => {
    
    element.addEventListener("click", event => {
        window.location.replace(`/habitat?id=${index+1}`);
    });
});




function getImage(ID, title, urlImage) {

    let habitatID = ID;
    let sanitizedTitle = sanitizeHTML(title);
    let sanitizedUrlImage = sanitizeHTML(urlImage);

    return `<div id="${habitatID}" class="habitat col-12 col-lg-4 p-3">
                <div class="habitat-box ratio ratio-1x1 text-center bg-black rounded-5">
                    <img class="w-100 h-100 rounded-5 object-fit-cover" src="${sanitizedUrlImage}">
                    <h3 class="title fs-2 fw-bold align-content-center text-white">${sanitizedTitle}</h3>
                </div>
            </div>`;
}