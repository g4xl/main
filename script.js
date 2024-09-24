document.addEventListener("DOMContentLoaded", function() {
            const icons = document.querySelectorAll('.random-color');
            icons.forEach(icon => {
                icon.style.color = getRandomWarmColor();
            });
            function getRandomWarmColor() {
                const warmColors = [
                    '#C96868',  // طماطم
                    '#FADFA1',  // برتقالي قوي
                    '#FFF4EA',  // ذهبي
                    '#7EACB5',  // برتقالي داكن
                    '#CED89E',  // سمك السلمون الفاتح
                    '#FFDCAE',  // بني رملي
                    '#D2691E',  // شوكولاتة
                    '#76BA99'   // أحمر بني
                ];
                // اختيار لون عشوائي من القائمة
                return warmColors[Math.floor(Math.random() * warmColors.length)];
            }
        });

  
/*   $(window).resize(function() {
      if ($(window).width() < 768) {
          $('.column-class').css('width', '100%');
      } else {
          $('.column-class').css('width', '50%');
      }
  }); 
