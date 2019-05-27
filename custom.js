//NAVBAR НАВБАР/**//**//**//**//**/

let yel1 = document.querySelector('.navMenu1');
let yel2 = document.querySelector('.navMenu2');
let yel3 = document.querySelector('.navMenu3');
let yel4 = document.querySelector('.navMenu4');
let yel5 = document.querySelector('.navMenu5');
let yel6 = document.querySelector('.fa-shopping-cart');
let yel7 = document.querySelector('.fa-search');


yel1.addEventListener('mouseover', function() {
    $(".yellow1").removeClass('yelHr1');
});

yel1.addEventListener('mouseout', function() {
    $(".yellow1").addClass('yelHr1');
});

yel2.addEventListener('mouseover', function() {
    $(".yellow2").removeClass('yelHr2');
});

yel2.addEventListener('mouseout', function() {
    $(".yellow2").addClass('yelHr2');
});

yel3.addEventListener('mouseover', function() {
    $(".yellow3").removeClass('yelHr3');
});

yel3.addEventListener('mouseout', function() {
    $(".yellow3").addClass('yelHr3');
});

yel4.addEventListener('mouseover', function() {
    $(".yellow4").removeClass('yelHr4');
});

yel4.addEventListener('mouseout', function() {
    $(".yellow4").addClass('yelHr4');
});

yel5.addEventListener('mouseover', function() {
    $(".yellow5").removeClass('yelHr5');
});

yel5.addEventListener('mouseout', function() {
    $(".yellow5").addClass('yelHr5');
});

yel6.addEventListener('mouseover', function() {
    $(".yellow6").removeClass('yelHr6');
});

yel6.addEventListener('mouseout', function() {
    $(".yellow6").addClass('yelHr6');
});

yel7.addEventListener('mouseover', function() {
    $(".yellow7").removeClass('yelHr7');
});

yel7.addEventListener('mouseout', function() {
    $(".yellow7").addClass('yelHr7');
});

/**//**//**//**//**//**//**//**//**//**//**//**//**//**/

/*<!--  БЛОК ABOUT US  -->*/
/**//**//**//**//**//**//**//**//**//**//**//**/

let aboutBlock1 = document.querySelector('.clickWindow1');
let aboutBlock2 = document.querySelector('.clickWindow2');
let aboutBlock3 = document.querySelector('.clickWindow3');

//    ГРАДИЕНТ/**//**//**/
aboutBlock1.addEventListener('mouseover', function() {
    
    $(".bg_us1").addClass('infoOpacity');
    $(".imgTextUs1").removeClass('infoVis');
    
});

aboutBlock1.addEventListener('mouseout', function() {
    
    $(".bg_us1").removeClass('infoOpacity');
    $(".imgTextUs1").addClass('infoVis');
    
});

aboutBlock2.addEventListener('mouseover', function() {
    
    $(".bg_us2").addClass('infoOpacity');
    $(".imgTextUs2").removeClass('infoVis');
    
});

aboutBlock2.addEventListener('mouseout', function() {
    
    $(".bg_us2").removeClass('infoOpacity');
    $(".imgTextUs2").addClass('infoVis');
    
});

aboutBlock3.addEventListener('mouseover', function() {
    
    $(".bg_us3").addClass('infoOpacity');
    $(".imgTextUs3").removeClass('infoVis');
    
});

aboutBlock3.addEventListener('mouseout', function() {
    
    $(".bg_us3").removeClass('infoOpacity');
    $(".imgTextUs3").addClass('infoVis');
    
});


/**//**//**//**//**//**//**//**/
//    СДВИГ/**//**//**/
aboutBlock1.addEventListener('mouseover', function() {
    
    $(".imgAboutUs1").animate({left: "-=10", top: "-=10"}, 300);
    $(".infoAboutUs1").animate({left: "-=10", top: "-=10"}, 300);
    
});

aboutBlock1.addEventListener('mouseout', function() {
    
    $(".imgAboutUs1").animate({top: "+=10", left: "+=10"}, 300);
    $(".infoAboutUs1").animate({left: "+=10", top: "+=10"}, 300);
    
});

aboutBlock2.addEventListener('mouseover', function() {
    
    $(".imgAboutUs2").animate({left: "-=10", top: "-=10"}, 300);
    $(".infoAboutUs2").animate({left: "-=10", top: "-=10"}, 300);
    
});

aboutBlock2.addEventListener('mouseout', function() {
    
    $(".imgAboutUs2").animate({top: "+=10", left: "+=10"}, 300);
    $(".infoAboutUs2").animate({left: "+=10", top: "+=10"}, 300);
    
});

aboutBlock3.addEventListener('mouseover', function() {
    
    $(".imgAboutUs3").animate({left: "-=10", top: "-=10"}, 300);
    $(".infoAboutUs3").animate({left: "-=10", top: "-=10"}, 300);
    
});

aboutBlock3.addEventListener('mouseout', function() {
    
    $(".imgAboutUs3").animate({top: "+=10", left: "+=10"}, 300);
    $(".infoAboutUs3").animate({left: "+=10", top: "+=10"}, 300);
    
});
////////////////////////////////////////////////


//WHAT WE DO/**//**//**//**//**//**//**//**//**/
let actBtn2 = document.querySelector('.btn2');
let actBtn1 = document.querySelector('.btn1');
let actBtn3 = document.querySelector('.btn3');

var chev1 = document.querySelector('.chevron-down1');
var chev2 = document.querySelector('.chevron-down2');
var chev3 = document.querySelector('.chevron-down3');

$('.chevron-down1').addClass('chevron_up');   

chev1.style.transform = chev1.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";

var i_che = 0;


actBtn1.addEventListener('click', function() {
    
    $('#collapseTwo').removeClass('show');
    $('#collapseThree').removeClass('show');
    
    $('#doImg1').removeClass('displayImg');
    $('#doImg2').addClass('displayImg');
    $('#doImg3').addClass('displayImg');
    
    chev1.style.transform = chev1.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
    
    if ($(".chevron-down1").hasClass("chevron_up") === true) {
        $('.chevron-down1').removeClass('chevron_up');  
    } else {
        $('.chevron-down1').addClass('chevron_up');  
    };
    
    if(chev2.classList.contains('chevron_up')) {
        chev2.style.transform = chev2.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down2').removeClass('chevron_up');
    };
    
    if(chev3.classList.contains('chevron_up')) {
        chev3.style.transform = chev3.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down3').removeClass('chevron_up');
    };
  
})

actBtn2.addEventListener('click', function() {
    
    $('#collapseOne').removeClass('show');
    $('#collapseThree').removeClass('show');
    
    $('#doImg1').addClass('displayImg');
    $('#doImg2').removeClass('displayImg');
    $('#doImg3').addClass('displayImg');
    
    
    chev2.style.transform = chev2.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)"; 
    
    if ($(".chevron-down2").hasClass("chevron_up") === true) {
        $('.chevron-down2').removeClass('chevron_up');  
    } else {
        $('.chevron-down2').addClass('chevron_up');  
    };
    
    if(chev1.classList.contains('chevron_up')) {
        chev1.style.transform = chev1.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down1').removeClass('chevron_up');
    };
    
    if(chev3.classList.contains('chevron_up')) {
        chev3.style.transform = chev3.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down3').removeClass('chevron_up');
    };
    
})

actBtn3.addEventListener('click', function() {
    
    $('#collapseTwo').removeClass('show');
    $('#collapseOne').removeClass('show');
    
    $('#doImg1').addClass('displayImg');
    $('#doImg2').addClass('displayImg');
    $('#doImg3').removeClass('displayImg');
    
    
    chev3.style.transform = chev3.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";   
    
    if ($(".chevron-down3").hasClass("chevron_up") === true) {
        $('.chevron-down3').removeClass('chevron_up');  
    } else {
        $('.chevron-down3').addClass('chevron_up');  
    };
    
    if(chev1.classList.contains('chevron_up')) {
        chev1.style.transform = chev1.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down1').removeClass('chevron_up');
    };
    
    if(chev2.classList.contains('chevron_up')) {
        chev2.style.transform = chev2.style.transform == "rotate(180deg)"?"rotate(0deg)":"rotate(180deg)";
        
        $('.chevron-down2').removeClass('chevron_up');
    };
  
})
///////////////////////////////////////////////////////
/**//**//**//**//**//**//**//**//**//**//**//**//**//**/

$('.galleryImage1').on('click', function() {
                var newUrl = "images/gallery1.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage2').on('click', function() {
                var newUrl = "images/gallery2.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage3').on('click', function() {
                var newUrl = "images/gallery3.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage4').on('click', function() {
                var newUrl = "images/gallery4.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage5').on('click', function() {
                var newUrl = "images/gallery5.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage6').on('click', function() {
                var newUrl = "images/gallery6.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

$('.galleryImage7').on('click', function() {
                var newUrl = "images/gallery7.png";
                var image = $("#fullImage");
                var src = image.attr("src");
                image.attr("src", newUrl);
                $('#fullImageModal').modal();
        });

/**//**//**//**//**//**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/
//БЛОК С АВТОРАМИ

let actBox1 = document.querySelector('.contactsTeam1');
let actBox2 = document.querySelector('.person2');
let actBox3 = document.querySelector('.person3');

let urlBox11 = document.querySelector('.url11');
let urlBox12 = document.querySelector('.url12');
let urlBox13 = document.querySelector('.url13');
let urlBox14 = document.querySelector('.url14');

let backBox1 = document.querySelector('.contactsTeam1');


//    ССЫЛКИ
backBox1.addEventListener('mouseover', function() {
    
    $(".bg_person1").addClass('backs');
    $(".webUrls").removeClass('urlVis1');
    
});
backBox1.addEventListener('mouseout', function() {
    
    $(".bg_person1").removeClass('backs');
    $(".webUrls").addClass('urlVis1');
    
});


urlBox11.addEventListener('mouseover', function() {
    
    $(".fa-facebook-f").addClass('changeIcon');
    
});

urlBox11.addEventListener('mouseout', function() {
    
    $(".fa-facebook-f").removeClass('changeIcon');
    
});

urlBox12.addEventListener('mouseover', function() {
    
    $(".fa-twitter").addClass('changeIcon');
    
});

urlBox12.addEventListener('mouseout', function() {
    
    $(".fa-twitter").removeClass('changeIcon');
    
});

urlBox13.addEventListener('mouseover', function() {
    
    $(".fa-pinterest-p").addClass('changeIcon');
    
});

urlBox13.addEventListener('mouseout', function() {
    
    $(".fa-pinterest-p").removeClass('changeIcon');
    
});

urlBox14.addEventListener('mouseover', function() {
    
    $(".fa-instagram").addClass('changeIcon');
    
});

urlBox14.addEventListener('mouseout', function() {
    
    $(".fa-instagram").removeClass('changeIcon');
    
});


//    СДВИГ
actBox1.addEventListener('mouseover', function() {
    
    $("#box1").animate({left: "-=10", top: "-=10"}, 300);
    $(".contactsTeam1").animate({left: "-=10", top: "-=10"}, 300);
    
});

actBox1.addEventListener('mouseout', function() {
    
    $("#box1").animate({top: "+=10", left: "+=10"}, 300);
    $(".contactsTeam1").animate({left: "+=10", top: "+=10"}, 300);
    
});


actBox2.addEventListener('mouseover', function() {
    
    $("#box2").animate({left: "-=10", top: "-=10"}, 300);
    
});

actBox2.addEventListener('mouseout', function() {
    
    $("#box2").animate({top: "+=10", left: "+=10"}, 300);
    
});


actBox3.addEventListener('mouseover', function() {
    
    $("#box3").animate({left: "-=10", top: "-=10"}, 300);
    
});

actBox3.addEventListener('mouseout', function() {
    
    $("#box3").animate({top: "+=10", left: "+=10"}, 300);
    
});










