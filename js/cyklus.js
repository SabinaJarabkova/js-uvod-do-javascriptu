// for cyklus

// while cyklus

/*
while (...dokud plati){
  opAKUJ TOTO;
}
*/

let i = 1;

while (i < 6) {
  console.log("ahoj");
  i = i + 1;

  if (i === 3) {
    break;
  }
}

/* skrateny zapis

i = i +1;
i++;
i += 1;
*/

// prikaz Break dany cyklus ukonci


/* cyklus for

for (na zaciatku; podmienka; na konci tela) {
  to co sa ma vykonat
}

*/

for (let y = 0; y < 6; y++) {
  console.log(y);
}

// for cykus je dobre pouzit, ked uz v dany moment vieme pocet opakovani
// while cyklus ked este nevieme kolkokrat sa to bdue opakovta alebo ak mame zlozitu podmienku
// vsetko, co sa da napisat vo for cykle sa da napisat vo while cykle