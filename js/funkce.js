
function vratPet (){
  return 5;
}

let a = vratPet;
console.log(a);

function helloWorld () {
  console.log("ahoj svete");

}

function sectiDveCisla(prvni, druhe) {
  return prvni + druhe;
}

let vysledek =  sectiDveCisla(10, 15) 
console.log(vysledek);


function najvacsieCislo (x,y,z) {
  if (x>y) {
    if (x>z) {
      return x;
    } else {
      return z;
    } else {
      if (y>z) {
        return y;
      }else {
        return z;
      }
    }
  }
}

let vysledek2 = najvacsieCislo (10, 21, 11);
console.log(vysledek2);

function zistiCisloOdUzivatela () {
  return Number(prompt('zadej cislo'));
}
console.log(zistiCisloOdUzivatela);