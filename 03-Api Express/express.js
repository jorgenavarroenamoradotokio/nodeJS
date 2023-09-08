const express = require("express");
const app = express();
const file = require("./file/example.json");

const PORT = process.env.PORT ?? 8090;

app.disable("x-powered-by");

// Implementamos el middleware manual en caso de no quererlo hacer asi use app.use(express.json())
app.use((request, response, next) => {
    if (request.method != 'POST') return next()
    if (request.headers['content-type'] != 'application/json') return next()

    let body = "";

    request.on("data", (chunk) => {
      body += chunk.toString();
    });
  
    request.on("end", () => {
      const dataResponse = JSON.parse(body);
      dataResponse.timestamp = Date.now();
     request.body = dataResponse
     next()
    });
});

app.get("/", (request, response) => {
  response.send("<h1>Mi página</h1>");
});

app.get("/json", (request, response) => {
  response.json(file);
});

app.post("/create", (request, response) => {
    response.status(201).json(request.body);
});

app.use((request, response) => {
  response.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
