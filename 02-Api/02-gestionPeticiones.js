const http = require("node:http");

const processRequest = (request, response) => {
  const { method, url } = request;

  const exampleJSON = require("./file/example.json");

  switch (method) {
    case "GET":
      switch (url) {
        case "/exampleJson":
          response.setHeader("Content-Type", "application/json; Charset=utf-8");
          return response.end(JSON.stringify(exampleJSON));
        default:
          response.setHeader("Content-Type", "text/html; Charset=utf-8");
          response.statusCode = 404;
          response.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/create": {
          let body = "";

          request.on("data", (chunk) => {
            body += chunk.toString();
          });

          request.on("end", () => {
            const dataResponse = JSON.parse(body);
            response.writeHead(201, {
              "Content-Type": "application/json; Charset=utf-8",
            });
            
            dataResponse.timestamp = Date.now()
            response.end(JSON.stringify(dataResponse));
          });

          break;
        }

        case "/otro": {
          let body = "";
        }

        default:
          response.setHeader("Content-Type", "text/html; Charset=utf-8");
          response.statusCode = 404;
          response.end("<h1>404</h1>");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(8090, () => {
  console.log("server listening on port http://localhost:8090");
});
