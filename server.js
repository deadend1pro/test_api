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
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
  });