const fs = require('node:fs')

// Ejecutamos callback para leer el documento
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('contenido del primer documento:', text)
})

console.log('--> Realizamos otras tareas mientras leemos el archivo...')

// Ejecutamos callback para leer el documento
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { 
    console.log('contenido del segundo documento:', text)
})