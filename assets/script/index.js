
// Hamburger Menu Toggle
$(document).ready(function() {
    $('img[usemap]').rwdImageMaps();
    // $("#header-container").load("header.html");

    $('.hamburger').click(function() {
        $(this).toggleClass('m-active');
        $('.menu').toggleClass('m-active');
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.hamburger, .menu').length) {
            $('.hamburger').removeClass('m-active');
            $('.menu').removeClass('m-active');
        }
    });
        
});

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        
        $("header").removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {            
            
            $("header").removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
