// Para aquellos modulos que no sean nativos y no tengan promesas activas usaremos la importacion de la siguiente manera
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('contenido documento:', text)
    })

console.log('--> Realizamos otras tareas mientras leemos el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('contenido documento:', text)
    })