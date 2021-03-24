const connection = require("../confiq/db")

module.exports = {
    addProduct: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO produk set ?`, data, (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}