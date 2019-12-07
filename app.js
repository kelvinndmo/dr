const express = require("express");

const app = express();
const moment = require("moment");

// GET POST PUT PATCH DELETE OPTIONS
app.get("/me", (req, res) => {
  const momentt = moment().format();
  res.send(momentt);
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
