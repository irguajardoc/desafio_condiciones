
let cant = 0
const clk = document.getElementById("imgdog");

clk.addEventListener("click", function () {
    if (cant == 0){
        clk.style.border = "2px solid red";
        clk.style.margin = "2px";
    cant++
    }else{
        cant--
        clk.style.border = "none";
        clk.style.margin = "0";
    }
});


let msj = "";
let resul = 0;

const valida = document.querySelector("#validacion");
const btn = document.getElementById("boton");
const st1 = document.getElementById("st1");
const st2 = document.getElementById("st2");
const st3 = document.getElementById("st3");

resul = Number(st1.value) + Number(st2.value) + Number(st3.value);

btn.addEventListener("click", function () {

    resul = Number(st1.value) + Number(st2.value) + Number(st3.value);

    if(resul > 10){
        valida.innerHTML = "Llevas demasiados Stikers";
    }else {
        valida.innerHTML = "Llevas " + resul + " Stikers"
    }     
});


let clave = "";
const ps1 = document.getElementById("ps1");
const ps2 = document.getElementById("ps2");
const ps3 = document.getElementById("ps3");
const btnps = document.getElementById("btnps");
const clv = document.getElementById("clave")

btnps.addEventListener("click", function () {

 clave = (ps1.value) + (ps2.value) + (ps3.value);
 
 if(clave === "911"){
    clv.innerHTML = "password 1 correcto";
 }else if (clave === "714"){
    clv.innerHTML = "password 2 correcto";
 }else {
    clv.innerHTML = "password incorrecto";
 }
 
    
});
