const texto = "Portafolio de:";
const textoEscrito = document.getElementById("name");
const subtitle = document.getElementById("subtitle");

subtitle.textContent = "Paz Miqueas </>";

let i = 0;

function typeWriter() {
    if (i < texto.length) {
        textoEscrito.textContent += texto[i];
        i++;
        setTimeout(typeWriter, 100);
    }
}


typeWriter();
