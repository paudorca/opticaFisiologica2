var fotoRoja; //indica en quina posicio esta el borde vermell, es a dir la imatge seleccionada
var numeroFallos = 0; 
var contador; 
var valorDistance = localStorage.getItem("distanceInput"); 
var valorSquare = localStorage.getItem("squareInput"); 
visualAcucity = 0.1; 
visualAcucityText = 0.1; 
contador = 0;
counterVal = 1; 
contadorFallos = 0;
var numerofoto = 1; 
var menorQue1 = 'true'; 
var orientacion1; 
var orientacion2; 
var orientacion3;
var orientacion4; 
var orientacion5;

window.addEventListener("load", function() { 
    fotoRoja = 1; //comença per la primera E
    document.getElementById('foto1').className = "border border-danger";
    giraFotos(); 
    conversio();
    localStorage.setItem("menor",'true');
});

//incrementa el numero de respostes
function incrementClick() {
    ++counterVal; 
    if (counterVal == 26) {
        var win = window.open("resultat.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
         win.focus();
    }
    visualAcucityText += 0.1; 
    var texto = 'Visual Acucity ' + Math.round(visualAcucityText * 10) / 10; 
    document.getElementById('acucity').innerHTML = texto; 
    var valResult = counterVal + ' / 25'
    document.getElementById("counter-label").innerHTML = valResult;
}

//conversio de mm a pixels
function conversio() {
    s = (0.29*valorDistance)/visualAcucity; // s en mm, l'ampla i l'alçada de la E es 5 cops "s"
    result = s*5;
    factor = result/valorSquare; 
    pixels = 150*factor; 
    var pixels = Math.round(pixels);
    var text = pixels.toString(10);
    document.getElementById("foto1").style.width= text+"px"; 
    document.getElementById("foto1").style.height=text+"px";

    document.getElementById("foto2").style.width= text+"px"; 
    document.getElementById("foto2").style.height=text+"px";

    document.getElementById("foto3").style.width= text+"px"; 
    document.getElementById("foto3").style.height=text+"px";

    document.getElementById("foto4").style.width= text+"px"; 
    document.getElementById("foto4").style.height=text+"px";

    document.getElementById("foto5").style.width= text+"px"; 
    document.getElementById("foto5").style.height=text+"px";
}

//rota cadascuna de les 5 imatges en un angle aleatori
function rotate(variable,turnAngle) {
    document.getElementById(variable).setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
}

function todo() {
    cambiaBorde(); 
    ++contador; 
    ++numerofoto; 
    if (contador%5 == 0) {
        giraFotos(); 
        visualAcucity += 0.1; 
        conversio(); 
        incrementClick(); 
        numeroFallos = 0; 
        numerofoto = 1; 
    }
    if (visualAcucity > 0.1 && numerofoto > 1) localStorage.setItem("menor",'false');
}

function adalt() {
    if (getOrientacioActual() != 'adalt') ++numeroFallos; 
    localStorage.setItem("visualAcucity",visualAcucity);
        if (numeroFallos == 3) {
        var win = window.open("resultat.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
         win.focus();
    }
    todo();
}

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    
    if (keyValue == 'ArrowRight') {
        dreta(); 
    }
    else if (keyValue == 'ArrowLeft') {
        esquerra(); 
    }
    else if (keyValue == 'ArrowUp') {
        adalt(); 
    }
    else if (keyValue == 'ArrowDown'){
        abaix();
    }
  }, false);

function getOrientacioActual() {
    if (numerofoto == 1) {
        return orientacion1; 
    }
    else if (numerofoto == 2) {
        return orientacion2; 
    }
    else if (numerofoto == 3) {
        return orientacion3; 
    }
    else if (numerofoto == 4) {
        return orientacion4; 
    }
    else if (numerofoto == 5) {
        return orientacion5; 
    }
}

function esquerra() {
    if (getOrientacioActual() != 'esquerra') ++numeroFallos; 
    localStorage.setItem("visualAcucity",visualAcucity);
    if (numeroFallos == 3) {
        var win = window.open("resultat.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
         win.focus();
    }
    todo(); 
}

function abaix() {
    if (getOrientacioActual() != 'abaix') ++numeroFallos; 
    localStorage.setItem("visualAcucity",visualAcucity);
    if (numeroFallos == 3) {
        var win = window.open("resultat.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
         win.focus();
    }
    todo(); 
}

function dreta() { 
    if (getOrientacioActual() != 'dreta') ++numeroFallos; 
    localStorage.setItem("visualAcucity",visualAcucity);
    if (numeroFallos == 3) {
        var win = window.open("resultat.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
         win.focus();
    }
    todo();
}

function cambiaBorde() {
    if (fotoRoja == 1) {
        document.getElementById('foto1').className = "";
        document.getElementById('foto2').className = "border border-danger";
        fotoRoja = 2; 
    }
    else if (fotoRoja == 2) {
        document.getElementById('foto2').className = "";
        document.getElementById('foto3').className = "border border-danger";
        fotoRoja = 3; 
        }
    else if (fotoRoja == 3) {
        document.getElementById('foto3').className = "";
        document.getElementById('foto4').className = "border border-danger";
        fotoRoja = 4; 
    }
    else if (fotoRoja == 4) {
        document.getElementById('foto4').className = "";
        document.getElementById('foto5').className = "border border-danger";
        fotoRoja = 5; 
    }
    else if (fotoRoja == 5) {
        document.getElementById('foto5').className = "";
        document.getElementById('foto1').className = "border border-danger";
        fotoRoja = 1; 
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function giraFotos() {
    var n1 = getRandomInt(1,4)*90; 
    var n2 = getRandomInt(1,4)*90; 
    var n3 = getRandomInt(1,4)*90; 
    var n4 = getRandomInt(1,4)*90; 
    var n5 = getRandomInt(1,4)*90;

    rotate("foto1",n1); 
    rotate("foto2",n2);
    rotate("foto3",n3);
    rotate("foto4",n4);
    rotate("foto5",n5);

    getOrientaciones(n1,n2,n3,n4,n5); 
}

function getOrientaciones(n1, n2, n3, n4, n5) {
    orientacion1 = haciaDonde(n1); 
    orientacion2 = haciaDonde(n2); 
    orientacion3 = haciaDonde(n3); 
    orientacion4 = haciaDonde(n4); 
    orientacion5 = haciaDonde(n5); 
}

function haciaDonde(n) {
    if (n == 90) return 'abaix'; 
    else if (n == 180) return 'esquerra'; 
    else if (n == 270) return 'adalt'; 
    else if (n == 360) return 'dreta'
}
