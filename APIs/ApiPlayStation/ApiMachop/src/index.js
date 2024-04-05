const express = require('express');
const app = express();
const db = require('../src/database/db.json');

//settings 
app.set("port", process.env.PORT || 3000);

app.get('/ps', (req, res) => {
  var games = db.games
  res.json(games);
});

// Starting
app.listen(app.get("port"), () => {
  console.log("Server is in port", app.get("port"));
});