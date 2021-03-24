const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const product = require("./src/route/product");

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use((_, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
})
app.listen(port,()=>{
    console.log("server on using port", port);
})

app.use("/api/v1", product);

module.exports = app