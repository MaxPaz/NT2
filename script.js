
const miarray = [
[nombre ='producto 1', costo = 100],
[nombre = 'producto 3', costo = 500],
[nombre = 'producto 4', costo = 250],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 1', costo = 100],
[nombre = 'producto 3', costo = 500],
[nombre = 'producto 3', costo = 500],
[nombre = 'producto 4', costo = 250],
];

function funcion(valor) {
    miarray.forEach (function comparar (elemento, index)
    {
    {if (elemento[1] == valor) {console.log (elemento)}}
    }
    )
};
