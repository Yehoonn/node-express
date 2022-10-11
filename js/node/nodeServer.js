// 노드 js 기본 문법

// const http = require("http");
// const port = process.env.PORT || 8080;

// const dummyData = [{ key: "안녕하세요" }];

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charSet=utf-8" });
//   res.end(`<h1>하이</h1><h2>${dummyData[0].key}</h2>`);
// });

// server.listen(port, () => {
//   console.log(`server start ${port}`);
// });

// 노드 js로 정적파일 내보내기 (html, img 등)

// const http = require("http");
// const fs = require("fs");
// const port = process.env.PORT || 8080;

// const serveStaticFile = (res, path, contentType, responseCode = 200) => {
//   fs.readFile(__dirname + path, (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/html charSet=utf-8" });
//       return res.end("<h1>500 - Internal Error</h1>");
//     }
//     res.writeHead(responseCode, { "Content-Type": contentType });
//     res.end(data);
//   });
// };

// const server = http.createServer((req, res) => {
//   const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
//   switch (path) {
//     case "":
//       serveStaticFile(res, "/public/home.html", "text/html");
//       break;
//     case "/about":
//       serveStaticFile(res, "/public/about.html", "text/html");
//       break;
//     case "/img/logo.png":
//       serveStaticFile(res, "/public/img/logo.png", "image/png");
//       break;
//     default:
//       serveStaticFile(res, "/public/404.html", "text/html", 404);
//       break;
//   }
// });

// server.listen(port, () => {
//   console.log(`server start ${port}`);
// });
