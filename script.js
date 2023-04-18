// fetch("product.json")
// .then(response => response.json())
// .then(data => {


//      for(let i=0;i<data.product.length;i++){
           
//           let product = data.product[i];
            
//           let items  = document.getElementById("product-list");

//           let item = document.createElement("div");

//           item.innerHTML=`
//           <div class='item'>
//           <div class="card position-relative m-4" style="width: 300px;">
//           <div class="badge-overlay">
//               <!-- Change Badge Position, Color, Text here-->
//               <span class="top-left badge ">${product.off}</span>
//           </div>
//           <span
//               class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
//               ${product.discount}
//           </span>
//           <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
//           <div class="card-body pt-0 px-0">
//               <div class="d-flex flex-row justify-content-between p-3 mid">
//                   <a class="d-flex flex-column text-muted mb-1">
//                       ${product.brand}
//                   </a>
//                   <p class="d-flex flex-column text-muted mb-2">${product.model}
//                   </p>
//               </div>
//               <div id="buy">
//               <strong class="pl-3">${product.name}</strong>
//               <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
//               </div>
//               <div class=" add mx-3 mt-3 d-block">
//                   <input type="number" class="quantity__input" value="1">

//                   <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
//                           CART</button>&nbsp; &nbsp; &nbsp;
//                 <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
//                   <i class="fa-solid fa-arrow-right-arrow-left"></i>
//               </div>
//               <div class="d-flex flex-row justify-content-between p-3 mid">
//                   <p class="d-flex flex-column mb-1">
//                     <p>Buy Now</p>
//                   </p>
//                   <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
//                           style="color: red;"></i>Question
//                   </p>
//               </div>
//           </div>
//       </div>
//       </div>
//           `
//           items.appendChild(item);
//      }
// })


async function getprodData(event,prodid){
    event.preventDefault();

    const response = await fetch("product.json");
    const data = await response.json();

        const product =   data.product.find(product=> prodid === product.id)
        console.table(product);


        let carts = document.getElementById("cart-container");



        let cart = document.createElement("div");
        
        cart.innerHTML=`   
        <table>
        <tbody>
            <tr>
                <td><a href="#"><i class="fas fa-trash-alt fa-2x"></i></a></td>
                <td><img src="${product.img}" alt=""></td>
                <td class="w-25"><h5>${product.name}</h5></td>
                <td><h5>${product.price}</h5></td>
                <td><h5>1</h5></td>
                <td><h5>${product.price}</h5></td>
            </tr>     
            
        `
        carts.appendChild(cart);
}
async function getwishData(event,prodid){
    event.preventDefault();

    const response = await fetch("product.json");
    const data = await response.json();

        const product =   data.product.find(product=> prodid === product.id)
        console.table(product);


        let wishes = document.getElementById("wish-container");



        let wish = document.createElement("div");
        
        wish.innerHTML=`   
        <table>
        <tbody>
            <tr>
                <td><a href="#"><i class="fas fa-trash-alt fa-2x"></i></a></td>
                <td><img src="${product.img}" alt=""></td>
                <td class="w-25"><h5>${product.name}</h5></td>
                <td><h5>${product.price}</h5></td>
            </tr>     
            
        `
        wishes.appendChild(wish);
}





// Register


const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const modalBg = document.getElementById('LoginModal');            
const login_logo=document.getElementById("main_login");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("email").value;
  const password = document.getElementById("psw").value;
  const storedPassword = localStorage.getItem(username);
  if (storedPassword) {
    alert("Username already exists. Please choose a different username.");
  } else {
    localStorage.setItem(username, password);
    alert("Signup successful!");
    signupForm.reset();
  }
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("login-email").value;
  const password = document.getElementById("login-psw").value;
  const storedPassword = localStorage.getItem(username);
  if (password === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Incorrect username or password.");
  }
  loginForm.reset();
  modalBg.style.display="none";



});








// for search results

const searchInput = document.querySelector("#input_srch");
const input = searchInput.querySelector('input');
const results = searchInput.querySelector("#resultBox");

// Listen for the enter key to be pressed in the search input
input.addEventListener("keydown", function (event) {
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



input.addEventListener("input", function (event) {
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



let nav = document.querySelectorAll(".active-nav");

let nav_click = document.querySelectorAll(".nav-item1");

// nav[1].classList.add("active-nav1")

for (let i = 0; i < nav.length; i++) {
    nav_click[i].addEventListener("click", (e) => {
        // Remove "active-nav1" class from all buttons

        nav.forEach((item) => {
            item.classList.remove("active");
        });

        // Add "active-nav1" class to the clicked button
        nav[i].classList.add("active");

     let content =   nav[i].getAttribute("data-category");
      display(content);
    });
}
 function display(content)
 {  
    let items  = document.getElementById("product-list");
    items.innerHTML="";
    switch(content)
    {
        case "top":
            fetch("product.json")
.then(response => response.json())
.then(data => {


     for(let i=0;i<data.product.length-4;i++){
           
          let product = data.product[i];
            

          let item = document.createElement("div");

          item.innerHTML=`
          <div class='item'>
          <div class="card position-relative m-4" style="width: 300px;">
          <div class="badge-overlay">
              <!-- Change Badge Position, Color, Text here-->
              <span class="top-left badge ">${product.off}</span>
          </div>
          <span
              class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
              ${product.discount}
          </span>
          <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
          <div class="card-body pt-0 px-0">
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <a class="d-flex flex-column text-muted mb-1">
                      ${product.brand}
                  </a>
                  <p class="d-flex flex-column text-muted mb-2">${product.model}
                  </p>
              </div>
              <div id="buy">
              <strong class="pl-3">${product.name}</strong>
              <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
              </div>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">

                  <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                          CART</button>&nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p>Buy Now</p>
                  </p>
                  <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                          style="color: red;"></i>Question
                  </p>
              </div>
          </div>
      </div>
      </div>
          `
          items.appendChild(item);
     }
})

    
          
        break;
        case "elec":
            fetch("product.json")
.then(response => response.json())
.then(data => {


     for(let i=4;i<data.product.length;i++){
           
          let product = data.product[i];
            
          let items  = document.getElementById("product-list");

          let item = document.createElement("div");

          item.innerHTML=`
          <div class='item'>
          <div class="card position-relative m-4" style="width: 300px;">
          <div class="badge-overlay">
              <!-- Change Badge Position, Color, Text here-->
              <span class="top-left badge ">${product.off}</span>
          </div>
          <span
              class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
              ${product.discount}
          </span>
          <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
          <div class="card-body pt-0 px-0">
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <a class="d-flex flex-column text-muted mb-1">
                      ${product.brand}
                  </a>
                  <p class="d-flex flex-column text-muted mb-2">${product.model}
                  </p>
              </div>
              <div id="buy">
              <strong class="pl-3">${product.name}</strong>
              <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
              </div>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">

                  <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                          CART</button>&nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p>Buy Now</p>
                  </p>
                  <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                          style="color: red;"></i>Question
                  </p>
              </div>
          </div>
      </div>
      </div>
          `
          items.appendChild(item);
     }
})

        break;
        case "beauty":
            fetch("product.json")
.then(response => response.json())
.then(data => {


     for(let i=2;i<data.product.length-2;i++){
           
          let product = data.product[i];
            
          let items  = document.getElementById("product-list");

          let item = document.createElement("div");

          item.innerHTML=`
          <div class='item'>
          <div class="card position-relative m-4" style="width: 300px;">
          <div class="badge-overlay">
              <!-- Change Badge Position, Color, Text here-->
              <span class="top-left badge ">${product.off}</span>
          </div>
          <span
              class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
              ${product.discount}
          </span>
          <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
          <div class="card-body pt-0 px-0">
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <a class="d-flex flex-column text-muted mb-1">
                      ${product.brand}
                  </a>
                  <p class="d-flex flex-column text-muted mb-2">${product.model}
                  </p>
              </div>
              <div id="buy">
              <strong class="pl-3">${product.name}</strong>
              <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
              </div>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">

                  <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                          CART</button>&nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p>Buy Now</p>
                  </p>
                  <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                          style="color: red;"></i>Question
                  </p>
              </div>
          </div>
      </div>
      </div>
          `
          items.appendChild(item);
     }
})

        break;
        case "fash":
            fetch("product.json")
.then(response => response.json())
.then(data => {


     for(let i=4;i<data.product.length;i++){
           
          let product = data.product[i];
            
          let items  = document.getElementById("product-list");

          let item = document.createElement("div");

          item.innerHTML=`
          <div class='item'>
          <div class="card position-relative m-4" style="width: 300px;">
          <div class="badge-overlay">
              <!-- Change Badge Position, Color, Text here-->
              <span class="top-left badge ">${product.off}</span>
          </div>
          <span
              class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
              ${product.discount}
          </span>
          <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
          <div class="card-body pt-0 px-0">
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <a class="d-flex flex-column text-muted mb-1">
                      ${product.brand}
                  </a>
                  <p class="d-flex flex-column text-muted mb-2">${product.model}
                  </p>
              </div>
              <div id="buy">
              <strong class="pl-3">${product.name}</strong>
              <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
              </div>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">

                  <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                          CART</button>&nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p>Buy Now</p>
                  </p>
                  <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                          style="color: red;"></i>Question
                  </p>
              </div>
          </div>
      </div>
      </div>
          `
          items.appendChild(item);
     }
})

        break;
    





    case "featured":
        fetch("product.json")
.then(response => response.json())
.then(data => {


 for(let i=4;i<data.product.length;i++){
       
      let product = data.product[i];
        
      let items  = document.getElementById("product-list");

      let item = document.createElement("div");

      item.innerHTML=`
      <div class='item'>
      <div class="card position-relative m-4" style="width: 300px;">
      <div class="badge-overlay">
          <!-- Change Badge Position, Color, Text here-->
          <span class="top-left badge ">${product.off}</span>
      </div>
      <span
          class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
          ${product.discount}
      </span>
      <a href="product_detail.html?id=${product.id}"><img src=${product.img} class="card-img-top" width="100%" height="300px">
      <div class="card-body pt-0 px-0">
          <div class="d-flex flex-row justify-content-between p-3 mid">
              <a class="d-flex flex-column text-muted mb-1">
                  ${product.brand}
              </a>
              <p class="d-flex flex-column text-muted mb-2">${product.model}
              </p>
          </div>
          <div id="buy">
          <strong class="pl-3">${product.name}</strong>
          <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
          </div>
          <div class=" add mx-3 mt-3 d-block">
              <input type="number" class="quantity__input" value="1">

              <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                      CART</button>&nbsp; &nbsp; &nbsp;
            <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div class="d-flex flex-row justify-content-between p-3 mid">
              <p class="d-flex flex-column mb-1">
                <p>Buy Now</p>
              </p>
              <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                      style="color: red;"></i>Question
              </p>
          </div>
      </div>
  </div>
  </div>
      `
      items.appendChild(item);
 }
})

    break;
}

 }
    
 
 display("top");