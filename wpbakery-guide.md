# Полное руководство по созданию страницы "Консультация и диагностика" в WPBakery

## 🎨 Цветовая палитра и шрифты

### Цвета для использования:
```
Основной синий: #0EA5E9
Белый: #FFFFFF
Светло-серый фон: #F8F9FA
Серый текст: #6B7280
Темный текст: #1F2937
Градиент: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)
```

### Шрифты:
```
Заголовки: Montserrat (Bold 600-800)
Текст: Roboto (Regular 400, Medium 500)
```

---

## 📋 ПОШАГОВАЯ ИНСТРУКЦИЯ

---

## 1️⃣ ШАПКА САЙТА (Header)

### В WPBakery:
1. **Backend Editor** → Добавить элемент → **Row**
2. Настройки Row:
   - Layout: 1/6 + 5/6
   - Row Stretch: Stretch row
   - Content Position: Middle
   - Background Color: #FFFFFF
   - Border Bottom: 1px solid #E5E7EB
   - Padding: 20px 0

### Левая колонка (логотип):
1. Добавить **Text Block**
2. HTML код:
```html
<div style="display: flex; align-items: center; gap: 12px;">
  <div style="width: 40px; height: 40px; background: #0EA5E9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <span style="color: white; font-size: 24px;">⚕️</span>
  </div>
  <span style="font-family: Montserrat, sans-serif; font-size: 20px; font-weight: 700; color: #1F2937;">DensaMed</span>
</div>
```

### Правая колонка (кнопка):
1. Добавить **Button**
2. Настройки:
   - Text: "📞 Записаться"
   - Style: Custom
   - Background: #0EA5E9
   - Text Color: #FFFFFF
   - Border Radius: 8px
   - Padding: 12px 24px
   - Font Weight: 500

### CSS для Header:
```css
/* Добавьте в Appearance → Customize → Additional CSS */
.header-sticky {
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
```

---

## 2️⃣ ГЕРОИЧЕСКИЙ БЛОК (Hero Section)

### В WPBakery:
1. **Row** → 2 колонки (1/2 + 1/2)
2. Настройки Row:
   - Background: linear-gradient(to bottom, #FFFFFF, #F8F9FA)
   - Padding: 80px 0

### Левая колонка:
1. **Text Block** (бейдж):
```html
<span style="display: inline-block; background: rgba(14, 165, 233, 0.1); color: #0EA5E9; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; margin-bottom: 20px;">
  Первичная консультация
</span>
```

2. **Heading**:
   - Title: "Консультация и диагностика"
   - Tag: H1
   - Font Family: Montserrat
   - Font Weight: 700
   - Font Size: 48px
   - Color: #1F2937
   - Line Height: 1.2

3. **Text Block** (описание):
```html
<p style="font-size: 18px; color: #6B7280; line-height: 1.7; margin: 24px 0 32px;">
  Профессиональный осмотр, комплексная диагностика и индивидуальный план лечения от опытных стоматологов. Забота о вашей улыбке начинается здесь.
</p>
```

4. **Row внутри колонки** → 2 кнопки:
   - **Button 1**: "📅 Записаться на консультацию"
     - Background: #0EA5E9
     - Color: #FFFFFF
     - Border Radius: 8px
     - Padding: 16px 32px
     - Font Size: 16px
     - Box Shadow: 0 4px 12px rgba(14, 165, 233, 0.3)
   
   - **Button 2**: "📞 Позвонить"
     - Style: Outline
     - Border: 2px solid #0EA5E9
     - Color: #0EA5E9
     - Background: transparent
     - Border Radius: 8px
     - Padding: 16px 32px

### Правая колонка (изображение):
1. **Single Image**
   - URL: загрузите фото консультационного кабинета
   - Image Size: Full
   - Border Radius: 24px
   - Box Shadow: 0 20px 40px rgba(0,0,0,0.1)

### CSS для Hero:
```css
.hero-section img {
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.hero-section img:hover {
  transform: scale(1.02);
}
```

---

## 3️⃣ ЭТАПЫ КОНСУЛЬТАЦИИ (4 карточки)

### В WPBakery:
1. **Row** → 4 колонки (1/4 + 1/4 + 1/4 + 1/4)
2. Настройки Row:
   - Background: #FFFFFF
   - Padding: 80px 0

3. **Title Block** (над карточками):
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Этапы консультации</h2>
  <p style="font-size: 18px; color: #6B7280;">Пошаговый процесс вашего визита</p>
</div>
```

### В каждой колонке добавьте **Message Box**:

**Карточка 1:**
```html
<div class="step-card">
  <div class="step-number">01</div>
  <div class="step-icon">📋</div>
  <h3>Первичный осмотр</h3>
  <p>Детальный осмотр полости рта и выявление проблемных зон</p>
</div>
```

**Карточка 2:**
```html
<div class="step-card">
  <div class="step-number">02</div>
  <div class="step-icon">🔬</div>
  <h3>Диагностика</h3>
  <p>Рентген-снимки и дополнительные исследования при необходимости</p>
</div>
```

**Карточка 3:**
```html
<div class="step-card">
  <div class="step-number">03</div>
  <div class="step-icon">📄</div>
  <h3>План лечения</h3>
  <p>Составление индивидуального плана с учетом ваших пожеланий</p>
</div>
```

**Карточка 4:**
```html
<div class="step-card">
  <div class="step-number">04</div>
  <div class="step-icon">🧮</div>
  <h3>Расчет стоимости</h3>
  <p>Прозрачный расчет стоимости лечения без скрытых платежей</p>
</div>
```

### CSS для этапов:
```css
.step-card {
  background: #FFFFFF;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px 24px;
  position: relative;
  transition: all 0.3s ease;
  min-height: 280px;
}

.step-card:hover {
  border-color: #0EA5E9;
  box-shadow: 0 12px 24px rgba(14, 165, 233, 0.15);
  transform: translateY(-4px);
}

.step-number {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 72px;
  font-weight: 800;
  color: rgba(14, 165, 233, 0.08);
  font-family: Montserrat, sans-serif;
  line-height: 1;
  transition: color 0.3s ease;
}

.step-card:hover .step-number {
  color: rgba(14, 165, 233, 0.15);
}

.step-icon {
  font-size: 48px;
  width: 64px;
  height: 64px;
  background: rgba(14, 165, 233, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.step-card:hover .step-icon {
  background: #0EA5E9;
  transform: scale(1.1);
}

.step-card h3 {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
}

.step-card p {
  font-size: 15px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0;
}
```

---

## 4️⃣ ПРЕИМУЩЕСТВА (6 карточек)

### В WPBakery:
1. **Row** → 3 колонки первый ряд + 3 колонки второй ряд
2. Background: #F8F9FA
3. Padding: 80px 0

### Заголовок секции:
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Наши преимущества</h2>
  <p style="font-size: 18px; color: #6B7280;">Почему пациенты выбирают DensaMed</p>
</div>
```

### В каждой колонке **Icon Box**:

**Преимущество 1:**
```html
<div class="advantage-card">
  <div class="advantage-icon">🏆</div>
  <h3>Опытные специалисты</h3>
  <p>Врачи с опытом работы более 15 лет и международными сертификатами</p>
</div>
```

**Преимущество 2:**
```html
<div class="advantage-card">
  <div class="advantage-icon">🔬</div>
  <h3>Современное оборудование</h3>
  <p>Новейшие технологии диагностики и лечения европейского уровня</p>
</div>
```

**Преимущество 3:**
```html
<div class="advantage-card">
  <div class="advantage-icon">🛡️</div>
  <h3>Безопасность</h3>
  <p>Строгое соблюдение санитарных норм и стерильности инструментов</p>
</div>
```

**Преимущество 4:**
```html
<div class="advantage-card">
  <div class="advantage-icon">🕐</div>
  <h3>Удобный график</h3>
  <p>Работаем ежедневно с 9:00 до 21:00, включая выходные</p>
</div>
```

**Преимущество 5:**
```html
<div class="advantage-card">
  <div class="advantage-icon">❤️</div>
  <h3>Комфорт пациента</h3>
  <p>Индивидуальный подход и внимательное отношение к каждому</p>
</div>
```

**Преимущество 6:**
```html
<div class="advantage-card">
  <div class="advantage-icon">🧾</div>
  <h3>Прозрачные цены</h3>
  <p>Честная стоимость услуг без скрытых доплат и переплат</p>
</div>
```

### CSS для преимуществ:
```css
.advantage-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid transparent;
}

.advantage-card:hover {
  box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  transform: translateY(-8px);
}

.advantage-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.3);
  transition: transform 0.3s ease;
}

.advantage-card:hover .advantage-icon {
  transform: scale(1.15);
}

.advantage-card h3 {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
}

.advantage-card p {
  font-size: 15px;
  color: #6B7280;
  line-height: 1.7;
  margin: 0;
}
```

---

## 5️⃣ СПЕЦИАЛИСТЫ (3 врача)

### В WPBakery:
1. **Row** → 3 колонки (1/3 + 1/3 + 1/3)
2. Background: #FFFFFF
3. Padding: 80px 0

### Заголовок:
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Наши специалисты</h2>
  <p style="font-size: 18px; color: #6B7280;">Команда профессионалов с многолетним опытом</p>
</div>
```

### В каждой колонке:

**Врач 1:**
```html
<div class="doctor-card">
  <div class="doctor-image">
    <img src="URL_ФОТО_ВРАЧА" alt="Иванова Елена Сергеевна" />
  </div>
  <div class="doctor-info">
    <h3>Иванова Елена Сергеевна</h3>
    <p class="doctor-position">Главный врач, стоматолог-терапевт</p>
    <div class="doctor-details">
      <div class="detail-item">💼 20 лет опыта</div>
      <div class="detail-item">🎓 МГМСУ им. Евдокимова</div>
    </div>
  </div>
</div>
```

**Врач 2:**
```html
<div class="doctor-card">
  <div class="doctor-image">
    <img src="URL_ФОТО_ВРАЧА" alt="Петров Андрей Викторович" />
  </div>
  <div class="doctor-info">
    <h3>Петров Андрей Викторович</h3>
    <p class="doctor-position">Стоматолог-ортопед</p>
    <div class="doctor-details">
      <div class="detail-item">💼 15 лет опыта</div>
      <div class="detail-item">🎓 СПбГМУ</div>
    </div>
  </div>
</div>
```

**Врач 3:**
```html
<div class="doctor-card">
  <div class="doctor-image">
    <img src="URL_ФОТО_ВРАЧА" alt="Смирнова Ольга Дмитриевна" />
  </div>
  <div class="doctor-info">
    <h3>Смирнова Ольга Дмитриевна</h3>
    <p class="doctor-position">Стоматолог-хирург</p>
    <div class="doctor-details">
      <div class="detail-item">💼 12 лет опыта</div>
      <div class="detail-item">🎓 РУДН</div>
    </div>
  </div>
</div>
```

### CSS для врачей:
```css
.doctor-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.doctor-card:hover {
  box-shadow: 0 16px 32px rgba(0,0,0,0.15);
  transform: translateY(-8px);
}

.doctor-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.doctor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.doctor-card:hover .doctor-image img {
  transform: scale(1.1);
}

.doctor-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
}

.doctor-info {
  padding: 24px;
}

.doctor-card h3 {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 8px;
}

.doctor-position {
  color: #0EA5E9;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 16px;
}

.doctor-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  font-size: 14px;
  color: #6B7280;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

---

## 6️⃣ ПРАЙС-ЛИСТ

### В WPBakery:
1. **Row** → 1 колонка (Full Width)
2. Background: linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(6, 182, 212, 0.05))
3. Padding: 80px 0

### Заголовок:
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Стоимость услуг</h2>
  <p style="font-size: 18px; color: #6B7280;">Прозрачные цены на консультацию и диагностику</p>
</div>
```

### Таблица цен (используйте элемент **Custom HTML**):
```html
<div class="price-table">
  <div class="price-row">
    <span class="service-name">Первичная консультация стоматолога</span>
    <span class="service-price">Бесплатно</span>
  </div>
  <div class="price-row">
    <span class="service-name">Повторная консультация</span>
    <span class="service-price">500 ₽</span>
  </div>
  <div class="price-row">
    <span class="service-name">Панорамный снимок (ОПТГ)</span>
    <span class="service-price">1 200 ₽</span>
  </div>
  <div class="price-row">
    <span class="service-name">Прицельный рентген-снимок</span>
    <span class="service-price">350 ₽</span>
  </div>
  <div class="price-row">
    <span class="service-name">Компьютерная томография (КТ)</span>
    <span class="service-price">3 500 ₽</span>
  </div>
  <div class="price-row">
    <span class="service-name">Составление плана лечения</span>
    <span class="service-price">Бесплатно</span>
  </div>
  <div class="price-row">
    <span class="service-name">Консультация с составлением сметы</span>
    <span class="service-price">Бесплатно</span>
  </div>
</div>
<p style="text-align: center; color: #6B7280; margin-top: 24px; font-size: 14px;">
  * Стоимость лечения рассчитывается индивидуально после консультации
</p>
```

### CSS для прайс-листа:
```css
.price-table {
  max-width: 900px;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border: 2px solid #E5E7EB;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  transition: background 0.2s ease;
}

.price-row:not(:last-child) {
  border-bottom: 1px solid #E5E7EB;
}

.price-row:hover {
  background: rgba(14, 165, 233, 0.05);
}

.service-name {
  font-size: 16px;
  font-weight: 500;
  color: #1F2937;
}

.service-price {
  font-size: 20px;
  font-weight: 700;
  color: #0EA5E9;
  white-space: nowrap;
  margin-left: 20px;
}
```

---

## 7️⃣ ОТЗЫВЫ (6 карточек)

### В WPBakery:
1. **Row** → 3 колонки × 2 ряда
2. Background: #F8F9FA
3. Padding: 80px 0

### Заголовок:
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Отзывы наших пациентов</h2>
  <p style="font-size: 18px; color: #6B7280;">Более 5000 довольных пациентов за 10 лет работы</p>
</div>
```

### Отзыв 1:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Анна Соколова</h4>
      <p class="review-date">2 недели назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Отличная клиника! Врачи профессионалы своего дела. Особенно хочу отметить внимательное отношение и качественную консультацию. Все объяснили, показали снимки, составили план лечения. Цены адекватные, никаких скрытых платежей.
  </p>
  <span class="review-badge">Консультация и лечение кариеса</span>
</div>
```

### Отзыв 2:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Дмитрий Волков</h4>
      <p class="review-date">1 месяц назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Записался на бесплатную консультацию, не ожидал такого профессионализма. Врач провел полный осмотр, сделали панорамный снимок, все подробно рассказали. Современное оборудование и приятная атмосфера. Рекомендую!
  </p>
  <span class="review-badge">Первичная консультация</span>
</div>
```

### Отзыв 3:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Мария Кузнецова</h4>
      <p class="review-date">3 недели назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Очень боялась идти к стоматологу, но здесь все прошло комфортно. На консультации врач успокоил, все объяснил понятным языком. Лечение прошло безболезненно. Спасибо огромное всей команде клиники!
  </p>
  <span class="review-badge">Консультация и протезирование</span>
</div>
```

### Отзыв 4:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Игорь Петров</h4>
      <p class="review-date">2 месяца назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Обратился с острой болью. Приняли в день обращения, сделали диагностику и сразу начали лечение. Врач Иванова Е.С. - настоящий профессионал! Боль прошла, теперь на постоянном обслуживании в этой клинике.
  </p>
  <span class="review-badge">Срочная консультация и лечение</span>
</div>
```

### Отзыв 5:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Светлана Морозова</h4>
      <p class="review-date">1 неделя назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Хожу в эту клинику всей семьей уже 3 года. Всегда качественное обслуживание, современное оборудование и приятные цены. На консультации всегда подробно рассказывают о состоянии зубов и вариантах лечения.
  </p>
  <span class="review-badge">Семейная консультация</span>
</div>
```

### Отзыв 6:
```html
<div class="review-card">
  <div class="review-header">
    <div>
      <h4>Алексей Новиков</h4>
      <p class="review-date">3 дня назад</p>
    </div>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
  <p class="review-text">
    Пришел на диагностику перед имплантацией. Сделали КТ, провели детальный осмотр, составили план лечения с учетом моих пожеланий. Все четко, профессионально и без навязывания лишних услуг. Очень доволен!
  </p>
  <span class="review-badge">Консультация по имплантации</span>
</div>
```

### Блок статистики (после отзывов):
```html
<div class="stats-block">
  <div class="stat-item">
    <div class="stat-number">4.9</div>
    <div class="stat-stars">⭐⭐⭐⭐⭐</div>
    <p class="stat-label">Средний рейтинг</p>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <div class="stat-number">5000+</div>
    <p class="stat-label">Довольных пациентов</p>
  </div>
  <div class="stat-divider"></div>
  <div class="stat-item">
    <div class="stat-number">10</div>
    <p class="stat-label">Лет на рынке</p>
  </div>
</div>
```

### CSS для отзывов:
```css
.review-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.review-card:hover {
  box-shadow: 0 16px 32px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.review-card h4 {
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1F2937;
  margin: 0 0 4px 0;
}

.review-date {
  font-size: 13px;
  color: #9CA3AF;
  margin: 0;
}

.stars {
  font-size: 16px;
  line-height: 1;
}

.review-text {
  font-size: 15px;
  color: #6B7280;
  line-height: 1.7;
  margin-bottom: 16px;
  flex-grow: 1;
}

.review-badge {
  display: inline-block;
  background: #F3F4F6;
  color: #4B5563;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.stats-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 40px 60px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  margin: 60px auto 0;
  max-width: 800px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  color: #0EA5E9;
  font-family: Montserrat, sans-serif;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-stars {
  font-size: 20px;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
}

.stat-divider {
  width: 1px;
  height: 80px;
  background: #E5E7EB;
}
```

---

## 8️⃣ FAQ (Аккордеон)

### В WPBakery:
1. **Row** → 1 колонка
2. Background: #FFFFFF
3. Padding: 80px 0
4. Элемент: **FAQ** или **Toggle**

### Заголовок:
```html
<div style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #1F2937; margin-bottom: 16px;">Часто задаваемые вопросы</h2>
  <p style="font-size: 18px; color: #6B7280;">Ответы на популярные вопросы о консультации</p>
</div>
```

### Добавьте 6 Toggle элементов:

**Вопрос 1:**
- Title: "Что входит в первичную консультацию?"
- Content: "Первичная консультация включает осмотр полости рта, выявление проблем, рекомендации по лечению и составление предварительного плана. При необходимости врач может назначить дополнительные исследования."

**Вопрос 2:**
- Title: "Нужно ли готовиться к консультации?"
- Content: "Специальная подготовка не требуется. Рекомендуем почистить зубы перед визитом и взять с собой результаты предыдущих обследований, если они есть."

**Вопрос 3:**
- Title: "Сколько времени занимает консультация?"
- Content: "Первичная консультация обычно длится 30-40 минут. Это время включает осмотр, беседу с врачом и составление плана лечения."

**Вопрос 4:**
- Title: "Можно ли сразу начать лечение после консультации?"
- Content: "Да, если требуется несложное вмешательство и время врача позволяет, лечение можно начать в день консультации. Сложные процедуры планируются заранее."

**Вопрос 5:**
- Title: "Делаете ли вы рентген в клинике?"
- Content: "Да, в нашей клинике есть современное рентген-оборудование. Мы делаем прицельные снимки, панорамные снимки и компьютерную томографию."

**Вопрос 6:**
- Title: "Как записаться на консультацию?"
- Content: "Записаться можно по телефону, через форму на сайте или в мессенджерах. Мы подберем удобное для вас время."

### CSS для FAQ:
```css
.vc_toggle {
  border: 1px solid #E5E7EB !important;
  border-radius: 12px !important;
  margin-bottom: 16px !important;
  background: #FFFFFF !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
  overflow: hidden !important;
}

.vc_toggle_title {
  font-family: Montserrat, sans-serif !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: #1F2937 !important;
  padding: 20px 24px !important;
  transition: color 0.2s ease !important;
}

.vc_toggle_title:hover {
  color: #0EA5E9 !important;
}

.vc_toggle_content {
  padding: 0 24px 20px !important;
  color: #6B7280 !important;
  font-size: 15px !important;
  line-height: 1.7 !important;
}

.vc_toggle.vc_toggle_active {
  border-color: #0EA5E9 !important;
}
```

---

## 9️⃣ ФОРМА ЗАПИСИ

### В WPBakery:
1. **Row** → 2 колонки (1/2 + 1/2)
2. Background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)
3. Padding: 80px 0
4. Text Color: White

### Левая колонка (информация):
```html
<div class="contact-info">
  <h2 style="font-family: Montserrat, sans-serif; font-size: 40px; font-weight: 700; color: #FFFFFF; margin-bottom: 24px;">Запишитесь на консультацию</h2>
  <p style="font-size: 18px; color: rgba(255,255,255,0.9); margin-bottom: 32px; line-height: 1.7;">
    Оставьте заявку, и наш администратор свяжется с вами в ближайшее время для подтверждения записи
  </p>
  <div class="contact-items">
    <div class="contact-item">
      <span class="contact-icon">📍</span>
      <span>Москва, ул. Примерная, д. 123</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">📞</span>
      <span>+7 (495) 123-45-67</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">🕐</span>
      <span>Ежедневно с 9:00 до 21:00</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">✉️</span>
      <span>info@densamed.ru</span>
    </div>
  </div>
</div>
```

### Правая колонка (форма):
Используйте **Contact Form 7** или встроенный элемент формы:

```html
<div class="contact-form-wrapper">
  [contact-form-7 id="YOUR_FORM_ID"]
</div>
```

### HTML для Contact Form 7:
```html
<div class="form-group">
  <label>Ваше имя</label>
  [text* your-name placeholder "Иван Иванов"]
</div>

<div class="form-group">
  <label>Телефон</label>
  [tel* your-phone placeholder "+7 (___) ___-__-__"]
</div>

<div class="form-group">
  <label>Сообщение (необязательно)</label>
  [textarea your-message placeholder "Расскажите о вашей проблеме..."]
</div>

[submit "Записаться на прием"]

<p class="form-privacy">
  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
</p>
```

### CSS для формы:
```css
.contact-info {
  color: white;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  color: rgba(255,255,255,0.9);
}

.contact-icon {
  font-size: 20px;
  opacity: 0.8;
}

.contact-form-wrapper {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 15px;
  font-family: Roboto, sans-serif;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0EA5E9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.wpcf7-submit {
  width: 100%;
  padding: 16px;
  background: #1F2937;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.wpcf7-submit:hover {
  background: #111827;
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.form-privacy {
  font-size: 12px;
  color: #9CA3AF;
  text-align: center;
  margin-top: 16px;
  line-height: 1.5;
}
```

---

## 🔟 ФУТЕР

### В WPBakery:
1. **Row** → 4 колонки (1/4 + 1/4 + 1/4 + 1/4)
2. Background: #1F2937
3. Text Color: White
4. Padding: 60px 0 30px

### Колонка 1 (О клинике):
```html
<div class="footer-column">
  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
    <div style="width: 40px; height: 40px; background: #0EA5E9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 24px;">⚕️</span>
    </div>
    <span style="font-family: Montserrat, sans-serif; font-size: 20px; font-weight: 700; color: #FFFFFF;">DensaMed</span>
  </div>
  <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6;">
    Современная стоматологическая клиника с профессиональными специалистами
  </p>
</div>
```

### Колонка 2 (Услуги):
```html
<div class="footer-column">
  <h4 style="font-family: Montserrat, sans-serif; font-weight: 700; color: #FFFFFF; margin-bottom: 20px;">Услуги</h4>
  <ul class="footer-menu">
    <li>Консультация</li>
    <li>Лечение зубов</li>
    <li>Протезирование</li>
    <li>Имплантация</li>
  </ul>
</div>
```

### Колонка 3 (Информация):
```html
<div class="footer-column">
  <h4 style="font-family: Montserrat, sans-serif; font-weight: 700; color: #FFFFFF; margin-bottom: 20px;">Информация</h4>
  <ul class="footer-menu">
    <li>О клинике</li>
    <li>Специалисты</li>
    <li>Цены</li>
    <li>Контакты</li>
  </ul>
</div>
```

### Колонка 4 (Контакты):
```html
<div class="footer-column">
  <h4 style="font-family: Montserrat, sans-serif; font-weight: 700; color: #FFFFFF; margin-bottom: 20px;">Контакты</h4>
  <ul class="footer-menu">
    <li>+7 (495) 123-45-67</li>
    <li>info@densamed.ru</li>
    <li>Москва, ул. Примерная, 123</li>
  </ul>
</div>
```

### Copyright (новый Row):
```html
<div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; text-align: center;">
  <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0;">
    © 2024 DensaMed. Все права защищены.
  </p>
</div>
```

### CSS для футера:
```css
.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  line-height: 2;
  transition: color 0.2s ease;
  cursor: pointer;
}

.footer-menu li:hover {
  color: #0EA5E9;
}
```

---

## 📱 АДАПТИВНОСТЬ (Mobile CSS)

```css
@media (max-width: 768px) {
  /* Hero Section */
  .hero-section h1 {
    font-size: 32px !important;
  }
  
  .hero-section p {
    font-size: 16px !important;
  }
  
  /* Карточки */
  .step-card,
  .advantage-card,
  .review-card {
    margin-bottom: 20px;
  }
  
  /* Прайс-лист */
  .price-row {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 8px;
  }
  
  .service-price {
    margin-left: 0 !important;
  }
  
  /* Статистика */
  .stats-block {
    flex-direction: column;
    gap: 30px;
    padding: 30px 20px;
  }
  
  .stat-divider {
    width: 100%;
    height: 1px;
  }
  
  /* Форма */
  .contact-form-wrapper {
    padding: 24px;
  }
}
```

---

## 🎯 ФИНАЛЬНЫЕ РЕКОМЕНДАЦИИ

1. **Установите шрифты Google Fonts**:
   - В WordPress: Appearance → Customize → Additional CSS
   - Добавьте: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@600;700;800&display=swap');`

2. **Все CSS коды** добавьте в:
   - Appearance → Customize → Additional CSS
   - Или в отдельный файл custom.css

3. **Оптимизация изображений**:
   - Сжимайте фото перед загрузкой (TinyPNG)
   - Используйте WebP формат для быстрой загрузки

4. **Тестирование**:
   - Проверьте страницу на мобильных устройствах
   - Протестируйте все формы и кнопки
   - Убедитесь, что все анимации работают

5. **SEO оптимизация**:
   - Заполните meta-description страницы
   - Используйте alt-теги для всех изображений
   - Настройте H1-H6 заголовки правильно

---

## ✅ ЧЕКЛИСТ ГОТОВНОСТИ

- [ ] Header с логотипом и кнопкой
- [ ] Hero блок с изображением
- [ ] 4 карточки этапов консультации
- [ ] 6 карточек преимуществ
- [ ] 3 карточки врачей
- [ ] Прайс-лист (7 позиций)
- [ ] 6 отзывов + блок статистики
- [ ] FAQ (6 вопросов)
- [ ] Форма записи (Contact Form 7)
- [ ] Футер (4 колонки)
- [ ] Все CSS стили добавлены
- [ ] Шрифты Google Fonts подключены
- [ ] Адаптивность проверена
- [ ] Формы протестированы

---

Готово! Следуя этому руководству, вы создадите профессиональную страницу консультации для стоматологической клиники. Если возникнут вопросы по конкретному блоку - спрашивайте! 🚀
