//Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32. Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8.

const resultado=document.getElementById("resultado")
const boton_c=document.getElementById("boton_c")
const boton_f=document.getElementById("boton_f")
let numero=document.getElementById("grados")
let variacion=document.getElementById("variacion")
let operacion_f_c=0;
let operacion_c_f=0;
let max=100;
let min=0;
let regla_3=0;


boton_c.addEventListener("click",boton_cel);
function boton_cel(){
    operacion_f_c=(numero.value-32)/1.8;
    resultado.innerHTML='';
    resultado.innerHTML=`${operacion_f_c.toFixed(1)}°`;
    if(operacion_f_c>100){
        variacion.style.width=`${max}%`
    }else if(operacion_f_c<0){
        variacion.style.width=`${min}%`
    }else{
        variacion.style.width=`${operacion_f_c}%`;
    }
}
boton_f.addEventListener("click",boton_fa);
function boton_fa(){
    operacion_c_f=(numero.value*1.8+32);
    resultado.innerHTML='';
    resultado.innerHTML=`${operacion_c_f.toFixed(1)}°`;
    regla_3=(operacion_c_f*100)/212
    variacion.style.width=`${operacion_f_c}%`;
    if(regla_3>212){
        variacion.style.width=`${max}%`
    }else if(regla_3<0){
        variacion.style.width=`${min}%`
    }else{
        variacion.style.width=`${regla_3}%`;
    }
}
  