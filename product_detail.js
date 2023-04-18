const image = document.getElementById('left2');
let images = document.getElementById('left1');
let respon = document.getElementById('respon');
let both = document.getElementById('both')
let description = document.getElementById('desc');
let names=document.getElementById('prod_name')
let head=document.getElementById('head_name')



let param  = new URLSearchParams(window.location.search);
let p = Number(param.get("id"));
console.log(p);
console.log(typeof(p));

fetch("product.json")
.then(response => response.json())
.then(data => {


const product =   data.product.find(product=> product.id === p);


head.innerHTML=`${product.name}`

names.innerHTML =`${product.name}`


image.innerHTML = `<div class="search-image">
    <img src=${product.img} width="370">
</div>`;
images.innerHTML = `
<div class="myimages ">
    <div class="image1 hover-effect"> <!-- Add 'hover-effect' class directly -->
        <img src=${product.img} class="selected" width="80">
    </div>
    <hr>
    <div class="image2">
        <img src=${product.img2} class="selected" width="80">
    </div>
    <hr>
    <div class="image3">
        <img src=${product.img3} class="selected" width="80">
    </div>
    <hr>
    <div class="image3">
        <img src=${product.img4} class="selected" width="80">
    </div>
    <hr>
    <div class="image3">
        <img src=${product.img5} class="selected" width="80">
    </div>

</div>`;






// Add click event listener to images element
images.addEventListener('click', (event) => {
// Check if the clicked target is an image
if (event.target.tagName === 'IMG') {
  // Remove 'selected' class from previously selected image, if any
  const prevSelected = images.querySelector('.selected');
  if (prevSelected) {
      prevSelected.classList.remove('selected');
  }
  // Add 'selected' class to the clicked image
  event.target.classList.add('selected');

  // Update the image element with the clicked image
  image.innerHTML = `<div class="search-image">
      <img src=${event.target.src} width="370">
  </div>`;
}
});


description.innerHTML=`
<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist" >
<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style="font-size: 24px;">Description</button>
<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style="font-size: 24px;">Specifications</button>
<button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style="font-size: 24px;">Review</button>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><strong>  ${product.description} </strong></div>
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><strong>${product.Type} <br>${product.other1} <br>${product.other2} <br>${product.other3}</strong></div>
<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><strong>There are no reviews for this product.</strong></div>
</div>




<p class="mt-4">
                    Unlimited Blocks, Tabs or Accordions with any HTML content can be assigned to any individual
                    product or to certain groups of products, like entire categories, brands, products with specific
                    options, attributes, price range, etc. You can indicate any criteria via the advanced product
                    assignment mechanism and only those products matching your criteria will display the modules.
                </p>
                <p>
                    Also, any module can be selectively activated per device (desktop/tablet/phone), customer login
                    status and other criteria. Imagine the possibilities.&nbsp;
                </p>
                <div class="review-links">
                    <a> Based on 0 reviews </a>
                    <b>-</b>
                    <a>Write a review </a>
                </div>
                <div class="product-price-group d-flex row mt-4 ">
                    <div class="price-group col-md-4">
                        <div class="product-price">
                            $535.00
                        </div>

                        <div class="product-tax">
                            Ex Tax: $535.00
                        </div>
                        <div class="product-reward">
                            price in reward points: 400
                        </div>
                        <div class="product-10">
                            10 or more 69.04$
                        </div>
                        <div class="product-20">
                            20 or more 69.04$
                        </div>
                        <div class="product-30">
                            30 or more 69.04$
                        </div>
                    </div>
                    <div class=" col-md-4">
                        <h5 class=" ml-4 pl-4" id="check" style="color:green"> <i class="fa fa-check"></i>In stock</h5>
                        <Ul>
                            <li>reward points: 100</li>
                            <li>reward points: 100</li>
                            <li>reward points: 100</li>
                            <li>reward points: 100</li>
                        </Ul>
                    </div>
                    <div class=" col-md-4  text-center" id="img_rolex">
                        <img src="g3.jpeg" height="100px" width="100px" alt style="border:1px solid">
                    </div>
</div>

<div class="mt-4">
<h6>Select list*</h6>
<select name="color">
  <option value="">Select a color</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
  <option value="brown">Brown</option>
</select>                    
</div>

           
<div class="mt-4">
<div><h6>Multiple choice*</h6></div> 
<div style="display: flex;">
<div class="newborders" style="border:1px solid;padding: 5px;margin-bottom: 5px;display: flex;margin-left: 5px;">XS</div>
<div class="newborders" style="border:1px solid;padding: 5px;margin-bottom: 5px;display: flex;margin-left: 5px;">S</div>
<div class="newborders" style="border:1px solid;padding: 5px;margin-bottom: 5px;display: flex;margin-left: 5px;">ML</div>
<div class="newborders" style="border:1px solid;padding: 5px;margin-bottom: 5px;display: flex;margin-left: 5px;">XL</div>
</div>
</div>
     
   <div class="mt-4"> 
    <div><h6>Single choice( with images)*</h6></div> 
    <div class="circle-container" style="display: flex;align-items: center;">
     <div class="circle circle-1" style= "width: 60px;height: 60px;border-radius: 50%;margin: 10px;background-color: red;"></div>
     <div class="circle circle-1" style= "width: 60px;height: 60px;border-radius: 50%;margin: 10px;background-color: green;"></div>
     <div class="circle circle-1" style= "width: 60px;height: 60px;border-radius: 50%;margin: 10px;    background-color: blue;"></div>
 </div>
   </div>

<hr>
   <div class="product mt-4" d-flex">
      <div class="quantity" style="margin-right:30px">
          <button style="background-color: #ccc;
          border: none;
          padding: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;">-</button>

          <input type="text" style="width: 5vw; height:2vw" value="1">

          <button style="  background-color: #ccc;
          border: none;
          padding: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;">+</button>


      <button class="add-to-cart" style="  background-color: rgb(9, 9, 158);
      color: #fff;
      margin-right:30px;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      padding: 10px 100px;"><i class="fa-solid fa-cart-shopping"></i> &nbsp;&nbsp;&nbsp;&nbsp;Add to Cart</button>

      <button class="buy-now" style="background-color: green;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      padding: 10px 40px;"> $ &nbsp;&nbsp;&nbsp;Buy Now</button>

      
      <button class="question-mark" style="background-color: rgb(199, 67, 15);
      color: #000;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;">?</button>
      </div>
<hr>
  </div>
  <div class="mt-4" style="display: flex;">
    <div><p><i class="fa-solid fa-heart"></i> &nbsp; Add to Wishlist&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
    <div><span><i class="fa-solid fa-right-left"></i> &nbsp;Compare this Product</span></div>
  </div>

  <div  class="mt-2" style="display: flex;">
    <div><i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;</div><div><i class="fa-solid fa-square-twitter">&nbsp;&nbsp;</i></div><i class="fa-solid fa-square-pinterest">&nbsp;&nbsp;</i><div><i class="fa-solid fa-envelope"></i></div><div>&nbsp;&nbsp;+90</div>
  </div>
    </div>
  </div>

<div class="product-thumb snipcss-TWVoh">
<div class="image">
<div class="quickview-button">
  <a class="btn btn-quickview" data-toggle="tooltip" data-tooltip-class="module-products-253 module-products-grid quickview-tooltip" data-placement="top" title="" onclick="quickview('40')" data-original-title="Quickview">
    <span class="btn-text">
      Quickview
    </span>
  </a>
</div>
<a href="#" class="product-img ">
  <div>
    <img src="shoes.jpg" width="190" height="190" alt="iPhone" title="iPhone" class="img-responsive img-first lazyload lazyloaded" data-ll-status="loaded">
  </div>
</a>
</div>
<div class="caption">
<div class="name">
  <a href="#">
    Shoes
  </a>
</div>
<div class="description">
  Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
</div>
<div class="price">
  <div>
    <span class="price-normal">
      $101.00
    </span>
  </div>
  <span class="price-tax">
    Ex Tax:$101.00
  </span>
</div>
<div class="rating no-rating rating-hover">
  <div class="rating-stars">
    <span class="fa fa-stack">
      <i class="fa fa-star-o fa-stack-2x">
      </i>
    </span>
    <span class="fa fa-stack">
      <i class="fa fa-star-o fa-stack-2x">
      </i>
    </span>
    <span class="fa fa-stack">
      <i class="fa fa-star-o fa-stack-2x">
      </i>
    </span>
    <span class="fa fa-stack">
      <i class="fa fa-star-o fa-stack-2x">
      </i>
    </span>
    <span class="fa fa-stack">
      <i class="fa fa-star-o fa-stack-2x">
      </i>
    </span>
  </div>
</div>
</div>
</div>
</div> 




`






respon.innerHTML=`
<div class="owl-carousel owl-theme">
<div class="types_img"><img src=${product.img}></div>
<div class="types_img"><img src=${product.img2}></div>
<div class="types_img"><img src=${product.img3}></div>
<div class="types_img"><img src=${product.img4}></div>
<div class="types_img"><img src=${product.img5}></div>
</div>
`



// const product = JSON.parse(localStorage.getItem('product'));
console.log(product)
});






$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    responsive: {
      100: {
        items: 1,
      },
      712: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1246: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
    