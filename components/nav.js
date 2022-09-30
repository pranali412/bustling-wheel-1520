const navbar = () => {

    return `<div id="complete-navbar">
    <div id="laptop-nav">
        <div id="nav-lap">
            <div class="hamburger-container" onclick="showlist()">
                <i class="fa fa-bars" id="hamburger" style="color: white;"></i>
            </div>
            <!-- child 1 -->
            <img onclick="backToHomePage()" src="https://i.ibb.co/9hnDfPS/logo.png" alt="logo">
            <div id="search">
                <input type="text" id="query" placeholder="Try 'Liquid Lipstics' ">
                <button onclick="fetchAPI()"><i class="fa fa-search"></i>Search</button>
            </div>

            <div id="auth">
                <div id="search-mobile">
                    <i class="fa fa-search" id="search-icon"></i>
                </div>
                <a href="#login/register"><i class="fa fa-user"></i><span class="login"> Login/Register</span></a>
            </div>

            <!-- child 3 -->
            <div id="cart">
                <a href=""><i class="fa fa-search"></i></a>
                <a href="#login/register"><i class="fa fa-user"></i></a>
                <a href="#whislist"><i class="fa-regular fa-heart"></i></a>
                <a href="#Cart"><i class="fa-solid fa-cart-shopping"></i></a>
                <a href="#offer"><i class="fa-solid fa-bullhorn"></i></a>
            </div>
        </div>
        <ul id="list">
            <p onclick="showdropdown()">MAKEUP</p>
            <div id="dropdown">
                <p><a href="./lips.html">Lips</a></p>
                <p><a href="./face.html">Face</a></p>
                <p><a href="./eyes.html">Eyes</a></p>
            </div>
            <li><a href="./brushes_page.html">BRUSHES</a></li>
            <li><a href="#SKINCARE">SKINCARE</a></li>
            <li><a href="#GIFTING">GIFTINGS</a></li>
            <li><a href="#BLOG">BLOG</a></li>
            <li><a href="#OFFER">OFFERS</a></li>
            <li><a href="#STORIES">STORIES</a></li>
        </ul>
    </div>

    <!-- Hamburger Nav -->
    <div id="ham-nav">
        <div id="cross" onclick="cancel()">
            <i class="fa fa-times"></i>
        </div>
        <img src="https://i.ibb.co/9hnDfPS/logo.png" alt="logo">
        <ul id="ham-list">
            <li><a href="#MAKEUP">MAKEUP</a></li>
            <li><a href="./brushes_page.html">BRUSHES</a></li>
            <li><a href="#SKINCARE">SKINCARE</a></li>
            <li><a href="#GIFTING">GIFTINGS</a></li>
            <li><a href="#BLOG">BLOG</a></li>
            <li><a href="#OFFER">OFFERS</a></li>
            <li><a href="#STORIES">STORIES</a></li>
            <li><a href="#MORE">MORE</a></li>
        </ul>
        <div id="down">
            <h3>Downlod Our Sugar App</h3>
            <button>Install Now</button>
        </div>
    </div>
</div>`

}

export default navbar;