
const url = "https://kea-alt-del.dk/t7/api/categories";


// fetch the data
fetch(url)

// .then((res) => res.json())   shorter way to write it
.then(function(res){
    return res.json();
})

// .then((data) => showProduct(data)); idem with potatoes
.then(function(data){
    handleCategories(data);
})


// forEach
function handleCategories(data){
data.forEach(showProduct);
}


// that function
function showProduct(product){
console.log(product);


// grab the template
const template = document.querySelector("#categoryTemplate").content;
    
// clone it 
const copy = template.cloneNode(true);
    
// change content
copy.querySelector("h1").textContent = `${product.category}`;
// copy.querySelector("a").href=`https://kea-alt-del.dk/t7/api/products?category=${product.category}`;
copy.querySelector("a").href=`productlist.html?category=${product.category}`;



// grab parent
const parent = document.querySelector("section");
    
// append
    parent.appendChild(copy);
    }





    
