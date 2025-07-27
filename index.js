import express from "express";

const app = express();
const port = 5000;

// app.use('/',(req,res)=>{

// });

app.get("/", (req, res) => {
  console.log(req.query.c);
  number = num(req.query.c);
  square = number ** 2;
  console.log(square);
  return res.status(200).json({ message: "welcome to Backened" });
});

app.get("/about", (req, res) => {
  return res.status(200).json({ message: "welcome to About page" });
});

app.listen(port, () => {
  console.log("server is running");
  console.log("khai ta?");
});
