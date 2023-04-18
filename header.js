
const header=document.getElementById('header');
header.innerHTML=`
<!-- media query html -->

<div class="blue_med">
  <div>
    <a href="#" class="cart" id="main_login" data-toggle="modal" data-target="#LoginModal"><i
        class="fa-solid fa-user fa-2x"></i>Login</a>
    <a href="#" class="cart" data-toggle="modal" data-target="#RegisterModal"><i
        class="fa-solid fa-pencil fa-2x"></i>Register</a>
  </div>
  <div class="drop_med">
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">English</button>
    <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown">$ US Dollar</button>
  </div>
</div>


<div class="sec_1_med">
  <div class="journal">
    <h1>JOURNAL</h1>
  </div>
</div>






<!-- Original CONTENT -->


<header>
  <div class="four">
    <a href="index.html"><i class="fa-solid fa-house fa-2x"></i>&nbsp;&nbsp;Home</a>
    <a><i class="fa-solid fa-award fa-2x"></i>&nbsp;&nbsp;About Us</a>
    <a><i class="fa-regular fa-envelope fa-2x"></i>&nbsp;&nbsp;Contact</a>
    <a class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false"><i class="fa-sharp fa-regular fa-circle-question fa-2x"></i>&nbsp;&nbsp;FAQ</a>
  </div>
  <div class="drop">
    <a class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false"> &#127468;&#127463; English</a>
    <a class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">$ US Dollar</a>
  </div>
  <div class="menu">
    <a><i class="fa-solid fa-user "></i><i class="fa-solid fa-bars"></i> More Menu</a>
    <a><i class="fa-sharp fa-solid fa-truck"></i> Delivery</a>

  </div>
</header>

<div class="sec_1">
  <div class="journal">
    <h1>JOURNAL</h1>
  </div>
  <div class="input-groupss">
    <div class="dropdown" id="all">
      <button class="dropbtn">All<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>

    <div class="form-outline" id="input_srch">
      <input type="search" id="form1" class="form-control" placeholder="search please..." />
      <div>
        <!-- here list are inserted from javascript -->
        <ul id="resultBox">
        </ul>
      </div>
      <label class="form-label" for="form1" placeholder="searchhh"></label>
    </div>


    <div class="srch_btn" id="icon">
      <button type="button" class="btn btn-primary" style="background-color: blue;">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
  <div class="handle">
    <a href="#" class="cart" data-toggle="modal" data-target="#LoginModal"><i
        class="fa-solid fa-user fa-2x"></i>Login</a>
    <a href="#" class="cart" data-toggle="modal" data-target="#RegisterModal"><i
        class="fa-solid fa-pencil fa-2x"></i>Register</a>
    <a href="#" class="cart" data-toggle="modal" data-target="#wishModals"><i
        class="fa-regular fa-heart fa-2x"></i>Wishlist</a>
    <a><i class="fa-solid fa-arrow-right-arrow-left fa-2x"></i>Compare</a>
    <a href="#" class="cart" data-toggle="modal" data-target="#exampleModal"><i
        class="fa-solid fa-cart-shopping fa-2x "></i></a>
  </div>
</div>










<!-- REGISTER -->


<div class="modal fade" id="RegisterModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModal"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Register Page</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modal-lg">
        <form id="signup-form">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

        <!-- <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required> -->


        <button type="submit" class="registerbtn" id="btnsubmit" >Register</button>
        </form>
      </div>
    </div>
  </div>
</div>




<!-- Login -->

<div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModal" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Login Page</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modal-lg">
        <form id="login-form">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="login-email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="login-psw" required>

        <button type="submit" class="registerbtn" id="login_btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>












<!-- Modal for CART -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModal"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">CART</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="cart-container" class="modal-body modal-lg">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- Modal for Wishlist -->
<div class="modal fade" id="wishModals" tabindex="-1" role="dialog" aria-labelledby="myLargeModal" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Wishlist</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="wish-container" class="modal-body ">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
            </tr>
          </thead>

        </table>
      </div>
    </div>
  </div>
</div>






<div class="blue">
  <div class="dep_secs">
    <a class="dep"><i class="fa-solid fa-bars"></i> ALL DEPARTMENTS</a>
    <span class="position-absolute top-0 start-100 translate-middle badge_DEP  ">
      SALE
    </span>
    <h4>MULTILEVEL</h4>
    <h4>MEGA MENU</h4>
    <span class="position-absolute top-0 start-100 translate-middle badge_MENU  ">
      NEW
    </span>
    <h4>FULLWIDTH</h4>
  </div>
  <div class="blue_right">
    <a><i class="fa-solid fa-phone-volume"></i> 9414179914</a>
    <div class="blog">
      <a><i class="fa-solid fa-message"></i> BLOGS</a>
    </div>
  </div>
</div>
    </div>
  </div>

</div>`
