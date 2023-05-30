function procesar() {
    var texto = document.getElementById('texto').value;
    var opcion = document.querySelector('input[name="opcion"]:checked').value;
    var resultado = document.getElementById('resultado');

    if (opcion === 'encriptar') {
        resultado.value = encriptar(texto);
    } else if (opcion === 'desencriptar') {
        resultado.value = desencriptar(texto);
    }
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

function desencriptar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

function copiar() {
    var resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
