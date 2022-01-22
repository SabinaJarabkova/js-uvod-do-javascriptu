/*Ukoly - vstup a podmínky:
1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru:
 a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
 b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.
*/

/*

2)  Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".​
} */

// 1)
let jmeno = prompt('Ako sa volas?');
let vek = Number(prompt('Kolko mas rokov?'));

let rozdil = 18 - vek;

if (vek >= 18) {
  console.log('Vaše jméno je ' + jmeno + ', je vám ' + vek + ' let a tak máte právo řídit auto.');
} else {
  console.log('Vaše jméno je ' + jmeno + ', je vám ' + vek + ' let a tak musíte počkat ještě ' + rozdil + ' let, než budete moci řídit auto.');
}



// 2)
let cislo1 = Number(prompt('Zadej cislo A: '));
let cislo2 = Number(prompt('Zadej cislo B: '));
let cislo3 = Number(prompt('Zadej cislo C: '));

let a = cislo1 > cislo2;
let b = cislo1 > cislo3;

let c = cislo2 > cislo3;
let d = cislo2 > cislo1;

if (a && b) {
  console.log ('najvacsie cislo je A: ' + cislo1);
} else if (c && d){
  console.log ('najvacsie cislo je B: ' + cislo2);
} else if (cislo3 > cislo, && cislo3 > cislo2) {
  console.log ('najvacsie cislo je C: ' + cislo3);
} else {
  console.log('Niektore z cisiel su si rovne.');
}



