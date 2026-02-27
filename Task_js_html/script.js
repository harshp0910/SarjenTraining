var product = [
    {
        "product_title":"Dell_laptop" ,
        "product_price": "65000" ,
        "product_description": "Dell Laptop",
        "product_image": 'dell_laptop.jpg'
    },
    {
        "product_title":"Dell_laptop" ,
        "product_price": "65000" ,
        "product_description": "Dell Laptop",
        "product_image": 'dell_laptop.jpg'
    },
    {
        "product_title":"Dell_laptop" ,
        "product_price": "65000" ,
        "product_description": "Dell Laptop",
        "product_image": 'dell_laptop.jpg'
    },
];
var a = "";
var container = document.getElementById("p1")
for(var i=0;i<product.length;i++){
    a += `
        <div class="product_card">

            <img src="${product[i].product_image}" class="product_image">

            <div class="product_details">
                <h3 class="product_title">${product[i].product_title}</h3>
                <p class="product_price">₹${product[i].product_price}</p>

                <a href="#" class="details">${product[i].product_description}</a>
                <a href="#" class="buy_btn">Buy Now</a>
            </div>
        </div>
    `;
}
container.innerHTML = a;