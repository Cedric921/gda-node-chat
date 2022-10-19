const http = require("http");
const fs = require("fs");
const uuid = require("uuid");

// importation of messages Object

const clients = [];
const PORT = 6000;

// Connection to the server
const server = http.createServer((req, res, next) => {
  const { url, method } = req;
  if (url == "/" && method == "GET") {
    let Allmessages = JSON.parse(fs.readFileSync("./messages.json"));
    res.write(JSON.stringify(Allmessages));
    res.end();
  } else if (url == "/add" && method == "POST") {
    req.on("data", (client) => {
      clients.push(client);
    });
    req.on("end", () => {
      const parseBody = JSON.parse(Buffer.concat(clients));
      let Allmessages = JSON.parse(fs.readFileSync("./messages.json"));
      const found = Allmessages.find((element) => {
        return element.uuid == parseBody.uuid;
      });
      if (!found) {
        Allmessages.push(parseBody);
        fs.writeFileSync("./messages.json", JSON.stringify(Allmessages));
        res.write(JSON.stringify(Allmessages));
        res.end();
      } else {
        res.write(`This message are already be write`);
        res.end();
      }
    });
  }
});

server.listen(PORT, () =>
  console.log(`Notre app est lancée sur : http://localhost:${PORT}`)
);
