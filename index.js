$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
    });
    $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1500])
    })
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })


const bar = document.querySelector(".bar");

const nav_links = document.querySelector(".nav-links"); 
const ham = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");

bar.addEventListener("click",()=>{
    
    nav_links.classList.toggle("active");
    ham.classList.toggle("inactive");
    cross.classList.toggle("active");
})

cross.addEventListener("click",()=>{
    nav_links.classList.remove("active");
    ham.classList.remove("inactive");
    cross.classList.remove("active");
})