function km_to_m(){
    let km = parseFloat(document.getElementById("entradadKilometos").value)
    let m = document.getElementById("salidaMetros")
    if(km > 0){
        m.value = km*1000        
    }
    else{
        alert("la cantidad no puede ser negativa, no existen distancias negativas")
    }
}
function m_to_cm(){
    let m = parseFloat(document.getElementById("entradadMetros").value)
    let cm = document.getElementById("salidaCentimetros")
    if(m > 0){
        cm.value = m*100        
    }
    else{
        alert("la cantidad no puede ser negativa, no existen distancias negativas")
    }
}
function ft_to_pulg(){
    let ft = parseFloat(document.getElementById("entradadPies").value)
    let pulg = document.getElementById("salidaPulgadas")
    if(ft > 0){
        pulg.value = ft*12        
    }
    else{
        alert("la cantidad no puede ser negativa, no existen distancias negativas")
    }
}
function YD_to_Pulg(){
    let yd = parseFloat(document.getElementById("entradadYarda").value)
    let pulg = document.getElementById("salidaPulgadas-YD")
    if(yd > 0){
        pulg.value = yd*36        
    }
    else{
        alert("la cantidad no puede ser negativa, no existen distancias negativas")
    }
}