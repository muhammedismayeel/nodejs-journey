const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader("Content-Type", "text/plain");
  res.end("“Hello, I’m Ismayeel learning Node.js!” 🚀");
});
// Start server
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});


