import express from "express";

const app = express();
const port = 5000;

app.use("/", (req, res, next) => {
  const { c } = req.query;
  if (Number.isNaN(Number(c))) {
    res.status(400).json({ error: "'c' must be a valid number" });
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  const { c } = req.query;
  return res.status(200).json({ message: Number(c) * Number(c) });
});

app.listen(port, () => {
  console.log("server is running");
});
