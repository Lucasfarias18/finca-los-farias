let subtotalVino = 0;
let subtotalCompania = 0;
let edadUsuario = prompt("Ingrese su edad");
ingresar=true

if(edadUsuario>=18){
    console.log("Edad legal")
    let nombreCliente= prompt("Ingrese su nombre")
    console.log(nombreCliente)
    alert("Bienvenido a Finca Los Farias,"+" "+nombreCliente)
}else{
    alert("Todavía no eres mayor de edad. Lo sentimos");
    console.log ("Acceso denegado. Menor de edad");
    ingresar=false
}


let personas = prompt("¿Cuantas personas asistirán?");

  for (let i = 0; i < personas; i++) {
    let sumaVino= 0; 
    let sumaCompania= 0;
    let nombre = prompt("Nombre del catador " + (parseInt(i) + 1));
    console.log("Vino para " + nombre);

    let vino;

    do {
      vino = prompt(
        "¿Qué vino degustará hoy " + nombre +
          "? \n Seleccione Varietal \n 1) Malbec  \n 2) Syrah  \n 3) Cabernet  \n 4) Siguiente"
      );

      if (parseInt(vino) !== 4) {
        console.log(nombre + " pidió para tomar la opción " + vino);
      }

      switch (parseInt(vino)) {
        case 1:
          sumaVino += 50000;
          break;
        case 2:
          sumaVino += 40000;
          break;
        case 3:
          sumaVino += 30000;
          break;
        case 4:
          alert("Perfecto! Ahora hay que elegir con qué completamos tu experiencia");
          break;
        default:
          alert("No existe esa opción");
          break;
      }
    } while (parseInt(vino) !== 4);

    let compania;

    do {
      compania = prompt(
        "¿Con qué acompañará " + nombre +
          "?\n 1) Invitación de la casa  \n 2) Quesos  \n 3) Chocolates  \n 4) Carnes  \n 5) Completado \n"
      );
      if (parseInt(compania) !== 5) {
        console.log(nombre + " pidió para acompañar la opción " + compania);
      }

      switch (parseInt(compania)) {
        case 1:
          sumaCompania += 0;
          break;
        case 2:
          sumaCompania += 8000;
          break;
        case 3:
          sumaCompania += 6000;
          break;
        case 4:
          sumaCompania += 10000;
          break;
        case 5:
          alert("SU SELECCIÓN YA FUE REGISTRADA!");
          break;
        default:
          alert("No existe esa opción");
          break;
      }
    } while (parseInt(compania) !== 5);

    console.log("Subtotal de Vino para " + nombre + ": " + sumaVino);
    console.log("Subtotal de Compania para " + nombre + ": " + sumaCompania);

    subtotalVino += sumaVino;
    subtotalCompania += sumaCompania;
  }
  if(subtotalVino || subtotalCompania >0){

  console.log("EL TOTAL A COBRAR ES $" + (subtotalVino + subtotalCompania));
  document.write("EL TOTAL A ABONAR ES $" + (subtotalVino + subtotalCompania) +". Esperamos que disfruten y vuelvan pronto!")
  }