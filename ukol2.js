/*
ZADANI:
Úkol - proměnné a operátory
1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".
*/

let jmeno = 'Petra';
let vek = 34;
let hmotnost = 65;
let vyska = 1.67;

let bmi = hmotnost / (vyska**2);
let veta = 'Jmenuji se ' + jmeno + ', je mi ' + vek + ' let, vážím ' + hmotnost + ' kg, měřím ' + vyska + ' m a moje BMI je ' + bmi +'.'

console.log(veta);

let zaokruhleneBmi = Math.round((bmi*100)/100);
console.log(zaokruhleneBmi);

let bmi2 = Math.round((hmotnost / (vyska**2))*100)/100);
console.log(bmi2);