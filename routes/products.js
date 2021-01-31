// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
let createProductMiddleware = require('../middleWare/createProductMiddleware')


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/images/products')
	},
	filename: function (req, file, cb) {
		console.log(file);
		cb(null, file.fieldname + '-' + req.body.name + '.jpg')
	}
})

var upload = multer({ storage: storage });


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', //createProductMiddlewar
 productsController.create); 
router.post('/', upload.any(),productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/detail', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
router.put('/:id',  upload.any(),productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
