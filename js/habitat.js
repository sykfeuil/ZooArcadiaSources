const allparams = new URLSearchParams(window.location.search);

const habitatID = allparams.get('id');

const habitatName = document.getElementById("habitatName");
const habitatGallery = document.getElementById("habitatGallery");
const habitatDescription = document.getElementById("habitatDescription");
const habitatAnimals = document.getElementById("habitatAnimals");

const animalDetail = document.getElementById("animalDetail");

// Insertion du nom de l'habitat après récupération dans BDD
habitatName.innerHTML = "Nom de l'habitat " + habitatID;

// Insertion des images de l'habitat après récupération dans BDD
for (i = 1; i < 4; i++) {
    if (i == 1) {
        habitatGallery.innerHTML += `<div class="carousel-item text-center active">
                                        <img src="../images/Couverture_Lion.jpg" class="d-block mx-auto" height="500">
                                    </div>`;
    }
    else {
        habitatGallery.innerHTML += `<div class="carousel-item text-center">
                                        <img src="../images/Couverture_Cerf.png" class="d-block mx-auto" alt="..." height="500">
                                    </div>`;
    };
};

// Insertion de la description de l'habitat après récupération dans BDD
habitatDescription.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? " + habitatID;

// Insertion des animaux de l'habitat après récupération dans BDD
for (i = 1; i < 8; i++) {
    habitatAnimals.innerHTML += `<div class="col p-3">
                                    <button type="button" class="btn btn-secondary text-white p-3" data-bs-toggle="modal" data-bs-target="#animalDetailModal">Nom de l'animal</button>
                                </div>`;
};

// Récupération de tous les animaux de l'habitat
let allAnimals = document.querySelectorAll('.btn');

allAnimals.forEach((element, index) => {

    element.addEventListener("click", event => {
        animalDetail.innerHTML = `<div class="modal-header bg-secondary text-white">
                                    <h1 class="modal-title fs-3" id="animalDetailModalLabel">Nom de l'animal ${index+1}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-dark">

                                        <div class="row">
                                            <h3 class="col fs-5">Race de l'animal ${index+1}</h3>
                                            <h3 class="col fs-5 text-end">Habitat de l'animal ${index+1}</h3>
                                        </div>
                                        
                                        <div id="carouselAnimalGallery" class="carousel slide carousel-fade p-3 m-0">
                                            <div id="animalGallery" class="carousel-inner">
                                                <div class="carousel-item text-center active">
                                                    <img src="../images/Couverture_Lion.jpg" class="d-block mx-auto" height="300">
                                                </div>
                                                <div class="carousel-item text-center">
                                                    <img src="../images/Couverture_Cerf.png" class="d-block mx-auto" height="300">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselAnimalGallery" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Précédent</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselAnimalGallery" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Suivant</span>
                                            </button>
                                        </div>

                                        <div class="p-3">
                                            <h2 class="fs-3 text-center bg-secondary text-white p-3">Bilan vétérinaire</h2>
                                            <div class="row">
                                                <p class="col">Etat de l'animal : ${index+1}</p>
                                                <p class="col text-end">Dernier passage : ${index+1}</p>
                                            </div>
                                            <div class="row">
                                                <p class="col">Type de nourriture : ${index+1}</p>
                                                <p class="col text-end">Grammage : ${index+1}</p>
                                            </div>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-secondary">
                                        <button type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">Fermer</button>
                                    </div>`;
    });
});