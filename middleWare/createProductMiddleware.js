function createProductMiddleware (req,res,next){
    if(req.query.user == 'admin'){
        next();
    }else{
        res.redirect('/')
    }
}

module.exports = createProductMiddleware