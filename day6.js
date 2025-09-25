const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("🏠 Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.end("ℹ️ This is the About Page.");
  } else if (req.url === "/contact") {
    res.end("📞 Contact us at: contact@example.com");
  } else {
    res.statusCode = 404;
    res.end("❌ 404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
