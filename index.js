const express = require("express");
require("dotenv").config();
const geoip = require("geoip-lite");

const PORT = process.env.port | process.env.PORT;
const app = express();
app.use(express.json());

app.post("/api/ip", (req, res) => {
  const ip = req.body.IP;
  const geo = geoip.lookup(ip);
  console.log(geo);
  res.send(geo);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${[PORT]}`);
});
