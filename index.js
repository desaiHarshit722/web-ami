$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoPlay: false,
        items: 1,
        center: false,
        nav: true,
        margin: 40,
        dots: false,
        loop: true,
        navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});


// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 100 - Math.random() * 50;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }

//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 50;

  if (this.txt === fullTxt) {
      delta = this.period;
      this.loopNum++;
      this.txt = ''; // Reset text to start typing the next string
  }

  setTimeout(function() {
      that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};












    


let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});





$('.carousel-testimonial').owlCarousel({
  loop:true,
  margin:0,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})





$('#carouselExample').on('slide.bs.carousel', function (e) {

  
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});


$('#carouselExample').carousel({ 
              interval: 2000
      });


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
  $('a.thumb').click(function(event){
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
      var title = $(this).attr("title");
      $('.modal-title').html(title);        
      content.html($(this).html());
      $(".modal-profile").modal({show:true});
  });

});























