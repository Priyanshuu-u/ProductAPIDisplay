let URL = 'https://dummyjson.com/products';
let allproducts =[];
let productIndex = 0; 
function setLoadingText() {
    let img = document.querySelector(".image");
    let productTitle = document.querySelector(".product-title");
    let productDescription = document.querySelector(".product-description");
    let productPrice = document.querySelector(".product-price");
    img.setAttribute("src", "");
    productTitle.innerText = "Loading...";
    productDescription.innerText = "";
    productPrice.innerText = "";
}

function setErrorText() {
    let productTitle = document.querySelector(".product-title");
    productTitle.innerText = "Failed to load products. Please try again.";
}


function showNextProduct() {
    if (allproducts.length === 0) {
        console.log("No products available");
        return;
    }
    if (productIndex < allproducts.length) {
        let img = document.querySelector(".image");
        let productTitle =document.querySelector(".product-title");
        let productDescription= document.querySelector(".product-description");
        let productPrice = document.querySelector(".product-price");
        img.setAttribute("src", allproducts[productIndex].thumbnail);
        productTitle.innerText=allproducts[productIndex].title;
        productDescription.innerText=allproducts[productIndex].description;
        productPrice.innerText=`$${allproducts[productIndex].price}`;

      
        productIndex++; // Increment the counter for the next product
    } else {
       productTitle.innerText= "No more products to show";
    }
}


async function getproduct(){
    setLoadingText();
    try{
        let response = await axios.get(URL);
        allproducts = response.data.products;
        showNextProduct();
        
    }
    catch(e){
        console.log(e)
        setErrorText();
    }
}
window.onload = getproduct;




let button = document.querySelector("button");
button.addEventListener("click",showNextProduct);
