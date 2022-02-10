const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req, res) =>
  res.send(`Hello World! It's version5 port :${PORT}`)
);
app.listen(PORT, console.log(`Server listening on port ${PORT}`)); // listen : 해당 port번호를 듣고있다가, request(요청)이 들어오면 작동
