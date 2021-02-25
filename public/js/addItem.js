window.addEventListener('load', function(){
   // Capturando formulario y demas elementos
    let formAdd = document.getElementById('formadd')
    let quantity = document.getElementById('quantity');
    let productId = formadd.productId.value;

    formAdd.addEventListener('submit', function(){
        let quantityValue = quantity.value
        console.log(quantityValue)
        if (quantityValue > 0){
            axios.post('http://localhost:3000/api/items',{
                quantityValue,
                productId
                 }
            ).then((response) => {
                
                if (response.status == '200') {
                    window.location.assign('http://localhost:3000/users/cart')}})
            .catch((e) => console.log(e));
            }
                
    })


})