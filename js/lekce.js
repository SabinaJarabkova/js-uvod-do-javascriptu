let odpoved = prompt("Ako sa mas?");
console.log(odpoved);

//pretypovanie retazca

//pretypovanie na cislo Number('450')

let odpovedAkoCislo = prompt('Kolko mas rokov?');
console.log(Number(odpovedAkoCislo));

// alebo druhy sposob, postupne po krokoch

let odpoved2 = prompt('Kolko mas rokov?');
let pretypovanie = Number(odpoved2);
console.log(pretypovanie);

let jeZima = true;
let svietiSlnko = false;
let vysledek = jeZima && svietiSlnko //je zima a zaroven svieti slnko 

//  && toto sa dava ked to ma byt "a zaroven" - vysledkom je true iba v pripade, ze vsetky tvrdenia su pravdive

console.log(vysledek);

// ked chcem ALEBO (aspon jedno) tak sa pouzije rovne lomitko || (2x)

let vysledek2 = jeZima || svietiSlnko;
console.log(vysledek2);

//porovnavanie
console.log(5 === 5);
console.log(5 === 7);

console.log(5 !== 5);
console.log(5 !== 7);

console.log(1 <= 2);
console.log(1 < 2);

console.log(1 >= 2);
console.log(1 > 2);

// == najskor pretypuje a potom porovnavna
// === nepretypuje a porovnava jak hodnotu, tak aj datovy typ

// != ignoruje datovy tym, pretypuje a porovnavna
// !== porovnava aj datovy typ a aj hodnotu, nepretypovana

let vek = Number(prompt('Kolko mas rokov?'));
console.log(vek >= 15 && vek <= 18);