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

        Product.findAll({
			order: [
				['discount', 'DESC']
			],
			limit: 8
		})

			.then(function(inSale){
				let respuesta = {
					meta:{
						status: 200,
						count: inSale.length,
						url: "/api/products/offers"
						},
					data: inSale}
					res.send(respuesta)})
			 
			.catch(e => console.log(e));
		
    }
    
};