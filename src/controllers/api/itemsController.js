
const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { Product, Item, User } = require('../../database/models');



module.exports = {

add(req, res, next) {
   
      // Busco el producto que voy a agregar como Item.
      Product.findByPk(req.body.productId, {
        include: ["user"],
      })
        .then((product) => {
          // Saco el valor del producto, teniendo en cuenta el descuento.

          let price =
            Number(product.discount) > 0
              ? product.price - (product.price * product.discount) / 100
              : product.price;

          // Creo el Item de compra
          return Item.create({
            salePrice: price,
            quantity: req.body.quantity,
            subTotal: price * req.body.quantity,
            state: 1,
            userId: req.session.user.id,
            sellerId: product.user.id,
            productId: product.id,
          });
        })
        .then(function(items){
        let respuesta = {
            meta:{
                status: 201,
                message: "Product added to cart"
                },
            data: {items}}
     res.send(respuesta)})
    .catch(e => console.log(e));
  },

  deleteFromCart(req, res,next) {
    Item.destroy({
      where: {
        id: req.body.itemId,
      },
      force: true,
    })
      .then(function(respuesta){
         res.send(respuesta)})
      .catch((e) => console.log(e));
  }

}