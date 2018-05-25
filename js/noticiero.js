window.onload = loadXMLDoc; 
function loadXMLDoc() {
  //Funcionq ue carga el fichero XML
  var xmlhttp = new XMLHttpRequest();
  
  xmlhttp.onreadystatechange = function() {
    //Una vez cargado, llamamos a la función que llena el noticiero con las noticias
    if (this.readyState == 4 && this.status == 200) {
      cargarContenido(this);
    }
  };
  xmlhttp.open("GET", "../xml/noticias.xml", true);
  xmlhttp.send();
}
function cargarContenido(xml) {
  //Insertamos las noticias dentro de la estructura HTML
  var xmlDoc = xml.responseXML;
  var contenido = "";
  var x = xmlDoc.getElementsByTagName("noticia");
  for (var indice = 0; indice <x.length; indice++) {
    contenido += "<div class='jumbotron'><div id='header'><h1 class='header text-center text-uppercase' id='target1'><u>" +
    x[indice].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
    "</u></h1><h2 class='title text-center text-uppercase' id='target2'><em>" +
    x[indice].getElementsByTagName("subtitulo")[0].childNodes[0].nodeValue +
    "</em></h2><div class='thumbnail'><center><img class='img-responsive center-block zoom' src='../images/noticias/" +
    x[indice].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + "' heigt='100px' id='target3' alt 'Imagen portada'></center>          <div class='caption text-center' id='target4'>            Todos los derechos reservados          </div>        </div></div> <div id='context' class='text-justify'>        <h3 id='target5'>Introducción</h3> "+
    x[indice].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue + "         <br>        <br>        <citer class='text-left' id='target7'>          HamRub 2017 - 2018        </citer>        <h3 class='text-center' id='target8'><a href='noticias/"+
    x[indice].getElementsByTagName("link")[0].childNodes[0].nodeValue + "'> Seguir leyendo </a></h3> </div>     </div>";

  }
  document.getElementById("ultimasNoticias").innerHTML = contenido;
}