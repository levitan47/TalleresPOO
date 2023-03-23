const arreglo=[];
let cedula = document.getElementById('cedula');
let nombre = document.getElementById('nombre');
let apellidos = document.getElementById('apellidos');
let fechanacimiento = document.getElementById('fechanacimiento');
let tabla = document.getElementById('ingresodatos');
let html = "";

class Persona{
    cedula
    nombre
    apellidos
    fechanacimiento

    constructor(cedula, nombre, apellidos,fechanacimiento ){
        this.cedula=cedula
        this.nombre=nombre
        this.apellidos=apellidos
        this.fechanacimiento=fechanacimiento
    }

    calcularedad(){
        var hoy = new Date();
        var cumpleanos = new Date(this.fechanacimiento);
        this.edad = hoy.getFullYear() - cumpleanos.getFullYear();
        return this.edad;
    }

    nombrecompleto(){
        var info = (this.nombre + " " + this.apellidos);
        return info;
    }

    cumpleanios(){
        var hoy = new Date()
        var hoydia = hoy.getDate();
        var cumpleanos = new Date(fechanacimiento.value);
        var diacumple = cumpleanos.getDate();
        var diacumple = diacumple+1;

        var mesactual = hoy.getMonth();
        var mescumple = cumpleanos.getMonth();
        var cumple = null;
        console.log(hoydia);;
        console.log(mesactual);
        console.log(diacumple);
        console.log(mescumple);
        let siono = null;


        if(hoydia == diacumple){

            if(mesactual==mescumple){
                cumple="SI";
                siono = 1;
                return cumple;
            }else{
                cumple="NO";
                siono = 0;
                return cumple;
            }
           
        }else if(diacumple != hoydia){
            cumple="NO";
            siono = 0;
            return cumple;
        }

        console.log(cumple);
    }

};

let submit = document.getElementById("submit")

submit.addEventListener("submit", guardardatos)


function guardardatos(e){
    e.preventDefault()

        const nuevapersona = new Persona(cedula.value ,nombre.value, apellidos.value, fechanacimiento.value);

        arreglo.push(nuevapersona);
        console.log(nuevapersona);
        console.log(arreglo);
    
        console.log("La cedula es: " + nuevapersona.cedula);
        console.log("El nombre es: " + nuevapersona.nombre);
        console.log("Su cedula es: " + nuevapersona.apellidos);
        console.log("Su fehca de nacimiento es: " + nuevapersona.fechanacimiento);
        console.log("La edad es: " + nuevapersona.calcularedad() + " años");
    
        console.log(nuevapersona.nombrecompleto());
        console.log("Hoy es su cumpleaños? (SI/NO) " + nuevapersona.cumpleanios());

        html += `

        <tr class="flex flex-grow justify-center text-center m-1" >
            <td class="border border-white w-[10rem] mt-[2px]">${nuevapersona.nombrecompleto()}</td>
            <td class="border border-white w-[10rem] mt-[2px]">${nuevapersona.cumpleanios()}</td>
        </tr>

            `;
        
        tabla.innerHTML=html;

        const a =nuevapersona.nombrecompleto()
        localStorage.setItem("nombreco", a)
        localStorage.setItem("cumpleañ", nuevapersona.cumpleanios())
        localStorage.setItem("cumple", nuevapersona.fechanacimiento)


}

