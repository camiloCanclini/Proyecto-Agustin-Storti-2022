


var btn = document.getElementById('active');
const caja = document.getElementById('caja');


function cambio() {
    if (caja.classList == 'btn__info') {
        document.getElementById('active').innerHTML = 'More details';
    }
    else {document.getElementById('active').innerHTML = 'Less details';}
   var box = caja.classList; 
   box.toggle('btn__info--hidden')
}

