const http = require("http");
const express = require("express");
const app = express();
const calculator = require("./routes/calculator");

app.use(express.json());
app.use("/api/calculator", calculator);
app.use((error, req, res, next) => {
  res.status(error.statusCode).send(error);
});

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => console.log("Server listening on: ", port));
