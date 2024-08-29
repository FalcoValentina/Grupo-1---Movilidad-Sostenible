
let Nombre = prompt ("Por favor")

let Lugar = prompt ("¿Tu lugar de residencia es en CABA?")

if (Lugar.toLowerCase() === "sí" || Lugar.toLowerCase() === "si") {
    alert("¡Qué bueno que vivas en CABA!");
} else if (Lugar.toLowerCase() === "no") {
    alert("Entendido, no vives en CABA.");
} else {
    alert("Respuesta no válida. Por favor, responde con 'Sí' o 'No'.");
}

let mail = prompt("Para mantenerte informado, déjanos tu mail");

alert(`Muchas gracias, ${Nombre}`);


