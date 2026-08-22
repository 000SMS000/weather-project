const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const apiKey = process.env.API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;

    res.json({
      city: data.name,
      temperature: `${data.main.temp}°C`,
      condition: data.weather[0].description,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
