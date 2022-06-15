const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const path = require('path');
 


const app = require("./app");


const connectDb = require("./connection/db");
connectDb();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`connect ${port}`);
});


