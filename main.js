document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("punto").addEventListener("click",punto);
document.getElementById("s").addEventListener("click",op1);
document.getElementById("r").addEventListener("click",op2);
document.getElementById("d").addEventListener("click",op3);
document.getElementById("m").addEventListener("click",op4);
document.getElementById("porciento").addEventListener("click",op5);
document.getElementById("sr").addEventListener("click",sresultado);
document.getElementById("limp").addEventListener("click",limpiar);

function limpiar(){
    document.getElementById('resultado').innerHTML="";
}
function n1(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n1").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado;
}
function n2(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n2").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n3(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n3").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n4(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n4").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n5(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n5").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n6(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n6").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n7(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n7").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n8(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n8").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n9(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n9").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function n0(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("n0").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function punto(){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("punto").innerHTML;
    document.getElementById('resultado').innerHTML=actual+sumado
}
function op1 (){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("s").innerHTML;
    document.getElementById('resultado').innerHTML=actual + sumado 

}
function op2 (){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("r").innerHTML;
    document.getElementById('resultado').innerHTML=actual+ sumado 

}
function op3 (){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("d").innerHTML;
    document.getElementById('resultado').innerHTML=actual + sumado 

}
function op4 (){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("m").innerHTML;
    document.getElementById('resultado').innerHTML=actual + sumado 

}
function op5 (){
    let actual=document.getElementById('resultado').innerHTML;
    let sumado=document.getElementById("porciento").innerHTML;
    document.getElementById('resultado').innerHTML=actual + sumado 
}
function sresultado(){
   let actual=document.getElementById('resultado').innerHTML;
   let suma=actual.indexOf("+");
   let resta=actual.indexOf("-");
   let div=actual.indexOf("÷");
   let multi=actual.indexOf("*");
   let porcien=actual.indexOf("%");
   if(suma!== -1){
       arr=actual.split("+",2);
       res=parseInt(arr[0,0]) + parseInt(arr[1,1]);
       document.getElementById("resultado").innerHTML=res;
   }
   else if(resta!== -1){
    arr=actual.split("-",2);
    res=parseInt(arr[0]) - parseInt(arr[1]);
    document.getElementById("resultado").innerHTML=res;

   }
   else if(div!== -1){
    arr=actual.split("÷",2);
    res=parseInt(arr[0]) / parseInt(arr[1]);
    document.getElementById("resultado").innerHTML=res;
   }
   else if(multi!== -1){
    arr=actual.split("*",2);
    res=parseInt(arr[0]) * parseInt(arr[1]);
    document.getElementById("resultado").innerHTML=res;
   }
   else if(porcien!== -1){
    arr=actual.split("%",2);
    res=parseInt(arr[0]) % parseInt(arr[1]);
    document.getElementById("resultado").innerHTML=res;
   }
}