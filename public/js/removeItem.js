
window.addEventListener('load', function(){
    // Capturando formulario y demas elementos
     let deleteform = document.getElementById('deleteform')
     let idemId = document.getElementById('idemId')

     if(deleteform){
     deleteform.addEventListener('submit', function(){
         let itemIdRemoved = itemId.value
                axios.delete('http://localhost:3000/api/items',{
                itemIdRemoved
                  }
             ).then((response) => {
                
                 if (response.status == '200') {
                     window.location.reload()}})
             .catch((e) => console.log(e));

             }
                 
     )}})