import express from "express";
import cors from "cors";

function log(message: string) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
console.log("apped");
app.listen(8080, () => {
  log("server ready on 8080");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
