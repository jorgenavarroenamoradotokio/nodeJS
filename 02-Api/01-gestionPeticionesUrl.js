const http = require("node:http");
const fs = require("node:fs");

const portSelected = process.env.PORT ?? 8090;

const processRequest = (request, response) => {
  response.setHeader("Content-Type", "text/html; Charset=utf-8");

  if (request.url == "/") {
    response.end("<h1>Bienvenido a mi página de inicio</h1>");
  } else if (request.url == "/contacto") {
    response.end("<h1>Contacto</h1>");
  } else if (request.url == "/imagen") {
    fs.readFile("nodeJsLogo.png", (err, data) => {
      if (err) {
        response.statusCode = 500;
        response.end("<h1>500 Internal Server Error</h1>");
      } else {
        response.setHeader("Content-Type", "image/png");
        response.end(data);
      }
    });
  } else {
    response.statusCode = 404;
    response.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(portSelected, () => {
  console.log(`server listening on port http://localhost:${portSelected}`);
});
