console.log("Hello World");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const catMe = require("cat-me");
console.log(catMe());

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world from the server");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
