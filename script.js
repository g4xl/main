document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // إضافة فئة الوضع الليلي كافتراضي
    document.body.classList.add('dark-mode');
});

document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');
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
