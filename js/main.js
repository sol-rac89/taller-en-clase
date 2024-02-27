function saludo() {
  alert("Bienvenido");
}

function suma() {
 
  let a = 0;
  let b = 0;
  let sum = 0;
  
  a = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
  b = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
 
  s = a + b;
 

  alert("El resultado de la suma es " + s);
  console.log("El resultado de la suma es " + s);
}

function opBasicas() {
  
  let a = 0;
  let b = 0;
  let s = 0;
  let rest = 0;
  let mult = 0;
  let div = 0;

  
  a = parseInt(prompt("Por favor ingrese el primer valor"));
  b = parseInt(prompt("Por favor ingrese el segundo valor"));

  s = a + b;
  rest = a - b;
  mult = a * b;
  div = a / b;
 

  alert("El resultado de la suma es " + s);
  alert("El resultado de la resta es " + rest);
  alert("El resultado de la multiplicación es " + mult);
  alert("El resultado de la division es " + div);

}


function convertirMetrosAPulgadasYCentimetros() {

  let longitudMetros = parseFloat(prompt("Ingrese la longitud en metros:"));

  
  if (isNaN(longitudMetros) || longitudMetros < 0) {
    alert("Por favor, ingrese una longitud válida en metros.");
    return;
  }

  // Convertir metros a pulgadas (1 metro = 39.37 pulgadas)
  let pulgadas = longitudMetros * 39.37;

  // Convertir metros a centímetros (1 metro = 100 centímetros)
  let centimetros = longitudMetros * 100;

  // Mostrar los resultados como mensajes de alerta
  alert(
    longitudMetros +
      " metros equivalen a " +
      pulgadas.toFixed(2) +
      " pulgadas y " +
      centimetros.toFixed(2) +
      " centímetros."
  );
}


function elevarAlCuadrado(){
  
  let numero = parseInt(prompt("Ingrese un número:"));
  

  let operacion = (numero * numero);
  alert(" tu número elevado es "+ operacion);
}

function mayorDe2Numeros() {
  let number1 = parseInt(prompt("Ingresa el primer número"));
  let number2 = parseInt(prompt("Ingresa el segundo número"));

  if (isNaN(number1) || isNaN(number2)) {
    alert("Por favor, ingresa números válidos.");
  } else {
    if (number1 > number2) {
      alert(number1 + " es mayor");
    } else if (number2 > number1) {
      alert(number2 + " es mayor");
    } else {
      alert("Ambos números son iguales");
    }
  }
}

function calcularAreaTriangulo() {
  
  let base = parseFloat(
    prompt("Ingrese la longitud de la base del triángulo:")
  );
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

  
  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert(
      "Por favor, ingrese valores válidos para la base y la altura del triángulo."
    );
    return;
  }

  let area = (base * altura) / 2;
  
  alert("El área del triángulo es: " + area);
}



function encontrarNumeroMenor() {
  
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

  
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }


  let menor = numero1; 
  if (numero2 < menor) {
    menor = numero2;
  }
  if (numero3 < menor) {
    menor = numero3;
  }
  alert("El número menor es el: " + menor);
}




function calcularRendimiento() {
  
  let capital = parseFloat(prompt("Ingrese el monto o capital inicial:"));
  let tasaInteres = parseFloat(
    prompt("Ingrese la tasa de interés (en decimales):")
  );
  let periodo = parseFloat(prompt("Ingrese el periodo en años:"));


  if (
    isNaN(capital) ||
    isNaN(tasaInteres) ||
    isNaN(periodo) ||
    capital <= 0 ||
    tasaInteres <= 0 ||
    periodo <= 0
  ) {
    alert(
      "Por favor, ingrese valores válidos para el monto, la tasa de interés y el periodo."
    );
    return;
  }

  let rendimientoIntereses = capital * tasaInteres * periodo;

  
  let capitalFinal = capital + rendimientoIntereses;

  alert(
    "El rendimiento por intereses es: " +
      rendimientoIntereses.toFixed(2) +
      "El capital final al final del periodo es: " +
      capitalFinal.toFixed(2)
  );
}



function calcularAnoNacimiento() {
  
  let edad = parseInt(prompt("Ingrese su edad:"));

  
  let anioActual = new Date().getFullYear();

  
  let anoNacimiento = anioActual - edad;

  
  alert("Su año de nacimiento es: " + anoNacimiento);
}


function identificarParImpar() {
  
  let numero = parseInt(prompt("Ingrese un número:"));

  
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  
  if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
  } else {
    alert("El número " + numero + " es impar.");
  }
}



function calcularPromedioEstudiante() {
  let totalNotas = 7;
  let sumaNotas = 0;

  
  for (let i = 1; i <= totalNotas; i++) {
    let nota = parseInt(prompt("Ingrese la nota " + i + ":"));
    if (isNaN(nota)) {
      alert("Por favor, ingrese una nota válida.");
      return;
    }
    sumaNotas += nota;
  }
 
  let promedio = sumaNotas / totalNotas;

  
  alert("El promedio de las 7 notas es: " + promedio.toFixed(2));
}



function fruteriaDescuento() {
  let p, d, pr, k, tp;
  let fr;

  p = 0;
  d = 0;
  pr = 0;
  k = 0;
  tp = 0;

  fr = prompt("Escribe la fruta a comprar");
  k = parseFloat(prompt("Escribe la cantidad en kilos:"));
  p = parseFloat(prompt("Escribe el precio por kilo:"));

  switch (fr) {
    case "manzana":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    case "pera":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    case "sandia":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    default:
      alert(
        "La fruta ingresada no está disponible. Por favor, elija manzana, pera o sandía."
      );
      return; // Salir de la función si no se eligió una fruta válida
  }

  alert(
    "El valor del descuento es: $" +
      d.toFixed(2) +
      " pesos. El valor total a pagar es: $" +
      tp.toFixed(2) +
      " pesos"
  );
}