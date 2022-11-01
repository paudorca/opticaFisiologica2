var visual = localStorage.getItem("visualAcucity");
var boleano = localStorage.getItem("menor");

var valResult = 'YOUR VISUAL ACUITY IS ' + (parseFloat(visual)-0.1).toFixed(1); 
var valResult0 = 'YOUR VISUAL ACUITY IS LOWER THAN 0.1'; 

window.addEventListener("load", function() { 
    if (boleano == 'false') document.getElementById("text").innerHTML = valResult;
    else document.getElementById("text").innerHTML = valResult0; 
});