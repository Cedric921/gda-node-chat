// add all modules can be used
const http = require("http");
const  url = require("url");
const  fs = require("fs");

// importation of messages Object

const messages = require("./messages");
const { unescape } = require("querystring");

const clients = [];
const PORT = 5000;

// Connection to the server

const server = http.createServer();

server.on("request", (req, res) => {

    const url_path = url.parse(req.url);
    const msg = url_path;
        // console.log(msg);
    if(url_path.pathname == '/'){
        fs.readFile('./index.html', (err, data)=>{
            console.log("/")
            res.end(JSON.stringify(messages))
          })
    }else if(url_path.pathname == '/add'){
        const message = url_path.query.split('=')[1]
        console.log('/add one message');
        console.log('message => ', message)
        messages.push(message)
        fs.writeFile('messages.json', (err, data)=>{

            console.log(data);
        })


    } else {
        const message = url_path.query
        console.log('/add',url_path,message);
    }
  
});

server.listen(PORT, () =>
  console.log(`Notre app est lancée sur : http://localhost:${PORT}`)
);
