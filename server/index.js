const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/items", (req, res) => {
  result = [{ id: "1", name: "orange" }];
  res.send(result);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
