iframe = document.getElementsByClassName("text-iframe")[0]

home_page = document.getElementById("home-page")
home_page.onclick = homePage(); { homePage() };

function homePage() {
    iframe.src = "/pages/home-page.html"
}

about_us = document.getElementById("about-us")
about_us.onclick = aboutUs(); { aboutUs() };

function aboutUs() {
    iframe.src = "/pages/about-us.html"
}

// alert("loaded")
