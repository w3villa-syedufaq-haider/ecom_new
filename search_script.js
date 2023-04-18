let tggl = document.getElementById('range_tggl')
let max_input=document.getElementById('max')
let minus=document.querySelectorAll('h2')
let price_cnt=document.querySelectorAll('#price_content')
let input=document.querySelector('#input-search')

  
tggl.addEventListener("input",()=>{
    max_input.value=tggl.value;
}
);

for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",()=>{
        minusfunc(i)
    })
}

function minusfunc(i){
    if (price_cnt[i].style.display === "none"){
        price_cnt[i].style.display='block'
        minus[i].innerHTML='-';
    }
    else{
        price_cnt[i].style.display='none'
        minus[i].innerHTML='+';
    }
};















const searchInput = document.querySelector("#input_srch");
const inputs = searchInput.querySelector('input');
const results = searchInput.querySelector("#resultBox");

// Listen for the enter key to be pressed in the search input
inputs.addEventListener("keydown", function (event) {
    localStorage.clear("searchResults")

    if (event.keyCode === 13) {
        // Prevent the form from submitting and navigating away from the page
        event.preventDefault();
        
        // Get the search term from the input field
        const searchTerm = event.target.value.toLowerCase();
        
        // Clear the search results container
        results.innerHTML = '';
        
        // Fetch the product data from the JSON file
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                // Filter the products based on the search term
                const matches = data.product.filter(item => {
                    const matches_cat = item.cat.toLowerCase().startsWith(searchTerm);
                    return matches_cat;
                  });
               console.log(matches)
                
                // Store the matches in local storage
                localStorage.setItem("searchResults", JSON.stringify(matches));
                
                // Redirect the user to the search results page
               window.location.href = "search.html";
            });
    }
});



inputs.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    results.innerHTML = '';
    console.log(searchTerm)

    if (searchTerm.length >= 1) {
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                console.log("hello")
                const matches=data.product.filter(item=>{
                const matches_name = item.name.toLowerCase().startsWith(searchTerm);
                return matches_name;
            });

                console.log('bye')
                matches.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                   
                    <div onclick="search(event,${item.id})"><img src="${item.img}" style="height:50px";"width:50px">   ${item.name}</div>`;
                    results.appendChild(li);
                });
            });
    }
});






async function search(event, productId) {
    event.preventDefault();
    const response = await fetch("product.json")
    const data = await response.json();
    const product = data.product.find(product => product.id === productId);
    console.log(product)

  
    localStorage.setItem('product', JSON.stringify(product));
  
    window.location.href = 'search.html';
  
   
  }
  


  async function search_prod(event, productId) {
    event.preventDefault();
    const response = await fetch("product.json")
    const data = await response.json();
    const product = data.product.find(product => product.id === productId);
  
  
    localStorage.setItem('product', JSON.stringify(product));
  
    window.location.href = 'product_detail.html';
  
   
  }
































// Get the search results from local storage
const searchResults = JSON.parse(localStorage.getItem("searchResults"));

// Get a reference to the container for the search results
const showsearch = document.querySelector('#search-section_search')

// Check if searchResults is not null before looping through it
if (searchResults) {
// Loop through the search results and display them
for (let i = 0; i < searchResults.length; i++) {
    // Create a new card element for each product
    
        showsearch.innerHTML += `
        <div class="search-section ">
        <div class="card position-relative m-3 " style="width:280px;">
        <div class="badge-overlay">
            <!-- Change Badge Position, Color, Text here-->
            <span class="top-left badge ">${searchResults[i].off}</span>
        </div>
        <span
            class="position-absolute top-10 start-100 translate-middle badge1  badge-danger" id="disc_search">
            ${searchResults[i].discount}
        </span>
        <a href="product_detail.html?id=${searchResults[i].id}"><img src=${searchResults[i].img}  class="card-img-top" width="100%" height="300px"></a>
        <div class="card-body pt-0 px-0">
            <div class="d-flex flex-row justify-content-between p-3 mid">
                <a class="d-flex flex-column text-muted mb-1">
                    ${searchResults[i].brand}
                </a>
                <p class="d-flex flex-column text-muted mb-2">${searchResults[i].model}
                </p>
            </div>
            <strong class="pl-3">${searchResults[i].name}</strong>
            <p>${searchResults[i].price} &nbsp; <s>${searchResults[i].cutprice}</s></p>
            <div class=" add mx-3 mt-3 d-block">
                <input type="number" class="quantity__input" value="1">
                
                <button type="button" onclick="addToCart(event,${searchResults[i].id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO
                        CART</small></button>&nbsp; &nbsp; &nbsp;
                <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${searchResults[i].id},'wishlist')"></i> &nbsp; &nbsp;
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div class="d-flex flex-row justify-content-between p-3 mid">
                <p class="d-flex flex-column mb-1">
                    <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
                </p>
                <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                        style="color: red;"></i>Question
                </p>
            </div>
        </div>
    </div>
    `
}
}

window.onload = () => {
    const product = JSON.parse(localStorage.getItem('product'));
    const showsearch = document.querySelector('#search-section_search');
    input.value=`${product.name}`

    showsearch.innerHTML = `
      <div class="card position-relative m-3 " style="width:280px;">
        <div class="badge-overlay">
          <span class="top-left badge ">${product.off}</span>
        </div>
        <span class="position-absolute top-10 start-100 translate-middle badge1  badge-danger" id="disc_search">
          ${product.discount}
        </span>
        <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
        <div class="card-body pt-0 px-0">
          <div class="d-flex flex-row justify-content-between p-3 mid">
            <a class="d-flex flex-column text-muted mb-1">
              ${product.brand}
            </a>
            <p class="d-flex flex-column text-muted mb-2">${product.model}</p>
          </div>
          <strong class="pl-3">${product.name}</strong>
          <p>${product.price} &nbsp; <s>${product.cutprice}</s></p>
          <div class=" add mx-3 mt-3 d-block">
            <input type="number" class="quantity__input" value="1">
            <button type="button" onclick="addToCart(event,${product.id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO CART</small></button>&nbsp; &nbsp; &nbsp;
            <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div class="d-flex flex-row justify-content-between p-3 mid">
            <p class="d-flex flex-column mb-1">
              <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
            </p>
            <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question" style="color: red;"></i>Question</p>
          </div>
        </div>
      </div>`;
  };
  





  // async function search(event, productId) {
    
  //   event.preventDefault();
  //   const response = await fetch("product.json")
  //   const data = await response.json();
  //   const product = data.product.find(product => product.id === productId);
  
  
  //   localStorage.setItem('product', JSON.stringify(product));
  
  //   window.location.href = 'product_detail.html';
  
   
  // }