const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  let fileName;
  if (req.url == "/") fileName = "index.html";
  else if (req.url == "/about") fileName = "about.html";
  else if (req.url == "/contact-me") fileName = "contact-me.html";
  else fileName = "404.html";

  res.writeHead(200, { "Content-Type": "text/html" }); // Tell browser we are going to be writing HTML

  fs.readFile(`./Project/${fileName}`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) console.log("Something wrong" + err);
  else console.log(`Server is listening on port ${port}`);
});
