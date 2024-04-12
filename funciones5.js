
let contador = document.getElementById('contador').firstChild;


function incrementarContador() {
    let valorActual = parseInt(contador.nodeValue); 
    contador.nodeValue = valorActual + 1; 
}


setInterval(incrementarContador, 1000);
