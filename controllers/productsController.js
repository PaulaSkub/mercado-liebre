const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render ('products',{products:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		let idSelect = req.params.id;
		
		res.render ('detail',{products:products, idSelect:idSelect, toThousand: toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render ('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res, next) => {

		const filePath = './data/productsDataBase.json';
		let baseProductos = fs.readFileSync(filePath, { encoding: 'utf-8' });
		
			
		let products;
        if (baseProductos == "") {
            products = []
        } else {
            products = JSON.parse(baseProductos)
		}
		
		if (req.files){
		var filename = req.files.map(function (file) {
			return file.filename.toString();
		})};

			
		products.push ({
			id : products[products.length-1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: filename
		});

       	
		productsJSON = JSON.stringify(products);
        
        //Lo escribimos en el archivo
        fs.writeFileSync(filePath, productsJSON)


		res.redirect("/products");

	
	
			
		
	},

	// Update - Form to edit
	edit: (req, res) => {

		let idSelect = req.params.id;

		let product = products.find (function(product){
			 return product.id == idSelect});

			 	console.log (product)
		
		res.render ('product-edit-form', {product:product} )
		
	},
	// Update - Method to update
	update: (req, res, next) => {
		

		const filePath = './data/productsDataBase.json';
		let baseProductos = fs.readFileSync(filePath, { encoding: 'utf-8' });
		products = JSON.parse(baseProductos)
		
		var filename = req.files.map(function (file) {
			return file.filename.toString();
		});


		products.forEach (function(product){
			if(product.id == req.params.id){
				product.name = req.body.name,
				product.price = req.body.price,
				product.discount = req.body.discount,
				product.category = req.body.category,
				product.description = req.body.description;
				product.image = filename}
		})
	

	      	
		productsJSON = JSON.stringify(products);
        
        
        fs.writeFileSync(filePath, productsJSON)


		res.redirect("/products");



	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		
		const filePath = './data/productsDataBase.json';
		let baseProductos = fs.readFileSync(filePath, { encoding: 'utf-8' });
		products = JSON.parse(baseProductos)

		let filtrado = products.filter(function (product) {
			return product.id != req.params.id;
		})

		products = JSON.stringify(filtrado);

		fs.writeFileSync(filePath, products);
		res.redirect('/');
	}
}





;

module.exports = controller;