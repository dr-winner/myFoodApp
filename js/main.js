const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
    
    if(window.innerWidth <= 768 && mobile.classList.contains("is-active")){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }    
});

var numOfSteps = 100;
var step_filter = 80;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + numOfSteps + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + numOfSteps + "px"
    });
});

// when click back and next on the menu filter
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + step_filter + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + step_filter + "px"
    });
});
