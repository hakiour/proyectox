//Cuando se hace click en el botón, subimos arriba del todo
var velocidadSubida = 5; //Especificamos la velocidad, cuanto más alto sea su valor, más lenta es la animación.
var toTop = document.getElementById("goToTop");
  toTop.addEventListener("click", function(){
  scrollToTop(1000);
});
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },velocidadSubida);
}