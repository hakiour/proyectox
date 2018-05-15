window.onload = loadXMLDoc;
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "../xml/noticias.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table;
  var x = xmlDoc.getElementsByTagName("NOTICIA");
  for (i = 0; i <x.length; i++) {
    table += "<div class='jumbotron'><div id='header'><h1 class='header text-center text-uppercase' id='target1'><u>" +
    x[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue +
    "</u></h1><h2 class='title text-center text-uppercase' id='target2'><em>" +
    x[i].getElementsByTagName("DESCRIPCION")[0].childNodes[0].nodeValue +
    "</em></h2><div class='thumbnail'>          <img class='img-responsive center-block zoom' src='../images/ralarsaPortada.png' height='100px' id='target3' alt 'Imagen portada'>          <div class='caption text-center' id='target4'>            Imagen extraída de la revista Ralarsa News - Edición 9          </div>        </div></div> <div id='context' class='text-justify'>        <h3 id='target5'>Introducción</h3> Es evidente que el sector del automóvil se encuentra inmerso en una profunda transformación, liderando lo que se ha denominado “Industria 4.0”.        <br>        <br>        <citer class='text-left' id='target7'>          Auto Cristal Ralarsa 2017 - 2018        </citer>        <h3 class='text-center' id='target8'><a href='noticias/noticia-1.html'> Seguir leyendo </a></h3> </div>     </div>";

  }
  document.getElementById("ultimasNoticias").innerHTML = table;
}