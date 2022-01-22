/*
  1) Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy vypiš NAAKUMULOVANÝ součet těchto čísel ​
*/


/*
  2) Nechte uzivatele zadat 2 cisla, ktere znaci dolni a horni mez na ciselne ose celych cisel - vcetne, pokud tedy zada 3 a 7, uvazujme cisla 3, 4, 5, 6, 7. Vypište pomocí FOR cyklu pouze sudá čísla.
*/


/*
  3) Prepiste tento for cyklus pomoci While cyklu
    for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) {
      console.log(i);
    }
  - poznamka - pripomenout definici casti for cyklu
*/

/*
// 1)
let cislo = 1;
let soucet = 0;

while (cislo !== 0) {
  soucet = soucet + cislo;
  cislo = Number(prompt('Zadej cislo'));
  console.log('Akumulovany soucet:' + soucet + ' - cislo: ' + cislo);

  //if (cislo !== 0) {
    //alert ('zadali ste spatne cislo');
  }
}
*/

/*
// ked chceme napriklad overenie PINu    
let pin = 1212;

while (pin) {
  pin = Number(prompt('Zadej PIN:'));

  if (pin) {
    alert ('zadali ste spatny PIN');
  }
  console.log(pin);
}
*/

//2)
// for cyklus => for (let i = 0; i < 10; i++) {
  //console.log(i) -> vypise hodnoty 0-9

// 3)
let i = 12;
let j = 12 ** 3;

while (i < (12 + j)) {
  console.log(i);
  i = i * 2;
}

