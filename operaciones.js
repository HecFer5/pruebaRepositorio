var a;
var b;
var result;
function init() {
    var resultado = document.getElementById("resultado")
    var visorChico = document.getElementById("visor-chico")

    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var multiplica = document.getElementById("multiplica")
    var divide = document.getElementById("divide")

    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatrocinco = document.getElementById("cuatrocinco")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")
    var punto = document.getElementById("punto")
    var ce = document.getElementById("ce")

    // EVENTOS
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2"
    }

    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0"
    }

    ce.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        a = resultado.textContent;
        visorChico.textContent = "WWW";
        result = "+";
       limpiar()

    }

    resta.onclick = function (e) {
        a = resultado.textContent;
        result = "-";
        limpiar();
    }
    multiplica.onclick = function (e) {
        a = resultado.textContent;
        result = "*";
        limpiar();
    }
    divide.onclick = function (e) {
        a = resultado.textContent;
        result = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        b = resultado.textContent;
        resolver();
    }
    function limpiar(e) {
        resultado.textContent = ""
    }

    function resetear(e) {
        resultado.textContent = "";
        a = 0;
        b = 0;
        result = ""
    }

    function resolver(e) {
        var res = 0
        switch (result) {
            case "+":
                res = parseInt(a) + parseInt(b)
                break;
            case "-":
                res = parseInt(a) - parseInt(b);
                break;
            case "*":
                res = parseInt(a) * parseInt(b);
                break;
            case "/":
                res = parseInt(a) / parseInt(b);
                break;


        }
        resetear();
        resultado.textContent = res
    }

}


// function suma(a, b) {
//     return reslutsuma = a + b
// }

// let x = 2
// let y = 4


// console.log(suma(x, y))