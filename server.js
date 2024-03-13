import express from "express";

const { PORT, API_KEY } = process.env;
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

app.get("/weather/:location", async (req, res) => {
  const response = await fetch(
    `https://api.tomorrow.io/v4/weather/forecast?location=${req.params.location}&apikey=${API_KEY}`
  );
  const data = await response.json();
  res.send(
    "Current temperature: " + data.timelines.minutely[0].values.temperature
  );
  // res.json(data);
});

app.listen(PORT, () => {
  if (environment === "development") {
    console.log(`The server is listening on http://localhost:${PORT}`);
  } else {
    console.log("server running on production");
  }
});
