const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static(path.join(__dirname, "public")));
app.listen(5000, (err) => {
  err ? console.log("error") : console.log("server is running on 5000");
});
let date_ob = new Date();
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();

let arr = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

let day = date_ob.getDay();

// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + arr[day - 1]);
// prints time in HH:MM format
console.log(hours + ":" + minutes);

app.use(function (req, res, next) {
  if (day >= 6 || hours < 9 || hours > 17) {
    console.log("out of time");
    // res.send(app.use(express.static(path.join(__dirname, "err"))));
    res.send(
      "We'll be available in " +
        (24 - hours) +
        " hours and " +
        (60 - minutes) +
        " minutes"
    );
  } else {
    console.log("on time");
    app.use(express.static(path.join(__dirname, "public")));
  }
  next();
});
