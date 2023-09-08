// argumentos de entrada
console.log(process.argv)

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)

// podemos controlar eventos del proceso
process.on('exit', () => {
    console.log('Evento de salida')
})

// controlar el proceso y su salida
process.exit(1)