const product = require("../model/product");
const helper = require("../helper/response");

module.exports = {
    addProduct: (req, res) => {
        let data = {
            nama_produk: req.body.nama_produk,
            keterangan: req.body.keterangan,
            harga: req.body.harga,
            jumlah: req.body.jumlah,
        }
        product
        .addProduct(data)
        .then((result) => {
            helper.response(res,"Succes input data",data,200);
            console.log(result);
        })
        .catch((error) => {
            helper.response(res,"Error input data",null,410);
            console.log(error);
        })
    }
}