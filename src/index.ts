let aulaAzul: number = 40;
let aulaVerde: number = 35;
let aulaAmarilla: number = 30;

let alumIn: number = Number(prompt(`ingrese cantidad de Alumnos:`));

if (alumIn <= aulaAmarilla) {
  console.log(`AMARILLA`);
} else {
  if (alumIn <= aulaVerde) {
    console.log(`VERDE`);
  } else {
    if (alumIn <= aulaAzul) {
      console.log(`AZUL`);
    } else {
      console.log(`No hay aula con Capacidad para esa cantidad`);
    }
  }
}
