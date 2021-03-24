const mysql = require("mysql")

const connection = mysql.createConnection ({
    Host: "localhost",
    User: "root",
    Password: '',
    Database: "arkademy"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
    } else {
        console.log("Succes Connect to Database");
    }
})

module.exports = connection