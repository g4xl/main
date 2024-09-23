  $(window).resize(function() {
      if ($(window).width() < 768) {
          $('.column-class').css('width', '100%');
      } else {
          $('.column-class').css('width', '50%');
      }
  });
  
