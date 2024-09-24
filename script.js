        document.addEventListener("DOMContentLoaded", function() {
            const icons = document.querySelectorAll('.random-color');
            icons.forEach(icon => {
                icon.style.color = getRandomColor();
            });
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
        });
  
/*   $(window).resize(function() {
      if ($(window).width() < 768) {
          $('.column-class').css('width', '100%');
      } else {
          $('.column-class').css('width', '50%');
      }
  });
