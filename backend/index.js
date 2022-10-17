// add all modules can be used
const http = require("http");
const  url = require("url");
const  fs = require("fs");

// importation of messages Object

const messages = require("./messages");

const clients = [];
const PORT = 5000;

// Connection to the server

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile('../frontend/index.html', (err, data)=>{
    res.end(data)
  })
});

server.listen(PORT, () =>
  console.log(`Notre app est lancée sur : http://localhost:${PORT}`)
);
