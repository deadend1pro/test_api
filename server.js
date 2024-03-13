import express from "express"

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.json("welcome")
})
app.get("/random-number", (req, res) => {
    const number = Math.floor(Math.random() * 100)
    res.json({ value: number })
})

app.get("/greeting", (req, res) => {
    const greetings = ["hey", "hi", "dia duit", "hola"];
    const greetingsindex = Math.floor(Math.random() * greetings.length)
    res.json({ value: greetings[greetingsindex] })
})
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
  });