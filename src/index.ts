let cantidadTotal: number = Number(prompt("cuantos numeros quiere ingresar?"));
let numerosIngresados: number[] = [];
let cantidadNegativos: number = 0;
let cantidadPositivos: number = 0;
let cantidadCeros: number = 0;

// for (let i: number = 0; i < cantidadTotal; i++) {
//   let numeroIngresado = Number(prompt("Ingrese un numero"));
//   numerosIngresados[i] = numeroIngresado;
//   if (numeroIngresado == 0) {
//     cantidadCeros++;
//   } else if (numeroIngresado < 0) {
//     cantidadNegativos++;
//   } else if (numerosIngresado > 0) {
//     cantidadPositivos++;
//   }
// }

function cargarArreglo() {
  for (let i: number = 0; i < cantidadTotal; i++) {
    let numeroIngresado = Number(prompt("Ingrese un numero"));
    numerosIngresados[i] = numeroIngresado;
  }
}

function calcularCatidades() {
  for (let i: number = 0; i < numerosIngresados.length; i++) {
    if (numerosIngresados[i] == 0) {
      cantidadCeros++;
    } else if (numerosIngresados[i] < 0) {
      cantidadNegativos++;
    } else if (numerosIngresados[i] > 0) {
      cantidadPositivos++;
    }
  }
}

cargarArreglo();
calcularCatidades();

console.log("Numeros ingresados: ", numerosIngresados);
console.log("Cantidad de numeros positivos: ", cantidadPositivos);
console.log("Cantidad de numeros negativos: ", cantidadNegativos);
console.log("Cantidad de ceros: ", cantidadCeros);
6;
