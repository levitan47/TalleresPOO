let nombrecompleto = localStorage.getItem('nombreco');
let cumpleaños = localStorage.getItem('cumpleañ');
let cumplea = new Date(localStorage.getItem("cumple"));

const nom = document.getElementById('paranombre');



let fecha1 = new Date(cumplea); //fecha ingresada
let fecha3 = new Date(); //fecha de hoy
let diasDeDiferencia = 0;
let diferencia = 0;
let mes = fecha3.getMonth()+1 
let dia = fecha3.getDate()

let cumpledif = fecha1.getFullYear() + "-" + mes + "-" + dia    ;

let fecha2 = new Date(cumpledif).getTime();

    if(fecha2>fecha1){
        diferencia = fecha2 - fecha1.getTime();
        diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
        diasDeDiferencia = (parseInt(diasDeDiferencia)-365)*-1
    }else{
        diferencia = fecha2 - fecha1.getTime();
        diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
        diasDeDiferencia = (parseInt(diasDeDiferencia)-1)*-1
    }


console.log(diasDeDiferencia); 


if(cumpleaños=="SI"){

    const html=`

    <div class="flex justify-center items-center">


        <div class="flex flex-col justify-center text-white text-2xl">
            <h1>nombre: ${nombrecompleto}</h1>
            <h2>cumple años?  ${cumpleaños}</h2>
        </div>
    </div>

    <div class="mt-[2rem] w-[23rem] flex flex-grow justify-center items center bg-[#0E100E]">
        <img class="w-[8rem] mr-2" src="img/calaz.gif" alt="">
        <h1 class="text-2xl text-white mt-12">¡¡Feliz Cumpleaños!!</h1>
    </div>
    <a class="border border-black bg-white rounded-lg mt-1 ml-[8.2rem]" href="index.html">Volver al inicio</a>


    `
nom.innerHTML=html;

}else if(cumpleaños=="NO"){

    const html=`
    <div class="flex justify-center items-center">


        <div class="flex flex-col justify-center text-white text-2xl">
            <h1>nombre: ${nombrecompleto}</h1>
            <h2>cumple años? ${cumpleaños}</h2>
        </div>
    </div>

    
    <div class="mt-[2rem] w-[23rem] h-[7rem] flex flex-grow justify-center items center bg-[#0E100E]">
        <img class="w-[8rem] mr-2" src="img/falta-poco.gif" alt="">
        <h1 class="text-2xl text-white mt-12">Faltan ${diasDeDiferencia} dias, debes esperar</h1>
    </div>
    <a class="border border-black bg-white rounded-lg mt-1 ml-[8.2rem]" href="index.html">Volver al inicio</a>

    `
nom.innerHTML=html;

}
