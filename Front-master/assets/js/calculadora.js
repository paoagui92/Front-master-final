document.getElementById("calcularPrecio").addEventListener("click", calcular);
document.getElementById("Descuento").addEventListener("click", calcular);


function calcular()
{
    let costo=0;
    let preciofinal=0;
    let radios=document.forms["calcularPrecio"].querySelectorAll("input[type=radio]:checked");
    
    
    radios.forEach(function(valor){
        costo=costo+parseInt(valor.value);
        console.log(costo)
    });
    

    calDescuento()
}

function calDescuento(){
    let descuento=document.forms["Descuento"].querySelectorAll("input[type=radio]:checked")[0].value;

    let valorWeb=parseInt( document.forms["calcularPrecio"].elements.opWeb.value);
    let valorDeb=parseInt( document.forms["calcularPrecio"].elements.opDWeb.value);
    let valorCM=parseInt( document.forms["calcularPrecio"].elements.opCM.value);

    let ManWeb= parseFloat(valorWeb)*0.30;
    let MantCM= parseFloat(valorCM);

    let mensaje="";
    
    console.log('valorWeb'+valorWeb)
    console.log('valorDeb'+valorDeb)
    console.log('valorCM'+valorCM)


    switch(descuento){
        case "2":
    // 6 meses mantenimiento
        console.log("case2")
        ManWeb= ManWeb*5;
        MantCM= MantCM*3
            break;
        case "3":
    // 12 meses mantenimiento
    console.log("case3")
        ManWeb= ManWeb*10;
        MantCM= MantCM*6
            break;

        default:
            ManWeb=valorWeb;
            MantCM=valorCM;
            

    }

    preciofinal=parseFloat(ManWeb)+parseFloat(valorDeb)+parseFloat(MantCM);
    console.log('ManWeb '+ManWeb+' valorDeb'+valorDeb+' MantCM '+MantCM )
    console.log(`Precio final: ${preciofinal}`);
    mensaje=`  ${preciofinal}`;
    document.getElementById("precioFinal").innerText=mensaje;
}

