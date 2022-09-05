const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

const url = `https://kea-alt-del.dk/t7/api/products?limit=15&category=${category}`;

// fetch the data
fetch(url)
// .then((res) => res.json())   shorter way to write it
.then(function(res){
    return res.json();
})

// .then((data) => showProduct(data)); idem with potatoes
.then(function(data){
    handleProductList(data);
})
function handleProductList(data){
data.forEach(showProduct);
}
function showProduct(product){
// soldOut onSale. if we look at the data we can see that soldOut has value 0, which means that is a boolean (true = 1 | false = 0). While discount says "null"

// grab the template
console.log(product);
const template = document.querySelector("#smallProductTemplate").content;

// clone it 
const copy = template.cloneNode(true);

// change content
document.querySelector(".breadcrumbs .first").textContent = `${category}`;
copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
copy.querySelector("h3").textContent = `${product.productdisplayname}`;
copy.querySelector('img.productimage').src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
copy.querySelector("img.productimage").alt = product.productdisplayname;
copy.querySelector("a").href = `productpage.html?id=${product.id}`;
if(product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
}
if(product.discount){
    copy.querySelector("article").classList.add("onSale");
}

const discountedprice = Math.round(product.price-(product.price / 100 * product.discount));
copy.querySelector(".discounted p").textContent = `DKK ${discountedprice}`;

copy.querySelector(".discounted p:last-child").textContent = `${product.discount}%`;



// grab parent
const parent = document.querySelector("section");

// append
parent.appendChild(copy);
}

document.querySelector(".breadcrumbs li:last-child").remove();
