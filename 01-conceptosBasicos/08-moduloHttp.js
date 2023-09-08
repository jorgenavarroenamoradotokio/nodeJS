const http = require('node:http')

const server = http.createServer((request, response) =>{
    console.log('request received')
    response.end('Hola Mundo')
})

server.listen(0 , ()=>{
    console.log(`server listening on port http://localhost:${server.address().port}`)
})