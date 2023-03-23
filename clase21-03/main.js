let btn = document.getElementById('boton');
let nombre1 = document.getElementById('nombre');
let apellido1 = document.getElementById('apellido');
let edad1 = document.getElementById('edad');
let infor = document.getElementById('Info');
let html = "";

function guardarinfo(){
    console.log(nombre1.value);
    console.log(apellido1.value);
    console.log(edad1.value);

    html = `



    <tr class="border border-2 flex flex-col">
        <div class="flex flex-grow">
            <td>Nombre: </td>
            <th>${nombre1.value}</th>
        </div>
        <div class="flex flex-grow">
            <td>Apellido: </td>
            <th>${apellido1.value}</th>
        </div>
        <div class="flex flex-grow">
            <td>Edad: </td>
            <th>${edad1.value}</th>
        </div>
    </tr>
   

    `;

    infor.innerHTML=html;
}
