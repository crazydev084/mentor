// --------------------- humbaguer ----------------//


$(function() {
  $(".hamburger-menu-icon-wrap").click(function(){
    $('.hamburger-menu-line').toggleClass('open'); 
    $('.hamburger-menu').toggleClass('open-spmenu');
  });
});

$(function() {
  $('.open-modal-btn').click(function() {
    $('.hamburger-menu-line').removeClass('open');
    $('.hamburger-menu').removeClass('open-spmenu');
    $('.header-search-menu-wrap').addClass('open-spmenu');
    $('.header-menu-wrap').removeClass('open-spmenu');
    $('.modal-mask').addClass('open-spmenu');
    bodyFixedOff();
  });
});



// --------------------- faq item ----------------//



$(function() {
  $('.faq-item-head').click(function() {
    $(this).next('.faq-item-main').toggleClass('close');
    $(this).find('.__item-collapse__mark').toggleClass('open');
  });
});




$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  $(function() {
    $('.collapse').click(function() {
      $(this).find('.submenu').toggleClass('close');
    });
  });
  
});



// --------------------- history slider ----------------//

$(document).ready(function(){
  $('.history-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 769,  // Sets the breakpoint at 769px
        settings: {
          slidesToShow: 1,  // Shows only one slide on screens less than 769px
          slidesToScroll: 1
        }
      }
    ]
  });
});



// --------------------------- scrolll Triger ---------------------//

// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis()

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0);

// --------------------------- ready for animation ---------------------//

$(window).on("load", function () {
  setTimeout(function () {
      const target = document.querySelectorAll(".js-io");
      const targetArray = Array.prototype.slice.call(target);
      const options = {
      root: null,
      rootMargin: "0% 0% -20% 0%",
      threshold: 0,
      };
      const observer = new IntersectionObserver(callback, options);
      targetArray.forEach((tgt) => {
      observer.observe(tgt);
      });

      function callback(entries) {
      entries.forEach(function (entry, i) {
          const target = entry.target;

          if (entry.isIntersecting && !target.classList.contains("_show")) {
          const delay = i * 100;
          setTimeout(function () {
              target.classList.add("_show");
          }, delay);
          }
      });
      }
  }, 400);
});

// --------------------------- gsap for animation ---------------------//

$(document).ready(function() {
  var browserWidth = $(window).width();

  if(browserWidth > '768') {
      gsap.utils.toArray('.js-plx').forEach(el => {
          const speed = el.getAttribute('data-plx-speed') * 10;
          gsap.set(el,{
              y: speed,
          });
      
          gsap.to(el,{
              y: -1 * speed,
              scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              toggleActions: 'play reverse play reverse',
              scrub: 0.1,
              }
          })
      });
  }

 // --------------------------- loading ---------------------//
  const body = $("body");

  if (body.hasClass("front-page")) {

    $("body").addClass("is-loading");
    
    var imgLoad = imagesLoaded("body");
    
    var progressCnt = $(".c-preloader__progress .progress"),
     images = $("img").length,
     loadedCount = 0,
     loadingProgress = 0,
     loadingBar = $('.loading-bar span'),
     tlProgress = gsap.timeline();
    
    imgLoad.on("progress", function (instance, image) {
     loadProgress();
    });
    
    function loadProgress() {
     loadedCount++;
     loadingProgress = loadedCount / images;
    
     gsap.to(tlProgress, { progress: loadingProgress, duration: 1 });
    }
    
    var tlProgress = gsap.timeline({
     paused: true,
     onUpdate: countPercent,
     onComplete: loadComplete,
    });
    
    tlProgress.to(progressCnt, { width: "100%", duration: 1 });
    
    function countPercent() {
      var newPercent = (tlProgress.progress() * 100).toFixed();
      progressCnt.text(newPercent);
      loadingBar.css('width', newPercent + '%');
    }
    
    function loadComplete() {
      setTimeout(() => {
        $(".loading").addClass('hidden');
        setTimeout(() => {
          $('body').removeClass('is-loading');
          setTimeout(() => {
            $('.sec-fv-main-txt h2 span').addClass('_show');
            setTimeout(() => {
              $('.sec-fv-main-logo__wrap').addClass('_show');
              setTimeout(() => {
                $('.sec-fv-top-deco img').addClass('_show');
                setTimeout(() => {
                  $('.sec-fv-bottom-deco img').addClass('_show');
                  setTimeout(() => {
                    $('.header').addClass('loaded');
                    $('.scroll-down__wrap').addClass('_show');
                  }, 500);
                }, 200);
              }, 300);
            }, 800);
          }, 500);
        }, 200);
      }, 900);
    }
  } else {
    $('body').addClass('loaded');
    $('main').addClass('loaded');
  }
});





// --------------------------- js header ---------------------//


$(window).scroll(function() {
  var scrollPosition = $(this).scrollTop();
  var header = $('.js-header');

  if (scrollPosition > 130) {
    $('.js-header').addClass('fixed-header');
    header.css({
      opacity: '1',
      transform: 'translate(0, 0)'  // Corrected: Removed the semicolon inside the transform value
    });
    
  } else {
    header.css({
      opacity: '0',
      transform: 'translate(0, -130px)'  // Corrected: Added 'px' to -90 to make it valid CSS
    });
  }
});

// --------------------------- pagenation ---------------------//


$(document).ready(function() {
  var itemsPerPage = 15;
  var currentPage = 1;

  // Function to show items for the current page
  function showPage(page) {
      var startIndex = (page - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;

      // Hide all items
      $(".news-item").hide();
      
      // Show items for the current page
      $(".news-item").slice(startIndex, endIndex).show();

      // Update the page number and pagination buttons
      $(".page-number").text(page);
      updatePagination(page);
  }

  // Function to get the total number of pages
  function getTotalPages() {
      return Math.ceil($(".news-item").length / itemsPerPage);
  }

  // Function to update the pagination controls
  function updatePagination(page) {
      var totalPages = getTotalPages();
      var paginationHtml = '';
      var pageNumbers = [];

      // Adjust the page number range based on the total number of pages
      if (totalPages <= 4) {
          // If there are less than 4 pages, show all the pages
          for (var i = 1; i <= totalPages; i++) {
              pageNumbers.push(i);
          }
      } else {
          // Adjust for when there are more than 4 pages
          if (page === 1 || page === 2) {
              // Show pages 1, 2, 3, 4 for page 1 and page 2
              pageNumbers = [1, 2, 3, 4];
          } else if (page === totalPages) {
              // For the last page, show the last 4 pages
              pageNumbers = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
          } else {
              // For pages in between, show 1, 2, current page, and last page
              pageNumbers = [1, 2, page, totalPages];
          }
      }

      // Add page numbers to pagination
      pageNumbers.forEach(function(p) {
          paginationHtml += `<button class="page-number-btn ${p === page ? 'active' : ''}" data-page="${p}">${p}</button>`;
      });

      // Add next and previous buttons
      $(".page-numbers").html(paginationHtml);

      // Disable prev/next buttons based on current page
      $(".prev").prop('disabled', page === 1);
      $(".next").prop('disabled', page === totalPages);
  }

  // Initial page load
  showPage(currentPage);

  // Next button click event
  $(".next").click(function() {
      if (currentPage < getTotalPages()) {
          currentPage++;
          showPage(currentPage);
      }
  });

  // Previous button click event
  $(".prev").click(function() {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  // Pagination number button click
  $(document).on('click', '.page-number-btn', function() {
      currentPage = $(this).data('page');
      showPage(currentPage);
  });

  // -------------------- page nation------------------- //
  $('.toggle-btn div').click(function() {
    $('.toggle-btn div').removeClass('active'); // Remove active from all
    $(this).addClass('active'); // Add active to clicked element
    
    // Determine what to show based on clicked tab
    if ($(this).hasClass('is-award')) {
        $('.award-main').show();
        $('.magazine-main').hide();
    } else if ($(this).hasClass('is-mag')) {
        $('.award-main').hide();
        $('.magazine-main').show();
    }
});
 
});




// --------------------- pdf slider ----------------//

$(document).ready(function(){
  // Initialize the slider
  var $slider = $('.pdf-slider-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });

  // Previous button click handler
  $('.pdf-ctl-prev').on('click', function() {
      $slider.slick('slickPrev');
  });

  // Next button click handler
  $('.pdf-ctl-next').on('click', function() {
      $slider.slick('slickNext');
  });

  // Optionally, update current slide number
  $slider.on('afterChange', function(event, slick, currentSlide){
      $('.current-pdf-num').text(currentSlide + 1); // Adjust index to be 1-based
  });

  // Set total number of slides on initialization
  $('.all-pdf-num').text($slider.slick('getSlick').slideCount);
});


// -------------------------- count animation --------------------------- //

$(document).ready(function () {
  const isFloat = (n) => {
      return Number(n) === n && n % 1 !== 0;
  };

  const getDecimalPointLength = (n) => {
      return (String(n).split('.')[1] || '').length;
  };

  const observeAction = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const $target = $(entry.target);
              if (!$target.hasClass('is-visible')) {
                  const $counterEle = $target.find('.counter .number');
                  const from = parseFloat($target.data('from')) || 0;
                  const to = parseFloat($target.data('to')) || 0;
                  const duration = parseInt($target.data('duration')) || 1500;

                  if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) {
                      return false;
                  }

                  const increment = to - from;
                  const decimalPointLength = getDecimalPointLength(increment);
                  const startTime = performance.now();

                  const countUp = () => {
                      const elapsed = performance.now() - startTime;
                      const countValue = (from + ((elapsed / duration) * increment)).toFixed(decimalPointLength);

                      if (parseFloat(countValue) >= to) {
                          const decimal = (to % 1) * 10;
                          const int = Math.floor(to);
                          if (decimal !== 0) {
                              $counterEle.html('<span>' + int.toLocaleString() + '</span><span class="tag">.' + parseInt(decimal) + '</span>');
                          } else {
                              $counterEle.html('<span>' + int.toLocaleString() + '</span>');
                          }
                      } else {
                          const decimal = (countValue % 1) * 10;
                          if (decimal !== 0) {
                              $counterEle.html('<span>' + Math.floor(countValue).toLocaleString() + '</span><span class="tag">.' + parseInt(decimal) + '</span>');
                          } else {
                              $counterEle.html('<span>' + Math.floor(countValue).toLocaleString() + '</span>');
                          }
                          requestAnimationFrame(countUp);
                      }
                  };

                  requestAnimationFrame(countUp);
                  $target.addClass('is-visible');
              }
          }
      });
  };

  const options = {
      threshold: 1,
  };

  const observer = new IntersectionObserver(observeAction, options);
  $('.counter-item').each(function () {
      observer.observe(this);
  });
});

const items = document.querySelectorAll('.counter-item');

    const isFloat = (n) => {
        return Number(n) === n && n % 1 !== 0;
    }

    const getDecimalPointLength = (n) => {
        return (String(n).split('.')[1] || '').length;
    }

    const observeAction = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains('is-visible')) {
                    const counterEle = entry.target.querySelector('.counter .number');
                    const from = parseFloat(entry.target.dataset.from || 0);
                    const to = parseFloat(entry.target.dataset.to || 0);
                    const duration = parseInt(entry.target.dataset.duration) || 1500;

                    if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) {
                        return false;
                    }

                    const increment = to - from;
                    const deciamlPointLength = getDecimalPointLength(increment);
                    const startTime = performance.now();

                    const countUp = (timestamp) => {
                        const elapsed = performance.now() - startTime;
                        const countValue = (from + ((elapsed / duration) * increment)).toFixed(deciamlPointLength);

                        if (countValue >= to) {
                            var decimal = (to % 1) * 10
                            var int = Math.floor(to)
                            if (decimal != 0) {
                                counterEle.innerHTML = '<span>' + Math.floor(int).toLocaleString() + '</span><span class="tag">.' + parseInt(decimal) + '</span>';
                            }
                            else {
                                counterEle.innerHTML = '<span>' + Math.floor(int).toLocaleString() + '</span>';
                            }
                        } else {
                            var decimal = (countValue % 1) * 10
                            if (decimal != 0) {
                                counterEle.innerHTML = '<span>' + Math.floor(countValue).toLocaleString() + '</span><span class="tag">.' + parseInt(decimal) + '</span>';
                            }
                            else {
                                counterEle.innerHTML = '<span>' + Math.floor(countValue).toLocaleString() + '</span>';
                            }
                            requestAnimationFrame(countUp);
                        }
                    }

                    requestAnimationFrame(countUp);

                    entry.target.classList.add('is-visible');
                }
            }
        });
    }

    const options = {
        threshold: 1,
    }

    const obsever = new IntersectionObserver(observeAction, options);

    items.forEach(target => {
        obsever.observe(target)
            ;
    });
