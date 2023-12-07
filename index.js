const express = require("express");
const geoip = require("geoip-lite");

const myip = "154.160.27.185";

const geo = geoip.lookup(myip);

console.log(geo);
