import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">DensaMed</span>
          </div>
          <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Icon name="Phone" size={18} className="mr-2" />
            Записаться
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Первичная консультация
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Консультация и диагностика
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональный осмотр, комплексная диагностика и индивидуальный план лечения от опытных стоматологов. Забота о вашей улыбке начинается здесь.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/08c27bd5-b0cf-45a1-a2a6-acb8db9deb5c/files/a9231bef-c2ba-42c9-93df-ef1dc5ab783a.jpg"
                alt="Консультационный кабинет"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Этапы консультации</h2>
            <p className="text-muted-foreground text-lg">Пошаговый процесс вашего визита</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ClipboardList",
                number: "01",
                title: "Первичный осмотр",
                description: "Детальный осмотр полости рта и выявление проблемных зон"
              },
              {
                icon: "Microscope",
                number: "02",
                title: "Диагностика",
                description: "Рентген-снимки и дополнительные исследования при необходимости"
              },
              {
                icon: "FileText",
                number: "03",
                title: "План лечения",
                description: "Составление индивидуального плана с учетом ваших пожеланий"
              },
              {
                icon: "Calculator",
                number: "04",
                title: "Расчет стоимости",
                description: "Прозрачный расчет стоимости лечения без скрытых платежей"
              }
            ].map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name={step.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground text-lg">Почему пациенты выбирают DensaMed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Опытные специалисты",
                description: "Врачи с опытом работы более 15 лет и международными сертификатами"
              },
              {
                icon: "Scan",
                title: "Современное оборудование",
                description: "Новейшие технологии диагностики и лечения европейского уровня"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Строгое соблюдение санитарных норм и стерильности инструментов"
              },
              {
                icon: "Clock",
                title: "Удобный график",
                description: "Работаем ежедневно с 9:00 до 21:00, включая выходные"
              },
              {
                icon: "Heart",
                title: "Комфорт пациента",
                description: "Индивидуальный подход и внимательное отношение к каждому"
              },
              {
                icon: "Receipt",
                title: "Прозрачные цены",
                description: "Честная стоимость услуг без скрытых доплат и переплат"
              }
            ].map((advantage, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-xl transition-all group border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={advantage.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-muted-foreground text-lg">Команда профессионалов с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Иванова Елена Сергеевна",
                position: "Главный врач, стоматолог-терапевт",
                experience: "20 лет опыта",
                education: "МГМСУ им. Евдокимова",
                image: "https://cdn.poehali.dev/projects/08c27bd5-b0cf-45a1-a2a6-acb8db9deb5c/files/f421b9ac-9b03-4c95-8b7b-babf0b001108.jpg"
              },
              {
                name: "Петров Андрей Викторович",
                position: "Стоматолог-ортопед",
                experience: "15 лет опыта",
                education: "СПбГМУ",
                image: "https://cdn.poehali.dev/projects/08c27bd5-b0cf-45a1-a2a6-acb8db9deb5c/files/f421b9ac-9b03-4c95-8b7b-babf0b001108.jpg"
              },
              {
                name: "Смирнова Ольга Дмитриевна",
                position: "Стоматолог-хирург",
                experience: "12 лет опыта",
                education: "РУДН",
                image: "https://cdn.poehali.dev/projects/08c27bd5-b0cf-45a1-a2a6-acb8db9deb5c/files/f421b9ac-9b03-4c95-8b7b-babf0b001108.jpg"
              }
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group border-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-3">{doctor.position}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Briefcase" size={16} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="GraduationCap" size={16} />
                      <span>{doctor.education}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Стоимость услуг</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены на консультацию и диагностику</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-0">
                {[
                  { service: "Первичная консультация стоматолога", price: "Бесплатно" },
                  { service: "Повторная консультация", price: "500 ₽" },
                  { service: "Панорамный снимок (ОПТГ)", price: "1 200 ₽" },
                  { service: "Прицельный рентген-снимок", price: "350 ₽" },
                  { service: "Компьютерная томография (КТ)", price: "3 500 ₽" },
                  { service: "Составление плана лечения", price: "Бесплатно" },
                  { service: "Консультация с составлением сметы", price: "Бесплатно" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 hover:bg-secondary/50 transition-colors ${
                      index !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="font-medium text-foreground">{item.service}</span>
                    <span className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              * Стоимость лечения рассчитывается индивидуально после консультации
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о консультации</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Что входит в первичную консультацию?",
                answer: "Первичная консультация включает осмотр полости рта, выявление проблем, рекомендации по лечению и составление предварительного плана. При необходимости врач может назначить дополнительные исследования."
              },
              {
                question: "Нужно ли готовиться к консультации?",
                answer: "Специальная подготовка не требуется. Рекомендуем почистить зубы перед визитом и взять с собой результаты предыдущих обследований, если они есть."
              },
              {
                question: "Сколько времени занимает консультация?",
                answer: "Первичная консультация обычно длится 30-40 минут. Это время включает осмотр, беседу с врачом и составление плана лечения."
              },
              {
                question: "Можно ли сразу начать лечение после консультации?",
                answer: "Да, если требуется несложное вмешательство и время врача позволяет, лечение можно начать в день консультации. Сложные процедуры планируются заранее."
              },
              {
                question: "Делаете ли вы рентген в клинике?",
                answer: "Да, в нашей клинике есть современное рентген-оборудование. Мы делаем прицельные снимки, панорамные снимки и компьютерную томографию."
              },
              {
                question: "Как записаться на консультацию?",
                answer: "Записаться можно по телефону, через форму на сайте или в мессенджерах. Мы подберем удобное для вас время."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших пациентов</h2>
            <p className="text-muted-foreground text-lg">Более 5000 довольных пациентов за 10 лет работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Анна Соколова",
                date: "2 недели назад",
                rating: 5,
                text: "Отличная клиника! Врачи профессионалы своего дела. Особенно хочу отметить внимательное отношение и качественную консультацию. Все объяснили, показали снимки, составили план лечения. Цены адекватные, никаких скрытых платежей.",
                service: "Консультация и лечение кариеса"
              },
              {
                name: "Дмитрий Волков",
                date: "1 месяц назад",
                rating: 5,
                text: "Записался на бесплатную консультацию, не ожидал такого профессионализма. Врач провел полный осмотр, сделали панорамный снимок, все подробно рассказали. Современное оборудование и приятная атмосфера. Рекомендую!",
                service: "Первичная консультация"
              },
              {
                name: "Мария Кузнецова",
                date: "3 недели назад",
                rating: 5,
                text: "Очень боялась идти к стоматологу, но здесь все прошло комфортно. На консультации врач успокоил, все объяснил понятным языком. Лечение прошло безболезненно. Спасибо огромное всей команде клиники!",
                service: "Консультация и протезирование"
              },
              {
                name: "Игорь Петров",
                date: "2 месяца назад",
                rating: 5,
                text: "Обратился с острой болью. Приняли в день обращения, сделали диагностику и сразу начали лечение. Врач Иванова Е.С. - настоящий профессионал! Боль прошла, теперь на постоянном обслуживании в этой клинике.",
                service: "Срочная консультация и лечение"
              },
              {
                name: "Светлана Морозова",
                date: "1 неделя назад",
                rating: 5,
                text: "Хожу в эту клинику всей семьей уже 3 года. Всегда качественное обслуживание, современное оборудование и приятные цены. На консультации всегда подробно рассказывают о состоянии зубов и вариантах лечения.",
                service: "Семейная консультация"
              },
              {
                name: "Алексей Новиков",
                date: "3 дня назад",
                rating: 5,
                text: "Пришел на диагностику перед имплантацией. Сделали КТ, провели детальный осмотр, составили план лечения с учетом моих пожеланий. Все четко, профессионально и без навязывания лишних услуг. Очень доволен!",
                service: "Консультация по имплантации"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {review.service}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Средний рейтинг</p>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">5000+</div>
                <p className="text-sm text-muted-foreground">Довольных пациентов</p>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">10</div>
                <p className="text-sm text-muted-foreground">Лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Запишитесь на консультацию</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Оставьте заявку, и наш администратор свяжется с вами в ближайшее время для подтверждения записи
              </p>
              <div className="space-y-4">
                {[
                  { icon: "MapPin", text: "Москва, ул. Примерная, д. 123" },
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Clock", text: "Ежедневно с 9:00 до 21:00" },
                  { icon: "Mail", text: "info@densamed.ru" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={contact.icon} size={20} className="text-white/80" />
                    <span className="text-white/90">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                    <Textarea
                      placeholder="Расскажите о вашей проблеме..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-12 text-lg bg-foreground hover:bg-foreground/90 shadow-lg">
                    Записаться на прием
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">DensaMed</span>
              </div>
              <p className="text-white/70 text-sm">
                Современная стоматологическая клиника с профессиональными специалистами
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Консультация</li>
                <li>Лечение зубов</li>
                <li>Протезирование</li>
                <li>Имплантация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О клинике</li>
                <li>Специалисты</li>
                <li>Цены</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@densamed.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 DensaMed. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;