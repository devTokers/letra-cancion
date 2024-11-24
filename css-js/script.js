window.onload = function() {
  var lyrics = document.querySelector(".contenedor-large");
  var popup = document.querySelector(".contenedor-box");


  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }


  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0; 

function closeAlert() {
  var lyrics = document.querySelector(".contenedor-large");
  var songLines = [
      

      "Dime si algún día sentiré tu cuerpo otra vez",
"Algo me dice que quieres volverme a ver",
"Oye, baby, desde esa noche, no paro de pensar en ti",
"Tú bien sabes que soy tu hombre, porque él no te hace sentir",
"Él nunca supo amarte como yo lo sé",
"Él no conoce cada espacio de tu piel",
"Sé que no soy perfecto, pero te diré",
"Él no sabe cómo tratar a una mujer"
      
  ];

  currentIndex = (currentIndex + 1) % songLines.length; 
  lyrics.textContent = songLines[currentIndex]; 
}
