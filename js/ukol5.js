/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()
*/

/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.
*/


//1)
function vypisMatematickeOperace(x, y){
  let soucet = x + y;
  let rozdil = Math.abs(x - y);
  let nasobek = x * y;
  let podil = x / y;

  console.log('soucet je: ' + soucet + ', rozdil je: ' + rozdil + ' ,nasobek je: ' + nasobek + ' a podil je: ' + podil);

}

vypisMatematickeOperace (10, 5);