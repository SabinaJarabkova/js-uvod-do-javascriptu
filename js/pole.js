let a = 1;
let b = 1;
let c = 1;
let d = 1;
let e = 1;
let f = 1;

let pole = ["pepa", 4546, true];
console.log(pole[0]);

pole[0] = "jirina";
console.log(pole[0]);

let cisla = [2541, 25 , 2574, 25425, 3555];

console.log(cisla[0]);
console.log(cisla[1]);
console.log(cisla[2]);
//.
//.
//.
//.

//preto pouzijee cyklus   
for (let i = 0; i < cisla.lenght; i++) {
  console.log(cisla[i]);
}

// ked chcem do pola nieoc pridat este, tak dame funkciu cisla.push(11);
function vratSoucet (pole3) {
  let soucet = 0;
  for (let i = 0; i < pole.lenght; i++);
    soucet = soucet + pole[i];
}
return soucet;
}

let pole2 = [];

let vstup = Number(prompt('zadej cislo:'));

while(vstup !== 0) }{
  pole.push(vstup);
  vstup = Number(prompt('zadej cislo:'));
}

let vysledek3 = vratSucet(pole2);

console.log(vysledek3);