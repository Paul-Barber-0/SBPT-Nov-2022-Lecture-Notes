/* 
    While loop structure

    while(expression) {
        code block...
    }

    - The main purpose for while loops are when the iteration is uncertain.
*/

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light pole', 'tree', 'light pole', 'empty street'
];

let structure = city[0];
let pos = 0;

while( structure != 'empty street') {
    console.log(`Spider-Man swings from the ${structure}`);
    pos++;
    structure = city[pos];
}

console.log(`Spider-man lands in the ${structure}`);

/* 
    Do While

    do {
        code block...
    } while (expression)

    - works just like while loops with the exception that will runour code block at least once.
*/

let spidyHP = 20;
let badguys = [
    {
        baddie: 'Green Goblin',
        hp: 15,
    },
    {
        baddie: 'Venom',
        hp: 25,
    },
    {
        baddie: 'Stilt-Man',
        hp: 5,
    },
];

let rand = Math.floor(Math.random() * badguys.length);
let villian = badguys[rand];

console.log(`${villian.baddie} has appeared!`);

do {

    console.log(`${villian.baddie} hits Spider-Man!`);
    spidyHP--;
    console.log('Spider-Man HP:', spidyHP);

    if(spidyHP === 0) {
        break;
    }

    spidyHit = Math.floor(Math.random() *3);
    console.log(`Spider-Man hits ${villian.baddie} for ${spidyHit} damage!`);
    villian.hp -= spidyHit;
    console.log('Villian HP:', villian.hp);

} while (villian.hp > 0);

villian.hp <= 0 ?
    console.log(`Spider-Man captures ${villian.baddie}!`):
    console.log(`${villian.baddie} has taken down Spider-Man!`);