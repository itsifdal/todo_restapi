// index.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const db = require("./app/models");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3030;

// Sync database
db.sequelize.sync();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Routes
require("./app/routes/todo.routes")(app);
require("./app/routes/activity.routes")(app);
