const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// fetch the data
fetch(url)
.then(res=>res.json())
.then(data=>showProduct(data));

// populate the page
function showProduct(product){
    console.log(product);
    document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
    document.querySelector(".purchaseBox .productname").textContent = product.productdisplayname;
    document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;
    document.querySelector("img.productimage").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.productimage").alt= product.productdisplayname;
    document.querySelector(".info .productname").textContent = product.productdisplayname;
    document.querySelector(".info .basecolour").textContent = product.basecolour;
    document.querySelector(".info .id").textContent = product.id;
    document.querySelector(".info h3").textContent = product.brand;
    document.querySelector(".info p").textContent = product.brandbio;
}





