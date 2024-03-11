//DEPENDENCIES
const app = require("./app.js");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 4444;

//LISTEN
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});