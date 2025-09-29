export type Language = 'ro' | 'ru';

export const translations = {
  ro: {
    header: {
      services: 'Servicii',
      tips: 'Sfaturi',
      about: 'Despre',
      reviews: 'Recenzii',
      top: {
        schedule: 'Luni – Sâmbătă 09:00–18:00',
        address: 'Ocniţa, str Alexandru cel Bun 8A',
      },
    },
    hero: {
      title: 'Bine ai venit la Auto Service RURIC-SERVICE S.R.L.',
      text: 'Reparații rapide și de încredere pentru mașina ta',
      button: 'Programează-te acum',
    },
    about: {
      title: 'Despre noi',
      text:
        'Suntem o echipă unită și dedicată, cu peste 20 de ani de experiență în servicii auto. ' +
        'Ne implicăm în fiecare lucrare cu seriozitate și atenție la detalii, comunicăm transparent și oferim soluții durabile, ' +
        'astfel încât mașina ta să fie în siguranță și gata de drum cât mai rapid posibil. ' +
        'Punem accent pe calitate, respectăm termenele și tratăm fiecare client cu profesionalism.',
    },
    consult: {
      title: 'Obține o consultație acum',
      callUs: 'Sunați-ne la:',
      availability: 'Disponibili Luni–Sâmbătă, 09:00–18:00.',
      callNow: 'Sună acum',
      close: 'Închide',
    },
    services: {
      title: 'Serviciile noastre',
      items: [
        {
          title: 'Schimb ulei',
          icon: 'oil',
          points: [
            'Schimb ulei motor',
            'Schimb ulei cutie de viteze',
            'Schimb ulei reductor / diferențial',
            'Schimb filtre',
            'Schimb lichid servodirecție '
          ],
        },
        {
          title: ' Reparație capitală motor',
          icon: 'engine',
          points: [
            'Demontare și inspecție completă motor',
            'Înlocuirea pieselor uzate',
            'Curățare și verificare injectoare / sistem injecție',
            'Montaj și testare motor recondiționat'
          ],
        },
        {
          title: 'Sistem de răcire',
          icon: 'carTemperature',
          points: [
            'Schimb lichid de răcire',
            'Spălare sistem de răcire',
            'Înlocuire termostat defect',
            'Înlocuire pompă de apă',
            'Curățarea ventilatorului de răcire'
          ],
        },
        {
          title: 'Diagnoză auto',
          icon: 'check',
          points: [
            'Identificare erori',
            'Raport detaliat pentru client',
            'Verificare parametri în timp real',
            'Test senzori și actuatori (ABS, airbag, etc.)',
            'Citire istoricul erorilor stocate în ECU',
          ],
        },
        {
          title: 'Reparații electrice',
          icon: 'carElectric',
          points: [
            'Verificare și înlocuire baterie / alternator',
            'Diagnoză și reparare circuite electrice',
            'Reparație și calibrare senzori și unități electronice',
            'Programare / resoftare ECU și alte module',
            'Remediere probleme pornire și încărcare'
          ],
        },
        {
          title: 'Frâne',
          icon: 'carBrake',
          points: [
            'Înlocuire plăcuțe și discuri de frână',
            'Schimb lichid frână și aerisire sistem',
            'Verificare etriere și conducte de frână',
            'Întreținere și reglaj frână de mână',
            'Diagnoză ABS și ESP'
          ],
        },
        {
          title: 'Suspensie',
          icon: 'carSuspension',
          points: [
            'Înlocuire amortizoare și arcuri',
            'Brațe, bucșe și articulații',
            'Verificare și schimb rulmenți roată',
            'Pivoți și capete de bară',
            'Geometrie direcție (aliniere roți)'
          ],
        },
        {
          title: 'Sistem de climatizare',
          icon: 'airConditional',
          points: [
            'Încărcare și completare freon',
            'Curățare și igienizare instalație A/C',
            'Verificare compresor și condensator',
            'Înlocuire filtru de polen / cabină',
            'Testare etanșeitate și presiune sistem'
          ],
        },
        {
          title: 'DPF/EGR/AdBlue',
          icon: 'dpf',
          points: [
            'Curățare filtru de particule (DPF)',
            'Regenerare sau înlocuire filtru DPF',
            'Curățare și dezactivare supapă EGR',
            'Curățare și dezactivare AdBlue',
            'Eliminare depuneri carbon (carbon cleaning)'
          ],
        },
        {
          title: 'Programare chei',
          icon: 'carKey',
          points: [
            'Programare chei auto simple și cu cip',
            'Codare telecomenzi pentru centralizare',
            'Realizare chei de rezervă',
            'Reprogramare chei pierdute',
            'Adaptare chei la imobilizator'
          ],
        },
        {
          title: 'Service roți și anvelope',
          icon: 'carTire',
          points: [
            'Echilibrare roți',
            'Schimb anvelope sezonier',
            'Reparații anvelope (plombare, vulcanizare)',
            'Verificare și corectare presiune',
            'Reprogramare senzori TPMS'
          ],
        },
        {
          title: 'Siguranță și confort',
          icon: 'carSafety',
          points: [
            'Instalare alarme și imobilizatoare auto',
            'Montaj sisteme GPS tracking și antifurt',
            'Integrare senzori de parcare și camere video',
          ],
        }
      ],
    },
    tips: {
      title: 'Sfaturi utile',
      items: [
        { title: 'Cum îți dai seama că trebuie schimbate frânele', description: 'Scârțâit la frânare, vibrații în volan sau distanță de oprire mărită indică plăcuțe uzate ori discuri deformate.', alt: 'Pictogramă frână' },
        { title: 'Când schimbi uleiul corect', description: 'Respectă intervalul de service și folosește ulei cu specificațiile producătorului. Verifică periodic nivelul.', alt: 'Pictogramă canistră de ulei' },
        { title: 'Bateria dă semne de oboseală', description: 'Porniri greoaie, lumini slabe sau martori intermitenți pot indica o baterie slăbită sau probleme la alternator.', alt: 'Pictogramă baterie auto' },
        { title: 'Anvelopele și aderența', description: 'Verifică adâncimea profilului, uzura neuniformă și presiunea corectă. Anvelopele potrivite scurtează frânarea.', alt: 'Pictogramă anvelope' },
      ],
    },
    blog: {
      title: 'Ultimele articole',
      posts: [
        { title: 'Schimb ulei – ce trebuie să știi', excerpt: 'Când și de ce e important schimbul de ulei...', url: 'images/image1.jpeg' },
        { title: '3 semne că trebuie să schimbi plăcuțele de frână', excerpt: 'Un scârțâit ciudat, pedala moale sau distanța mai mare de frânare pot indica o problemă la plăcuțele de frână.', url: '/blog/placute-frana' },
        { title: 'Cum să prelungești viața motorului mașinii tale', excerpt: 'Schimbul regulat de ulei și filtre, folosirea combustibilului de calitate și reviziile la timp sunt esențiale.', url: '/blog/viata-motor' },
        { title: 'Diagnoza computerizată – de ce este importantă?', excerpt: 'O diagnoză modernă detectează rapid probleme ascunse, economisind timp și bani.', url: '/blog/diagnoza-auto' },
      ],
    },
    reviews: {
      title: 'Recenzii clienți',
      items: [
        { name: 'Andreea Fortuna', text: 'Foarte mulțumită de diagnoza auto. Echipa mi-a explicat tot clar și pe înțeles.' },
        { name: 'Ion Popescu', text: 'Servicii excelente! Am schimbat frânele și totul a fost rapid și profesionist.' },
        { name: 'Andrei Rusu', text: 'Prețuri corecte și calitate. Vin la Ruric de peste 5 ani și recomand cu drag.' },
      ],
    },
    footer: {
      company: 'Ruric-Service SRL',
      addressLabel: 'Adresa:',
      address: 'Ocniţa, Strada Alexandru cel Bun 8A, MD-7101',
      phoneLabel: 'Telefon:',
      phones: ['+373 691 535 18', '+373 691 331 80', '+373 693 292 73', '027 124 168'],
      programLabel: 'Program:',
      program: 'Luni – Sâmbătă: 09:00–18:00',
      socials: { facebook: 'Facebook', instagram: 'Instagram' },
      rights: 'Toate drepturile rezervate.',
      mapOpen: 'Deschide în Maps',
    },
  },

  ru: {
    header: {
      services: 'Наши услуги',
      tips: 'Советы',
      about: 'О нас',
      reviews: 'Отзывы',
      top: {
        schedule: 'Понедельник – Суббота 09:00–18:00',
        address: 'Окница, ул. Александру чел Бун 8A',
      },
    },
    hero: {
      title: 'Добро пожаловать в Автосервис RURIC-SERVICE S.R.L.',
      text: 'Быстрый и надежный ремонт вашего автомобиля',
      button: 'Запишитесь сейчас',
    },
    about: {
      title: 'О нас',
      text:
        'Мы — сплочённая и преданная команда с более чем 20-летним опытом работы в сфере автосервиса. ' +
        'Мы относимся к каждому заказу серьёзно и внимательно к деталям, общаемся открыто и предлагаем долговечные решения, ' +
        'чтобы ваш автомобиль был в безопасности и готов к дороге как можно быстрее. ' +
        'Мы делаем упор на качество, соблюдаем сроки и относимся к каждому клиенту профессионально.',
    },
    consult: {
      title: 'Получите консультацию сейчас',
      callUs: 'Позвоните нам по номеру:',
      availability: 'Доступны Пн–Сб, 09:00–18:00.',
      callNow: 'Позвонить',
      close: 'Закрыть',
    },
    services: {
      title: 'Наши услуги',
      items: [
        {
          title: 'Замена масел и фильтров',
          icon: 'oil',
          points: [
            'Замена моторного масла',
            'Замена масла в коробке передач',
            'Замена масла в редукторе / дифференциале',
            'Замена фильтров',
            'Замена жидкости ГУР'
          ],
        },
        {
          title: 'Капитальный ремонт двигателя',
          icon: 'engine',
          points: [
            'Демонтаж и полная диагностика двигателя',
            'Замена изношенных деталей',
            'Очистка и проверка форсунок / системы впрыска',
            'Сборка и тестирование восстановленного двигателя'
          ],
        },
        {
          title: 'Система охлаждения',
          icon: 'carTemperature',
          points: [
            'Замена охлаждающей жидкости',
            'Промывка системы охлаждения',
            'Замена неисправного термостата',
            'Замена помпы',
            'Очистка вентилятора охлаждения'
          ],
        },
        {
          title: 'Компьютерная диагностика',
          icon: 'check',
          points: [
            'Выявление ошибок',
            'Подробный отчёт для клиента',
            'Проверка параметров в реальном времени',
            'Тестирование датчиков и исполнительных механизмов (ABS, Airbag и т.д.)',
            'Чтение сохранённой истории ошибок в ЭБУ'
          ],
        },
        {
          title: 'Электрика автомобиля',
          icon: 'carElectric',
          points: [
            'Проверка и замена аккумулятора / генератора',
            'Диагностика и ремонт электрических цепей',
            'Ремонт и калибровка датчиков и электронных блоков',
            'Программирование / перепрошивка ЭБУ и других модулей',
            'Устранение проблем запуска и зарядки'
          ],
        },
        {
          title: 'Тормозная система',
          icon: 'carBrake',
          points: [
            'Замена тормозных колодок и дисков',
            'Замена тормозной жидкости и прокачка системы',
            'Проверка суппортов и тормозных магистралей',
            'Обслуживание и регулировка ручного тормоза',
            'Диагностика ABS и ESP'
          ],
        },
        {
          title: 'Подвеска',
          icon: 'carSuspension',
          points: [
            'Замена амортизаторов и пружин',
            'Рычаги, сайлентблоки и шарниры',
            'Проверка и замена ступичных подшипников',
            'Шаровые опоры и наконечники рулевых тяг',
            'Регулировка развала-схождения'
          ],
        },
        {
          title: 'Кондиционер',
          icon: 'airConditional',
          points: [
            'Заправка и дозаправка фреона',
            'Очистка и дезинфекция системы A/C',
            'Проверка компрессора и конденсатора',
            'Замена салонного фильтра',
            'Тест на герметичность и давление системы'
          ],
        },
        {
          title: 'DPF / EGR / AdBlue',
          icon: 'dpf',
          points: [
            'Очистка сажевого фильтра (DPF)',
            'Регенерация или замена фильтра DPF',
            'Очистка и отключение клапана EGR',
            'Очистка и отключение системы AdBlue',
            'Удаление углеродных отложений (carbon cleaning)'
          ],
        },
        {
          title: 'Программирование ключей',
          icon: 'carKey',
          points: [
            'Программирование автомобильных ключей с чипом и без',
            'Кодирование пультов для центрального замка',
            'Изготовление запасных ключей',
            'Перепрограммирование утерянных ключей',
            'Адаптация ключей к иммобилайзеру'
          ],
        },
        {
          title: 'Шиномонтаж и сервис колёс',
          icon: 'carTire',
          points: [
            'Балансировка колёс',
            'Сезонная замена шин',
            'Ремонт шин (пломбировка, вулканизация)',
            'Проверка и корректировка давления',
            'Перепрограммирование датчиков TPMS'
          ],
        },
        {
          title: 'Системы безопасности и комфорта',
          icon: 'carSafety',
          points: [
            'Установка сигнализаций и иммобилайзеров',
            'Монтаж систем GPS-трекинга и защиты от угона',
            'Интеграция парктроников и камер заднего вида'
          ],
        }
      ],
    },
    tips: {
      title: 'Полезные советы',
      items: [
        { title: 'Когда нужно менять тормозные колодки', description: 'Скрип при торможении, вибрации в руле или увеличенный тормозной путь указывают на износ колодок или деформацию дисков.', alt: 'Иконка тормоза' },
        { title: 'Когда правильно менять масло', description: 'Соблюдайте интервал обслуживания и используйте масло по спецификации производителя. Регулярно проверяйте уровень.', alt: 'Иконка канистры масла' },
        { title: 'Аккумулятор подает признаки усталости', description: 'Трудный запуск, тусклый свет фар или мигающие индикаторы могут указывать на слабый аккумулятор или неисправность генератора.', alt: 'Иконка аккумулятора' },
        { title: 'Шины и сцепление', description: 'Проверяйте глубину протектора, равномерность износа и правильное давление. Хорошие шины сокращают тормозной путь.', alt: 'Иконка шин' },
      ],
    },
    blog: {
      title: 'Последние статьи',
      posts: [
        { title: '3 признаков, что пора менять тормозные колодки', excerpt: 'Скрип, мягкая педаль или увеличенный тормозной путь могут указывать на проблему.' },
        { title: 'Как продлить срок службы двигателя', excerpt: 'Регулярная замена масла и фильтров, качественное топливо и своевременное ТО — основа надежности.' },
        { title: 'Компьютерная диагностика — почему это важно?', excerpt: 'Современная диагностика быстро выявляет скрытые проблемы, экономя время и деньги.' },
      ],
    },
    reviews: {
      title: 'Отзывы клиентов',
      items: [
        { name: 'Андрея Фортуна', text: 'Очень довольна компьютерной диагностикой. Команда всё объяснила понятно и доступно.' },
        { name: 'Ион Попеску', text: 'Отличные услуги! Заменили тормоза быстро и профессионально.' },
        { name: 'Андрей Русу', text: 'Честные цены и качество. Хожу в Ruric уже более 5 лет и рекомендую всем.' },
      ],
    },
    footer: {
      company: 'Ruric-Service SRL',
      addressLabel: 'Адрес:',
      address: 'Окница, ул. Александру чел Бун 8A, MD-7101',
      phoneLabel: 'Телефон:',
      phones: ['+373 691 535 18', '+373 691 331 80', '+373 693 292 73', '027 124 168'],
      programLabel: 'График работы:',
      program: 'Понедельник – Суббота: 09:00–18:00',
      socials: { facebook: 'Фейсбук', instagram: 'Инстаграм' },
      rights: 'Все права защищены.',
      mapOpen: 'Открыть в Google Maps',
    },
  },
};