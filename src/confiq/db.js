const mysql = require("mysql")

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: '',
    database: "arkademy"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
    } else {
        console.log("Succes Connect to Database");
    }
})

module.exports = connection