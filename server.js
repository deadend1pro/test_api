import express from "express";

const PORT = process.env.PORT;
const app = express();
const environment = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.json("welcome");
});
app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.json({ value: number });
});

app.get("/greeting", (req, res) => {
  const greetings = ["hey", "hi", "dia duit", "hola"];
  const greetingsindex = Math.floor(Math.random() * greetings.length);
  res.json({ value: greetings[greetingsindex] });
});

app.listen(PORT, () => {
  if (environment === "development") {
    console.log(`The server is listening on http://localhost:${PORT}`);
  } else {
    console.log("server running on production");
  }
});
