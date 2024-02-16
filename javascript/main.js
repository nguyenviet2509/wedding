function isMobile() {
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      return true
  }
  return false
}

$('.invite-button-opening').on('click', function() {
  $(this).closest('.invite-front')
  .removeClass('active')
  .addClass('flipped')
  .next('.invite-opening')
  .addClass('active')
  .siblings();

  setTimeout(function() {
    $('.invite-opening').css('opacity', 1);
  }, 200);
});

$('.invite-button-close').on('click', function() {
  $(this).closest('.invite-opening').removeClass('active');
  $(this).closest('.invite-opening').siblings('.invite-front').removeClass('flipped').addClass('active');

  setTimeout(function() {
    $('.invite-opening').css('opacity', 0);
  }, 800);
});

function initMarqueeSlider() {
  gsap.registerPlugin(ScrollTrigger);
  jQuery('.img-scroll-animate').each(function() {
      var container = jQuery(this);
      var isReverse = container.hasClass('reverse');
      var $win = jQuery(window);
      var holder = container.find('.row');
      var timer;
    
      var speed = 1;
      var slides = holder.find('.col-xl-4');
      slides.each(function() {
          var slide = jQuery(this);
          var clone = slide.clone();
          holder.append(clone);   
      });
      var i = isReverse ? holder[0].scrollWidth/2 : 0;
      initInternval();
      
      function initInternval() {
          timer = setInterval(function () {
              holder.css('transform', `translate3d(-${i}px, 0, 0)`);
              if(isReverse) {
                  if (i <= 0 ) {
                    i = holder[0].scrollWidth/2;
                  }
                  i = i  - speed;
              } else {
                  if (i > (holder[0].scrollWidth/2) ) {
                      i = 0;
                  }
                  i = i + speed;
              }
          }, 40);
      }
    
      container.hover(function() {
          clearInterval(timer);
      }, function() {
          initInternval();
      })
    
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: container,
              markers: false,
              toggleActions: 'play reverse play reverse',
              start: "top bottom",
              end: "bottom top",
              scrub: 0.25,
              onUpdate: (self) => {
                  if(isReverse) {
                      gsap.to(container, {x: '+' + self.progress*30+'%'})
                  } else {
                    gsap.to(container, {x: '-' + self.progress*30+'%'})
                  }
              }
          }
      });
  });
}

var snowFall = function() {
  function e() {
      var e = {
              flakeCount: 35,
              flakeColor: "#ffffff",
              flakeIndex: 999999,
              minSize: 1,
              maxSize: 2,
              minSpeed: 1,
              maxSpeed: 5,
              round: !1,
              shadow: !1,
              collection: !1,
              image: !1,
              collectionHeight: 40
          },
          t = [],
          n = {},
          o = 0,
          s = 0,
          a = 0,
          r = 0,
          l = function(e, t) {
              for (var i in t) e.hasOwnProperty(i) && (e[i] = t[i])
          },
          h = function(e, t) {
              return Math.round(e + Math.random() * (t - e))
          },
          m = function(e, t) {
              for (var i in t) e.style[i] = t[i] + ("width" == i || "height" == i ? "px" : "")
          },
          d = function(t, i, n) {
              this.x = h(a, s - a), this.y = h(0, o), this.size = i, this.speed = n, this.step = 0, this.stepSize = h(1, 10) / 100, e.collection && (this.target = canvasCollection[h(0, canvasCollection.length - 1)]);
              var r = null;
              e.image ? (r = new Image, r.src = e.image) : (r = document.createElement("div"), m(r, {
                  background: e.flakeColor
              })), r.className = "snowfall-flakes", m(r, {
                  width: this.size,
                  height: this.size,
                  position: "absolute",
                  top: this.y,
                  left: this.x,
                  fontSize: 0,
                  zIndex: e.flakeIndex
              }), e.round && m(r, {
                  "-moz-border-radius": ~~e.maxSize + "px",
                  "-webkit-border-radius": ~~e.maxSize + "px",
                  borderRadius: ~~e.maxSize + "px"
              }), e.shadow && m(r, {
                  "-moz-box-shadow": "1px 1px 1px #555",
                  "-webkit-box-shadow": "1px 1px 1px #555",
                  boxShadow: "1px 1px 1px #555"
              }), t.tagName === document.body.tagName ? document.body.appendChild(r) : t.appendChild(r), this.element = r, this.update = function() {
                  this.y += this.speed, this.y > o - (this.size + 6) && this.reset(), this.element.style.top = this.y + "px", this.element.style.left = this.x + "px", this.step += this.stepSize, this.x += Math.cos(this.step), (this.x + this.size > s - a || this.x < a) && this.reset()
              }, this.reset = function() {
                  this.y = 0, this.x = h(a, s - a), this.stepSize = h(1, 10) / 100, this.size = h(100 * e.minSize, 100 * e.maxSize) / 100, this.element.style.width = this.size + "px", this.element.style.height = this.size + "px", this.speed = h(e.minSpeed, e.maxSpeed)
              }
          },
          f = function() {
              for (var e = 0; e < t.length; e += 1) t[e].update();
              r = requestAnimationFrame(function() {
                  f()
              })
          };
      return {
          snow: function(r, m) {
              for (l(e, m), n = r, o = n.offsetHeight, s = n.offsetWidth, n.snow = this, "body" === n.tagName.toLowerCase() && (a = 25), window.addEventListener("resize", function() {
                      o = n.clientHeight, s = n.offsetWidth
                  }, !0), i = 0; i < e.flakeCount; i += 1) t.push(new d(n, h(100 * e.minSize, 100 * e.maxSize) / 100, h(e.minSpeed, e.maxSpeed)));
              f()
          },
          clear: function() {
              var e = null;
              e = n.getElementsByClassName ? n.getElementsByClassName("snowfall-flakes") : n.querySelectorAll(".snowfall-flakes");
              for (var t = e.length; t--;) e[t].parentNode === n && n.removeChild(e[t]);
              cancelAnimationFrame(r)
          }
      }
  }
  return {
      snow: function(t, i) {
          if ("string" == typeof i)
              if (t.length > 0)
                  for (var n = 0; n < t.length; n++) t[n].snow && t[n].snow.clear();
              else t.snow.clear();
          else if (t.length > 0)
              for (var n = 0; n < t.length; n++)(new e).snow(t[n], i);
          else(new e).snow(t, i)
      }
  }
}();

if($('.home-page').length > 0) {
  initMarqueeSlider();

  var SNOW_Picture = window.location.origin + '/images/heart.png';
  var special_custom = ['646f6e3d778825e6f306667f', '64a04f6beb89a210fc07656a'];
  window.onload = (event) => {
      setTimeout(function() {
          let flakeCount = 50;
          if (window.innerWidth <= 650) {
              flakeCount = 3;
          }
          snowFall.snow(document.getElementsByTagName('body')[0], {
              image: SNOW_Picture,
              minSize: 15,
              maxSize: 32,
              flakeCount: flakeCount,
              maxSpeed: 3,
              minSpeed: 1
          });
      }, 300);
  };

  $(window).on('load', function() {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
  });
}

if ($('.info.year').length > 0) {
  setInterval(function() {
    var timespan = countdown(new Date("11/27/2021"), new Date());
    $('.info.years span.odometer').text(timespan.years);
    $('.info.months span.odometer').text(timespan.months);
    $('.info.days span.odometer').text(timespan.days);
    $('.info.hours span.odometer').text(timespan.hours);
  }, 1000);
}

if (window.location.hash == '#invitation') {
  if (!isMobile()) {
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $('#invitation').offset().top
      }, 'slow');
    }, 500);
  } else {
    window.location.href = 'invitation.html';
  }
}

if ($('.invite-page').length > 0) {
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      $('.invite-frame, .invite-container').addClass('chrome');
    } else {
      $('.invite-frame, .invite-container').addClass('safari');
    }
  }
}
