//=======================================
// Table services
//=======================================
const servicesTable = document.getElementById('servicesTable');

for (let i = 1; i < 8; i++) {
    servicesTable.innerHTML += `<tr>
                                    <th scope="row">${i}</th>
                                    <td>Service ${i}</td>
                                    <td>Description ${i}</td>
                                </tr>`;
};

const servicesList = servicesTable.getElementsByTagName('tr');

Array.from(servicesList).forEach((row, index) => {

    row.addEventListener('click', () => {

        Array.from(servicesList).forEach((tempRow, tempIndex) => {
            tempRow.classList.remove('table-active');
        });

        row.classList.add('table-active');
    });
});

//=======================================
// CRUD services
//=======================================
const editServiceModal = document.getElementById('editServiceModal');
const serviceEditName = document.getElementById('serviceEditName');
const serviceEditDescription = document.getElementById('serviceEditDescription');
const serviceDelete = document.getElementById('serviceDelete');

editServiceModal.addEventListener('shown.bs.modal', editService);
serviceDelete.addEventListener('click', deleteService);

function deleteService() {
    Array.from(servicesList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {
            // Suppression de l'élément de la BDD
            alert(`Element ${tempIndex+1} supprimé`);
            window.location.reload();
        };
    });
};

function editService() {
    let serviceSelected = false;

    Array.from(servicesList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {

            serviceEditName.value = tempRow.cells[1].innerHTML;
            serviceEditDescription.value = tempRow.cells[2].innerHTML;
            serviceSelected = true;
        };
    });

    if (!serviceSelected) {
        alert("Aucun service n'est sélectionné");
        window.location.reload();
    };
};

//=======================================
// Table habitats
//=======================================
const habitatsTable = document.getElementById('habitatsTable');

for (let i = 1; i < 5; i++) {
    habitatsTable.innerHTML += `<tr>
                                    <th scope="row">${i}</th>
                                    <td>Habitat ${i}</td>
                                    <td>Description ${i}</td>
                                    <td>Animal 1; Animal 2; Animal 3; Animal 4; Animal 5</td>
                                </tr>`;
};

const habitatsList = habitatsTable.getElementsByTagName('tr');

const habitatEditAnimals = document.getElementById('habitatEditAnimals');
const habitatCreateAnimals = document.getElementById('habitatCreateAnimals');

Array.from(habitatsList).forEach((row, index) => {

    row.addEventListener('click', () => {

        Array.from(habitatsList).forEach((tempRow, tempIndex) => {
            tempRow.classList.remove('table-active');
        });

        row.classList.add('table-active');
    });
});

for (let i = 1; i < 10; i++) {
    habitatEditAnimals.innerHTML += `<input type="checkbox" class="btn-check" id="habitatEditCheckbox${i}" autocomplete="off">
                                     <label class="btn btn-outline-primary" for="habitatEditCheckbox${i}">Checkbox ${i}</label>`;
    
    habitatCreateAnimals.innerHTML += `<input type="checkbox" class="btn-check" id="habitatCreateCheckbox${i}" autocomplete="off">
                                       <label class="btn btn-outline-primary" for="habitatCreateCheckbox${i}">Checkbox ${i}</label>`;
};

//=======================================
// CRUD habitats
//=======================================
const editHabitatModal = document.getElementById('editHabitatModal');
const habitatEditName = document.getElementById('habitatEditName');
const habitatEditDescription = document.getElementById('habitatEditDescription');
const habitatEditImages = document.getElementById('habitatEditImages');
const habitatDelete = document.getElementById('habitatDelete');

editHabitatModal.addEventListener('shown.bs.modal', editHabitat);
habitatDelete.addEventListener('click', deleteHabitat);

function deleteHabitat() {
    Array.from(habitatsList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {
            // Suppression de l'élément de la BDD
            alert(`Element ${tempIndex+1} supprimé`);
            window.location.reload();
        };
    });
};

function editHabitat() {
    let habitatSelected = false;

    Array.from(habitatsList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {

            habitatEditName.value = tempRow.cells[1].innerHTML;
            habitatEditDescription.value = tempRow.cells[2].innerHTML;
            Array.from(habitatEditAnimals.getElementsByTagName('input')).forEach((element, index) => {
                if ((index) % 2) {
                    element.checked = true;
                };
            });
            habitatSelected = true;
        };
    });

    if (!habitatSelected) {
        alert("Aucun habitat n'est sélectionné");
        window.location.reload();
    };
};

//=======================================
// Table animaux
//=======================================
const animalsTable = document.getElementById('animalsTable');

for (let i = 1; i < 17; i++) {
    animalsTable.innerHTML += ` <tr>
                                    <th scope="row">${i}</th>
                                    <td>Animal ${i}</td>
                                    <td>Race ${i}</td>
                                    <td>Habitat ${i}</td>
                                </tr>`;
};

const animalsList = animalsTable.getElementsByTagName('tr');

Array.from(animalsList).forEach((row, index) => {

    row.addEventListener('click', () => {

        Array.from(animalsList).forEach((tempRow, tempIndex) => {
            tempRow.classList.remove('table-active');
        });

        row.classList.add('table-active');
    });
});

//=======================================
// CRUD animaux
//=======================================
const editAnimalModal = document.getElementById('editAnimalModal');
const animalEditName = document.getElementById('animalEditName');
const animalEditRace = document.getElementById('animalEditRace');
const animalEditHabitat = document.getElementById('animalEditHabitat');
const animalDelete = document.getElementById('animalDelete');

editAnimalModal.addEventListener('shown.bs.modal', editAnimal);
animalDelete.addEventListener('click', deleteAnimal);

function deleteAnimal() {
    Array.from(animalsList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {
            // Suppression de l'élément de la BDD
            alert(`Element ${tempIndex+1} supprimé`);
            window.location.reload();
        };
    });
};

function editAnimal() {
    let animalSelected = false;

    Array.from(animalsList).forEach((tempRow, tempIndex) => {
        if (tempRow.classList.contains('table-active')) {

            animalEditName.value = tempRow.cells[1].innerHTML;
            animalEditRace.value = tempRow.cells[2].innerHTML;
            animalEditHabitat.value = tempRow.cells[3].innerHTML;
            animalSelected = true;
        };
    });

    if (!animalSelected) {
        alert("Aucun service n'est sélectionné");
        window.location.reload();
    };
};