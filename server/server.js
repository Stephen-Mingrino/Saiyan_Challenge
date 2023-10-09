const express =require("express");
const app= express();
require("./config/mysql.config");
app.use(express.json(), express.urlencoded({extended: true}));
const cors = require("cors")
app.use(cors());

const path = require(`path`)

const SaiyanRoutes = require("./routes/SaiyanRoutes");
SaiyanRoutes(app)

app.listen(8000, ()=> console.log("the server is fired up on port 8000!"))

