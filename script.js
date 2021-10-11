$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 600){
            $('.navbar-portfolio').addClass("sticky");
        }else{
            $('.navbar-portfolio').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar-portfolio .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar-portfolio .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Electrical Engineer (or almost)", "IEEE Volunteer", "Programmer", "Roboticist"],        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Electrical Eng. (almost)", "IEEE Volunteer", "Programmer", "Roboticist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

let stars = document.getElementById('stars');
let rock = document.getElementById('rock');
let fire = document.getElementById('fire');
let robots = document.getElementById('robots');
let contact_btn = document.getElementById('contact_btn');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let txt3 = document.getElementById('txt3');

window.addEventListener('scroll', function()
{
    let value = window.scrollY;
    stars.style.left = -0.4 * value + 'px';
    stars.style.top = 0.6 * value + 'px';


    if (value <= 500)
    {   
        robots.style.marginTop = 0.2 * value + 'px';
        robots.style.left = 0.1 * value + 'px';
        fire.style.left = 0.06 * value + 'px';
    }

    txt1.style.right = value + 'px';
    txt2.style.right = value + 'px';
    txt3.style.right = value + 'px';
    contact_btn.style.opacity = 100 - 0.3*value + '%';

})
