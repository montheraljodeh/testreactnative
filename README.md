# Car Garage App - React Native

تطبيق React Native لإضافة السيارات إلى الكراج مع دعم الوضع المظلم والفاتح واللغتين العربية والإنجليزية.

## المميزات

- 🎨 تصميم عصري وجميل يطابق المواصفات المطلوبة
- 🌙 دعم الوضع المظلم والفاتح
- 🌍 دعم اللغتين العربية والإنجليزية مع RTL
- 📱 واجهة مستخدم متجاوبة ومحسنة للموبايل
- 🎯 نظام تصميم متكامل مع Design Tokens
- 🔧 مكونات قابلة لإعادة الاستخدام

## التقنيات المستخدمة

- React Native 0.72.6
- TypeScript
- React Context API
- React Native Vector Icons
- Design System مع Design Tokens

## التثبيت والتشغيل

### المتطلبات

- Node.js 16 أو أحدث
- React Native CLI
- Android Studio (للأندرويد)
- Xcode (لـ iOS)

### خطوات التثبيت

1. استنساخ المشروع:
```bash
git clone <repository-url>
cd car-garage-app
```

2. تثبيت التبعيات:
```bash
npm install
```

3. تشغيل التطبيق:

للأندرويد:
```bash
npm run android
```

لـ iOS:
```bash
npm run ios
```

## هيكل المشروع

```
src/
├── components/          # المكونات القابلة لإعادة الاستخدام
│   ├── Button.tsx
│   ├── FileUpload.tsx
│   ├── Header.tsx
│   ├── InputField.tsx
│   ├── BottomNavigation.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageToggle.tsx
├── context/            # سياقات React
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── i18n/              # ملفات الترجمة
│   └── translations.ts
├── screens/           # شاشات التطبيق
│   └── AddCarToGarage.tsx
└── designTokens.ts    # نظام التصميم
```

## المكونات

### Header
رأس الصفحة مع زر العودة والعنوان، يدعم RTL.

### FileUpload
منطقة رفع الملفات مع دعم الصور والنماذج 3D.

### InputField
حقول الإدخال مع دعم RTL والثيمات.

### Button
أزرار قابلة للتخصيص مع حالات التحميل.

### BottomNavigation
شريط التنقل السفلي مع 5 علامات تبويب.

### ThemeToggle
زر تبديل الوضع المظلم/الفاتح.

### LanguageToggle
زر تبديل اللغة العربية/الإنجليزية.

## نظام التصميم

يستخدم التطبيق نظام تصميم متكامل مع:

- **Design Tokens**: ألوان، خطوط، مسافات، أنصاف أقطار
- **Alias Tokens**: ألوان محددة للوضع المظلم والفاتح
- **Typography**: أحجام خطوط وأوزان متنوعة
- **Spacing**: نظام مسافات متناسق
- **Radius**: أنصاف أقطار للعناصر

## الوضع المظلم والفاتح

- **الوضع الفاتح**: خلفية بيضاء مع نصوص داكنة
- **الوضع المظلم**: خلفية داكنة مع نصوص فاتحة
- تبديل تلقائي حسب إعدادات النظام
- إمكانية التبديل اليدوي

## دعم اللغات

- **العربية**: دعم كامل لـ RTL
- **الإنجليزية**: دعم LTR
- تبديل سريع بين اللغتين
- ترجمة جميع النصوص

## المساهمة

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات
4. Push إلى الفرع
5. إنشاء Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## الدعم

لأي استفسارات أو مشاكل، يرجى فتح Issue في المشروع.