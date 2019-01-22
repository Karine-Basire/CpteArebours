

var centi=0 // initialise les dixièmes
var secon=0 //initialise les secondes
var minu=0 //initialise les minutes


var demarre = document.getElementById('demarre').value;
var pause = document.getElementById('pause').value;
var efface = document.getElementById('efface').value;


function chrono(){
centi++; //incrémentation des dixièmes de 1
if (centi>9){centi=0;secon++} //si les dixièmes > 9,
//on les réinitialise à 0 et on incrémente les secondes de 1
if (secon>59){secon=0;minu++} //si les secondes > 59,
//on les réinitialise à 0 et on incrémente les minutes de 1
document.secondes.c.value=" "+centi //on affiche les dixièmes
document.secondes.a.value=" "+secon //on affiche les secondes
document.secondes.b.value=" "+minu //on affiche les minutes
compte=setTimeout('chrono()',100) //la fonction est relancée
//tous les 10° de secondes
}

function rasee(){ //fonction qui remet les compteurs à 0
document.getElementById("demarre").action=false;
centi=0;
secon=0;
minu=0;
document.secondes.c.value=" "+centi
document.secondes.a.value=" "+secon
document.secondes.b.value=" "+minu
}
function stop(){
      clearTimeout(compte);//arrête la fonction chrono()
      document.getElementById("demarre").action=false;
      }

 window.addEventListener("load",function(){
document.getElementById('demarre').addEventListener('click', chrono);
document.getElementById('pause').addEventListener('click', stop);
document.getElementById('efface').addEventListener('click', rasee);
 });

