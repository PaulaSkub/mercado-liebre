const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { Product, Brand, Category } = require('../../database/models');


module.exports = {
	latest (req, res,next){
       
        Product.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 8
		})
		
			.then(function(products){
				let respuesta = {
					meta:{
						status: 200,
						count: products.length,
						url: "/api/products/latest"
						},
					data: products}
			 res.send(respuesta)})
			.catch(e => console.log(e));

    },
    offers (req, res){

        Item.destroy({
			where: {
			  id: req.body.itemId,
			},
			force: true,
		  })
			.then((response) => {
				if (response > 0) {
                    res.json({
                        status: 200
                    })
                } else {
                    console.log('No se borró nada');
                }
            })
			.catch((e) => console.log(e));
		
    }
    
};