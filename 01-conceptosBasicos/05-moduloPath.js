const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Obtenemos el nombre del documento con extension
const base = path.basename('/tmp/logger/loggerSpringBatch.log')
console.log(base)

// Obtenemos el nombre del documento sin extension
const filename = path.basename('/tmp/logger/loggerSpringBatch.log', '.log')
console.log(filename)

//Obtenemos la extension
const extension = path.extname('my.super.image.jpg')
console.log(extension)