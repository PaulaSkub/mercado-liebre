window.addEventListener('load', function(){
   // Capturando formulario y demas elementos
    let formAdd = document.getElementById('formadd')
    let quantity = document.getElementById('quantity');
    let productId = formadd.productId.value;

    formAdd.addEventListener('submit', function(x){
        let quantityValue = quantity.value
        if (quantityValue > 0){
            axios.post('http://localhost:3000/api/items',{
                quantityValue,
                productId
                 }
            ).then((item) => res.redirect("/users/cart"))
            .catch((e) => console.log(e));
            }
                
    })


})