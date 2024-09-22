document.addEventListener('DOMContentLoaded',         function copyDiscountCode() {
            // الحصول على عنصر كود الخصم
            var discountCode = document.getElementById("discountCode").innerText;

            // إنشاء عنصر مؤقت لنسخ النص
            var tempInput = document.createElement("input");
            tempInput.value = discountCode;
            document.body.appendChild(tempInput);

            // تحديد النص ونسخه
            tempInput.select();
            document.execCommand("copy");

            // إزالة العنصر المؤقت
            document.body.removeChild(tempInput);

            // إظهار رسالة تأكيد
            alert("تم نسخ كود الخصم: " + discountCode);
        });

