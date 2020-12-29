
Vue.component('navbar',{
  template:`
  <header>
    <section>
        <div class="wrapper">
            <div class="icon">
                <span class="line top"></span>
                <span class="line center"></span>
                <span class="line bottom"></span>
            </div>
        </div>
        <div class="header">
            <img src="images/travel-logo.png" class="main-image" alt="">
            <img src="images/logo.png" alt="Arlo" class="logo">
            <nav>
                <ul>
                    <li><a href="#main3">Main Templates</a></li>
                    <li><a href="#main6">Documentation</a></li>
                </ul>
            </nav>
            
        </div>
    </section>
  </header>
  `
})
Vue.component('main1',{
  
  template:`
  <section class="container">
      <div class="text-center main1">
          <img src="images/logo 2.png" alt="Arlo">
          <h1>You deserve <span>better</span>. Get Arlo.</h1>
          <p>Enjoy the diversity of the most beautiful portfolio theme on the market. Arlo showcases your work in the best way that you always wanted.</p>
          <button><img src="images/logo.png">Purchase Arlo</button>
      </div>
  </section>
  `
  
})
Vue.component('main2',{
  props:['source','paragraph'],
  template:`
  <section class="main2 text-center">
      <div class="container">
          <h2>{{source}}</h2>
          <p>{{paragraph}}</p>
      </div>
  </section>
  `
})
Vue.component('main3',{
  template:`
  <section class="main3" id="main3">
      <div class="text-center container">
          <ul class="gallery-links">
              <li data-filter="all" class="active">All</li>
              <li data-filter=".agency">Agency</li>
              <li data-filter=".business">Business</li>
              <li data-filter=".personal">Personal</li>
              <li data-filter=".portfolio">Portfolio</li>
              <li data-filter=".travel">Travel</li>
          </ul>
      </div>
  </section>
  `
})
Vue.component('main4',{
  props:['images'],
  template:`
  <section class="main4">
      <div class="row mixitup2 text-center">
          <div :class="image.class" v-for="image in images">
              <div class="images">
                  <img :src=image.photo>
              </div>
              <p class="text-center">{{image.text}}</p>   
          </div>
      </div>
  </section>
  `
})
Vue.component('main5',{
  props:['classes','images2'],
  template:`
  <section class="main5">
      <div class="row">
          <div :class="classes" v-for="image2 in images2">
              <div class="spaces2">
                  <div class="images2">
                      <img :src="image2.photo2" alt="">
                  </div>
                  <p class="text-center">{{image2.text2}}</p>
              </div>
          </div>
      </div>
  </section>
  `
})
Vue.component('main6',{
  props:['services'],
  template:`
  <section class="main6" id="main6">
      <h2 class="text-center">Main <span>features</span> of my design</h2>
      <div class="row text-center">
          <div class="col-lg-4 col-md-6 main6-divisions" v-for="service in services">
              <div class="hvr-underline-from-center">
                  <i :class="service.icon" aria-hidden="true"></i>
                  <h5>{{service.text}}</h5>
              </div>
          </div>
      </div>
  </section>
  `
})
Vue.component('main7',{
  props:['slides'],
  template:`
  <section class="main7">
      <hr>
      <ul id="lightSlider">
          <li v-for="slide in slides"> 
              <p>{{slide.paragraph}}</p>
              <img :src="slide.image" alt="">
              <h6>{{slide.head}}</h6>
              <span>{{slide.span}}</span>
          </li>
      </ul>
  </section>
  `
})
Vue.component('foot',{
  props:['slides'],
  template:`
  <section>
      <div class="container text-center">
          <p>Create stunning websites now. Purchase Arlo. Just For <span>$13</span></p>
          <button><img src="images/logo.png">Purchase Arlo</button>
      </div>
  </section>
  `
})



new Vue({
  el:"#app",
  data:function(){
    return{
      images: [
        {
          photo:"images/10.jpg",
          class:"col-lg-4 col-md-6 mix spaces personal",
          text:"Personal - Albert Walkers"
        },
        {
          photo:"images/11.jpg",
          class:"col-lg-4 col-md-6 mix spaces personal",
          text:"Personal - Noir Ragoli"
        },
        {
          photo:"images/12.jpg",
          class:"col-lg-4 col-md-6 mix spaces personal",
          text:"Personal - Jacob Barnes"
        },
        {
          photo:"images/13.jpg",
          class:"col-lg-4 col-md-6 mix spaces portfolio",
          text:"Creative Portfolio #1"
        },
        {
          photo:"images/8.jpg",
          class:"col-lg-4 col-md-6 mix spaces portfolio",
          text:"Minimal Portfolio"
        },
  
        {
          photo:"images/15.jpg",
          class:"col-lg-4 col-md-6 mix spaces agency",
          text:"Digital Agency #1"
        },
        {
          photo:"images/16.jpg",
          class:"col-lg-4 col-md-6 mix spaces agency",
          text:"Digital Agency #2"
        },
        {
          photo:"images/17.jpg",
          class:"col-lg-4 col-md-6 mix spaces business",
          text:"Corporate Business"
        },
        {
          photo:"images/18.jpg",
          class:"col-lg-4 col-md-6 mix spaces travel",
          text:"Travel Blog"
        },
        {
          photo:"images/19.jpg",
          class:"col-lg-4 col-md-6 mix spaces portfolio",
          text:"Creative Portfolio #2"
        },
      ],
      images2:[
          [
          {
            photo2:"images/24.jpg",
            text2:"Portfolio Single #1"
          },
          {
            photo2:"images/16.jpg",
            text2:"Portfolio Single #2"
          },
          {
            photo2:"images/10.jpg",
            text2:"Portfolio Single #3"
          },
          {
            photo2:"images/11.jpg",
            text2:"Portfolio Single #4"
          },
        ],
        [
          {
            photo2:"images/25.jpg",
            text2:"Portfolio #1 - Category Filter"
          },
          {
            photo2:"images/26.jpg",
            text2:"Portfolio #2 - Grid List"
          },
          {
            photo2:"images/27.jpg",
            text2:"Portfolio #3 - Masonry List"
          },

        ],
      ],
      services:[
        {
          icon:"fa fa-desktop",
          text:"Fully Responsive"
        },
        {
          icon:"fa fa-picture-o",
          text:"Unlimited Color Skins"
        },
        {
          icon:"fa fa-tasks",
          text:"Fast Loading Speed"
        },
        {
          icon:"fa fa-cogs",
          text:"Easy Customize"
        },
        {
          icon:"fa fa-google",
          text:"Google Fonts"
        },
        {
          icon:"fa fa-compass",
          text:"Cross Browser"
        },
        {
          icon:"fa fa-code",
          text:"Clean Code"
        },
        {
          icon:"fa fa-refresh",
          text:"Awesome Animation"
        },
        {
          icon:"fa fa-user",
          text:"Contact Form"
        },
      ],
      slides:[
        {
          paragraph:"This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price.",
          image:"images/28.jpg",
          head:"Albert Walkers",
          span:"Seo of Gogomedia",
        },
        {
          paragraph:"This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price.",
          image:"images/31.jpg",
          head:"Michael Barbera",
          span:"Photographer",
        },
        {
          paragraph:"This was exactly what I needed for my portfolio, and it looks great. I had a couple issues that support helped troubleshoot both via email and on the comments, which definitely made it worth the price.",
          image:"images/32.jpg",
          head:"Dani Atkins",
          span:"Customer",
        },
      ],
      source:['15+ Main Templates.','4 Portfolio Single Demos','Portfolio Layouts'],
      paragraph:['Please, welcome to new templates of the theme for Home Demos','Please, welcome to new templates of the theme for portfolio single pages.','Please, welcome to new templates of the theme for portfolio pages.'],
      classes:['col-lg-3 col-md-6','col-lg-4 col-md-6']

    }
  }
})



$(window).on("load",function(){ 
  $('body,html').css('height','100vh');
  $("#loading").fadeOut();
  $("#loading").remove;
});

$( document ).ready(function() {
    navbar();
    gallery();
    lightslider();
    var containerEl = document.querySelector('.mixitup2');
    var mixer = mixitup(containerEl);  
});

function navbar(){
  $(".wrapper").click(function(){
    $(".icon").toggleClass("close");
    $(".header nav").slideToggle(400);
    
  });
  $(window).resize(function() {
    if($(window).width()>991.98){
      $(".icon").removeClass("close");
      $(".header nav").show();
    }else{
      $(".header nav").hide();
    }
    if($(window).width()<=991.98){
      $(".icon").removeClass("close");
    }else if($(window).width()<=575.98){
      $(".icon").removeClass("close");
    }else if($(window).width()<=768){
      $(".icon").removeClass("close");
    }
  });
}
function gallery(){
  $(".gallery-links li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active")

  })
}


function lightslider(){
    $("#lightSlider").lightSlider({
      item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: 'container text-center',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
  });
}