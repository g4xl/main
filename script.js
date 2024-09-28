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
            return warmColors[Math.floor(Math.random() * warmColors.length)];
        }
        document.addEventListener("DOMContentLoaded", function() {
            const icons = document.querySelectorAll('.icon');
            icons.forEach(icon => {
                icon.style.color = getRandomWarmColor();
            });
        });
