const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movieDB",
});

module.exports = db;
// This snippet creates a connection to the MySQL database and exports it as a module.
// This connection can be used in other files to interact with the database.
