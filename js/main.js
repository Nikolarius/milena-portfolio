

$(window).on('scroll', function(){
    if ($(window).scrollTop()) {
        $('nav').addClass('stickynav');
    }
    else
    {
        $('nav').removeClass('stickynav')
    }


})




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).on('click', '.introtoggle', function(){
$(".panel-collapse").fadeOut("slow");
$(this).find(".panel-collapse").fadeIn("slow");
$(".arrow_u").removeClass("arrow_u").addClass("arrow_d");
$(this).find(".arrow_d").removeClass("arrow_d").addClass("arrow_u");

});

$(document).on('click', '.nav-item', function(){
  $("#navbarSupportedContent").toggle();
});

$(document).on('click', '.navbar-toggler', function(){
  $("#navbarSupportedContent").toggle('200');
});

$(document).on('click', 'span', function(){
  $(this).addClass('active').siblings().removeClass('active')

})


function openProfile(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
