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

let BMI = hmotnost / vyska**2;
let veta = 'Jmenuji se ' + jmeno + ', je mi ' + vek + ' let' + ', vážím ' + hmotnost + ' kg, měřím ' + vyskaMetry + ' m a moje BMI je ' + BMI +'.'

console.log(veta);