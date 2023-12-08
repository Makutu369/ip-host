require("dotenv").config();
const express = require("express");
const geoip = require("geoip-lite");
const validate = require("./utils/validator");

const PORT = process.env.port | process.env.PORT;
const app = express();
app.use(express.json());

app.post("/api/ip", (req, res) => {
  const ip_address = req.body.IP;
  const err = validate(ip_address);
  if (err) return res.status(400).send(`bad request : ${err}`);
  const geo = geoip.lookup(ip_address);
  res.send(geo);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${[PORT]}`);
});
