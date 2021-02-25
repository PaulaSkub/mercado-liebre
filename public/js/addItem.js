
window.addEventListener('load', function(){
   // Capturando formulario y demas elementos
    let formAdd = document.getElementById('formadd')
    let quantity = document.getElementById('quantity');
    let error = document.querySelector('.error');
    let productId = formadd.productId.value;

    formAdd.addEventListener('submit', function(event){
        event.preventDefault();
        let quantityValue = quantity.value
        console.log(quantityValue)
        if (quantityValue > 0){
            axios.post('http://localhost:3000/api/items',{
                quantity:quantityValue,
                productId:productId
                 }
            ).then((response) => {
               console.log(response)
                if (response.status == '200') {
                    window.location.assign('http://localhost:3000/users/cart')}})
            .catch((e) => console.log(e));
            }else{
                error.innerText = 'La cantidad debe ser mayor a 1'
            }
               
    })


})