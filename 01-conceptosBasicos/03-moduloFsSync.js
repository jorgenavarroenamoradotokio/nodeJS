// Lectura sincrona de un fichero
const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const textoPrimerDocumento = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto:', textoPrimerDocumento)

console.log('--> Realizamos otras tareas mientras leemos el archivo...')

console.log('Leyendo el segundo archivo...')
const textoSegundoDocumento = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto:', textoSegundoDocumento)