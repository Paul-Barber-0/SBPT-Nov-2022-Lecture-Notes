// Global Vairables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];

// Event Listener
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // console.log(event);
    // console.log(form[0].value);
    console.log(form);

    let species = form.species.value;
    let name = form.name.value;
    let sex = form.sex.value;

    console.log(`species: ${species}`);
    console.log(`name: ${name}`);
    console.log(`sex: ${sex}`);
    
    let animal = {
        species: species,
        name: name,
        sex: sex
    };

    console.log(animal);

    // console.log(animal)
    animals.push(animal);
    console.log(animals);
    buildTable();

    form.reset();
    form.species.focus();
})

// Display Tables
function buildTable() {
    console.log(`In buildTable: ${animals}`);

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    animals.forEach((a, i) => {
        // console.log(a);

        //* 3 steps to displaying to the DOM
        /* 
        !CREATE
            row
                - data: Pos, Name, Sex, Species
        */
        let tr = document.createElement('tr');
        let pos = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //! Apply Values
        pos.textContent = i + 1;
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;

        //! Append
        tr.appendChild(pos);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
        
    })
}
