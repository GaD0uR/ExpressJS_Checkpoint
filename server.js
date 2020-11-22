const express = require("express");
const app = express();
const student = require("./routes/students");

let currentHour = new Date().getHours();
console.log(currentHour);

app.get("/", (req, res) => {
  if (currentHour > 9 && currentHour < 17)
    res.sendFile(__dirname + "/public/index.html");
  else res.sendFile(__dirname + "/public/closed.html");
});

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/api", student);

app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running on port 3000");
  }
});
