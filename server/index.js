const expresss = require("express");
const app = expresss();

app.get("/", (req, res) => {
  res.send({ message: "Hi there, deployed in heroku" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);