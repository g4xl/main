import os

# مسارات ملفات LTR و RTL
ltr_dir = '/Users/iphomax/Downloads/hexo-theme-butterfly-dev/source/css'
rtl_dir = '/Users/main/blog/themes/butterfly/source/css'

# وظيفة لمحاولة فتح الملف باستخدام عدة ترميزات
def read_file_with_encoding(file_path):
    encodings = ['utf-8', 'ISO-8859-1']  # قائمة الترميزات الممكنة
    for enc in encodings:
        try:
            with open(file_path, 'r', encoding=enc) as f:
                return f.readlines()
        except UnicodeDecodeError:
            print(f"فشل في استخدام الترميز {enc} مع {file_path}. محاولة الترميز التالي.")
    raise UnicodeDecodeError(f"فشل قراءة الملف باستخدام جميع الترميزات المتاحة: {file_path}")

# التحقق من الفروقات بين ملفات LTR و RTL
def modify_lines_with_conditions():
    for root, dirs, files in os.walk(ltr_dir):
        for file in files:
            ltr_file = os.path.join(root, file)
            rtl_file = os.path.join(rtl_dir, os.path.relpath(ltr_file, ltr_dir))

            # تحقق مما إذا كان ملف RTL موجودًا
            if os.path.exists(rtl_file):
                # قراءة محتوى LTR و RTL باستخدام الترميز الصحيح
                ltr_lines = read_file_with_encoding(ltr_file)
                rtl_lines = read_file_with_encoding(rtl_file)

                # إنشاء ملف جديد لدمج الأسطر المعدلة
                output_file = ltr_file.replace(ltr_dir, ltr_dir + '_merged')
                os.makedirs(os.path.dirname(output_file), exist_ok=True)

                with open(output_file, 'w', encoding='utf-8') as out_f:
                    for ltr_line, rtl_line in zip(ltr_lines, rtl_lines):
                        # إذا كان السطر مختلفًا بين LTR و RTL
                        if ltr_line != rtl_line:
                            # إضافة شرط RTL
                            out_f.write('if hexo-config("direction") == "rtl"\n')
                            out_f.write('  ' + rtl_line)
                            out_f.write('else\n')
                            out_f.write('  ' + ltr_line)
                        else:
                            # إذا لم يكن مختلفًا، نكتب السطر كما هو
                            out_f.write(ltr_line)

                print(f"تم تعديل الملف: {output_file}")

# تنفيذ التعديلات
modify_lines_with_conditions()
