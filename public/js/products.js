window.addEventListener("load",function() {

fetch('http://localhost:3000/api/products/latest')
		.then(response => response.json())
		.then (products => {
            
            let latestProduct = document.getElementById('latest-products')
            let productdata = products.data
            let variableNueva = ""

            productdata.forEach( item =>{
                let price = Math.trunc(item.price - item.price * item.discount / 100)
                

                variableNueva += `<div class="col-12 col-sm-6 col-lg-3"> 
                        <section class="product-box">
                            <a href="/products/detail/${item.id} ">
                                <figure class="product-box_image">
                                    <img src="/images/products/${item.image}" alt="${item.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>${price}</h2>
                                        <span> ${item.discount}  % OFF</span>
                                    
                                     <p>${item.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                        </section>
                    </div>`
                           } )

                           latestProduct.innerHTML =   variableNueva      

                
        
        })
        .catch(e =>
            console.log(e)
          );


fetch('http://localhost:3000/api/products/offers')
		.then(response => response.json())
		.then (products => {
            
            
            let productOffers = document.getElementById('offers-products')
            let productdata = products.data
            let variableNueva1 = ""

            productdata.forEach( item =>{
                let price = Math.trunc(item.price - item.price * item.discount / 100)
                
                variableNueva1 += `<div class="col-12 col-sm-6 col-lg-3"> 
                        <section class="product-box">
                            <a href="/products/detail/${item.id} ">
                                <figure class="product-box_image">
                                    <img src="/images/products/${item.image}" alt="${item.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>${price}</h2>
                                        <span> ${item.discount}  % OFF </span>
                                    
                                     <p>${item.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                        </section>
                    </div>`
                           } )

                           productOffers.innerHTML =   variableNueva1      

        
        })
        .catch(e =>
            console.log(e)
          );


    })