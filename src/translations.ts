export type Language = 'ro' | 'ru';

export const translations = {
  ro: {
    header: {
      services: 'Servicii',
      tips: 'Sfaturi',
      about: 'Despre noi',
      reviews: 'Recenzii',
      chiptuning: 'Cip-Tuning',
      gallery: 'Lucrarile noastre',
      top: {
        schedule: 'Luni – Sâmbătă 09:00–18:00',
        address: 'Ocniţa, str Alexandru cel Bun 8A',
      },
      topMobile: {
        schedule: 'L–S 9:00–18:00',
        address: 'Ocniţa, Alexandru cel Bun 8A',      },
    },
    hero: {
      title: 'Bine ai venit la Auto Service RURIC-SERVICE S.R.L.',
      text: 'Reparații rapide și de încredere pentru mașina ta',
      button: 'Programează-te acum',
    },
    services: {
      title: 'Serviciile noastre',
      items: [
        {
          title: ' Reparație capitală motor',
          icon: 'engine',
          points: [
            'Demontare și inspecție completă motor',
            'Înlocuirea pieselor uzate',
            'Curățare și verificare injectoare / sistem injecție',
            'Montaj și testare motor recondiționat',
          ],
        },
        {
          title: 'Chiptuning',
          icon: 'horsePower',
          points: [
            'Chiptuning la motor (creștere putere, cuplu, optimizare consum)',
            'Chiptuning pentru cutii automate (schimbări mai line și mai rapide)',
            'Testare și diagnoză completă după rescriere',
            'Reducere consum',
          ],
          cta: {
            learnMore: 'Află mai mult',
          },
        },
        {
          title: 'DPF/EGR/AdBlue',
          icon: 'dpf',
          points: [
            'Curățare filtru de particule (DPF)',
            'Regenerare sau înlocuire filtru DPF',
            'Curățare și dezactivare supapă EGR',
            'Curățare și dezactivare AdBlue',
            'Eliminare depuneri carbon (carbon cleaning)',
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
            'Curățarea ventilatorului de răcire',
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
          title: 'Schimb ulei',
          icon: 'oil',
          points: [
            'Schimb ulei motor',
            'Schimb ulei cutie de viteze',
            'Schimb ulei reductor / diferențial',
            'Schimb filtre',
            'Schimb lichid servodirecție ',
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
            'Remediere probleme pornire și încărcare',
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
            'Diagnoză ABS și ESP',
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
            'Geometrie direcție (aliniere roți)',
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
            'Testare etanșeitate și presiune sistem',
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
            'Adaptare chei la imobilizator',
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
        },
      ],
    },
    consult: {
      title: 'Obține o consultație acum',
      callUs: 'Sunați-ne la:',
      availability: 'Disponibili Luni–Sâmbătă, 09:00–18:00.',
      callNow: 'Sună acum',
      close: 'Închide',
    },
    tips: {
      title: 'Sfaturi utile',
      items: [
        {
          title: 'Cum îți dai seama că trebuie schimbate frânele',
          description:
            'Scârțâit la frânare, vibrații în volan sau distanță de oprire mărită indică plăcuțe uzate ori discuri deformate.',
          alt: 'Pictogramă frână',
        },
        {
          title: 'Când schimbi uleiul corect',
          description:
            'Respectă intervalul de service și folosește ulei cu specificațiile producătorului. Verifică periodic nivelul.',
          alt: 'Pictogramă canistră de ulei',
        },
        {
          title: 'Bateria dă semne de oboseală',
          description:
            'Porniri greoaie, lumini slabe sau martori intermitenți pot indica o baterie slăbită sau probleme la alternator.',
          alt: 'Pictogramă baterie auto',
        },
        {
          title: 'Anvelopele și aderența',
          description:
            'Verifică adâncimea profilului, uzura neuniformă și presiunea corectă. Anvelopele potrivite scurtează frânarea.',
          alt: 'Pictogramă anvelope',
        },
      ],
    },
    chiptuning: {
      title: 'Ce oferă chiptuning-ul',
      features: [
        {
          title: 'Creștere putere',
          text: ['Până la +10% la motoare atmosferice', 'Până la +50% la motoare turbo'],
          icon: 'power', // va fi mapat la powerImg
        },
        {
          title: 'Dinamica îmbunătățită',
          text: ['Accelerație mai rapidă și mai lină', 'Schimbări de trepte mai rare'],
          icon: 'dynamics',
        },
        {
          title: 'Economie de combustibil',
          text: ['Reducere consum cu până la 15%', 'Optimizare costuri de exploatare'],
          icon: 'fuel',
        },
        {
          title: 'Funcționare lină',
          text: ['Schimbare trepte lină pentru cutii automate', 'Control îmbunătățit al mașinii'],
          icon: 'smooth',
        },
        {
          title: 'Corectare erori',
          text: ['Rezolvarea erorilor software din fabrică', 'Optimizarea parametrilor motorului'],
          icon: 'error',
        },
        {
          title: 'Siguranță și fiabilitate',
          text: ['Fără intervenții mecanice majore', 'Păstrarea echilibrului motorului'],
          icon: 'safety',
        },
      ],
      stages: [
        {
          title: 'STAGE 1',
          desc: 'Optimizare software ECU (chiptuning) fără modificări hardware. Echilibru putere/consum pentru utilizare zilnică.',
          stageKey: 'stage1',
        },
        {
          title: 'STAGE 2',
          desc: 'Chiptuning pentru admisie/evacuare modificate (downpipe, intercooler etc.). Răspuns mai rapid și cuplu mai mare.',
          stageKey: 'stage2',
        },
        {
          title: 'STAGE 3',
          desc: 'Setări pentru componente performante (turbo/HP pump, injectoare). Maximizarea performanței cu hardware extins.',
          stageKey: 'stage3',
        },
      ],
      accordions: [
        {
          title: 'Ce este chiptuning-ul?',
          content: `Chiptuning-ul înseamnă optimizarea softului ECU/TCU (motor și transmisie) prin recalibrarea parametrilor de injecție, aprindere, presiune turbo și limitatori de cuplu. Astfel, motorul poate dezvolta mai multă putere și cuplu, cu un consum mai mic, fără intervenții mecanice costisitoare. Procesul este complet reversibil și realizat în siguranță de specialiști.`,
        },
        {
          title: 'Chiptuning motoare pe benzină și diesel',
          content: `La benzină se ajustează AFR, avansul aprinderii și presiunea turbo (unde există) — rezultatul: reacție mai bună și eficiență crescută. La diesel câștigul e adesea mai vizibil: cuplu mare la turații joase, accelerații mai puternice, condus mai ușor în oraș și economie de carburant (până la ~15%).`,
        },
        {
          title: 'De ce să alegi chiptuning-ul?',
          content: `• Creștere de performanță fără modificări mecanice scumpe\n• Consum redus și costuri de exploatare mai mici\n• Depășiri mai sigure, reacție mai promptă cu mașina încărcată\n• Alternativă accesibilă la achiziția unui model mai puternic\n• Calibrare personalizată stilului tău de condus`,
        },
      ],
    },
    gallery: { title: 'Galerie lucrări' },
    about: {
      title: 'Despre noi',
      text:
        'Suntem o echipă unită și dedicată, cu peste 20 de ani de experiență în servicii auto. ' +
        'Ne implicăm în fiecare lucrare cu seriozitate și atenție la detalii, comunicăm transparent și oferim soluții durabile, ' +
        'astfel încât mașina ta să fie în siguranță și gata de drum cât mai rapid posibil. ' +
        'Punem accent pe calitate, respectăm termenele și tratăm fiecare client cu profesionalism.',
    },
    reviews: {
      title: 'Recenzii clienți',
      items: [
        {
          name: 'Andreea Fortuna',
          text: 'Foarte mulțumită de diagnoza auto. Echipa mi-a explicat tot clar și pe înțeles.',
        },
        {
          name: 'Ion Popescu',
          text: 'Servicii excelente! Am schimbat frânele și totul a fost rapid și profesionist.',
        },
        {
          name: 'Andrei Rusu',
          text: 'Prețuri corecte și calitate. Vin la Ruric de peste 5 ani și recomand cu drag.',
        },
      ],
    },
    footer: {
      company: 'Ruric-Service SRL',
      addressLabel: 'Adresa:',
      address: 'Ocniţa, Strada Alexandru cel Bun 8A, MD-7101',
      phoneLabel: 'Telefon:',
      phones: [
        '069 153 518',
        '069 133 180',
        '069 329 273',
        '069 102 508',
        '027 123 866',
        '027 124 168',
      ],
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
      chiptuning: 'Чип-Тюнинг',
      gallery: 'Галерея работ',
      topMobile: {
        schedule: 'П–Сб 9:00–18:00',
        address: 'Окница, Александру чел Бун 8A',
      },
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
    services: {
      title: 'Наши услуги',
      items: [
        {
          title: 'Капитальный ремонт двигателя',
          icon: 'engine',
          points: [
            'Демонтаж и полная диагностика двигателя',
            'Замена изношенных деталей',
            'Очистка и проверка форсунок / системы впрыска',
            'Сборка и тестирование восстановленного двигателя',
          ],
        },
        {
          title: 'Чиптюнинг',
          icon: 'horsePower',
          points: [
            'Чиптюнинг двигателя (увеличение мощности, крутящего момента, оптимизация расхода)',
            'Чиптюнинг для автоматических коробок передач (более плавные и быстрые переключения)',
            'Полное тестирование и диагностика после перепрошивки',
            'Снижение расхода топлива',
          ],
          cta: {
            learnMore: 'Узнать больше',
          },
        },
        {
          title: 'DPF / EGR / AdBlue',
          icon: 'dpf',
          points: [
            'Очистка сажевого фильтра (DPF)',
            'Регенерация или замена фильтра DPF',
            'Очистка и отключение клапана EGR',
            'Очистка и отключение системы AdBlue',
            'Удаление углеродных отложений (carbon cleaning)',
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
            'Очистка вентилятора охлаждения',
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
            'Чтение сохранённой истории ошибок в ЭБУ',
          ],
        },
        {
          title: 'Замена масел и фильтров',
          icon: 'oil',
          points: [
            'Замена моторного масла',
            'Замена масла в коробке передач',
            'Замена масла в редукторе / дифференциале',
            'Замена фильтров',
            'Замена жидкости ГУР',
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
            'Устранение проблем запуска и зарядки',
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
            'Диагностика ABS и ESP',
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
            'Регулировка развала-схождения',
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
            'Тест на герметичность и давление системы',
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
            'Адаптация ключей к иммобилайзеру',
          ],
        },
        {
          title: 'Системы безопасности и комфорта',
          icon: 'carSafety',
          points: [
            'Установка сигнализаций и иммобилайзеров',
            'Монтаж систем GPS-трекинга и защиты от угона',
            'Интеграция парктроников и камер заднего вида',
          ],
        },
      ],
    },
    consult: {
      title: 'Получите консультацию сейчас',
      callUs: 'Позвоните нам по номеру:',
      availability: 'Доступны Пн–Сб, 09:00–18:00.',
      callNow: 'Позвонить',
      close: 'Закрыть',
    },
    tips: {
      title: 'Полезные советы',
      items: [
        {
          title: 'Когда нужно менять тормозные колодки',
          description:
            'Скрип при торможении, вибрации в руле или увеличенный тормозной путь указывают на износ колодок или деформацию дисков.',
          alt: 'Иконка тормоза',
        },
        {
          title: 'Когда правильно менять масло',
          description:
            'Соблюдайте интервал обслуживания и используйте масло по спецификации производителя. Регулярно проверяйте уровень.',
          alt: 'Иконка канистры масла',
        },
        {
          title: 'Аккумулятор подает признаки усталости',
          description:
            'Трудный запуск, тусклый свет фар или мигающие индикаторы могут указывать на слабый аккумулятор или неисправность генератора.',
          alt: 'Иконка аккумулятора',
        },
        {
          title: 'Шины и сцепление',
          description:
            'Проверяйте глубину протектора, равномерность износа и правильное давление. Хорошие шины сокращают тормозной путь.',
          alt: 'Иконка шин',
        },
      ],
    },
    chiptuning: {
      title: 'Что даёт чиптюнинг',
      features: [
        {
          title: 'Повышение мощности',
          text: ['До +10% для атмосферных моторов', 'До +50% для турбо'],
          icon: 'power',
        },
        {
          title: 'Лучшая динамика',
          text: ['Более быстрая и плавная разгонная динамика', 'Реже переключения передач'],
          icon: 'dynamics',
        },
        {
          title: 'Экономия топлива',
          text: ['Снижение расхода до ~15%', 'Оптимизация эксплуатационных затрат'],
          icon: 'fuel',
        },
        {
          title: 'Плавная работа',
          text: ['Плавные переключения АКПП', 'Лучший контроль автомобиля'],
          icon: 'smooth',
        },
        {
          title: 'Исправление ошибок',
          text: [
            'Устранение заводских софт-ограничений/ошибок',
            'Оптимизация параметров двигателя',
          ],
          icon: 'error',
        },
        {
          title: 'Надёжность и безопасность',
          text: ['Без серьёзного механического вмешательства', 'Сохранение баланса двигателя'],
          icon: 'safety',
        },
      ],
      stages: [
        {
          title: 'STAGE 1',
          desc: 'Оптимизация прошивки ECU без железных доработок. Баланс мощности и расхода для повседневной езды.',
          stageKey: 'stage1',
        },
        {
          title: 'STAGE 2',
          desc: 'Настройка под доработки впуска/выпуска (downpipe, интеркулер и т.п.). Более быстрый отклик и больший крутящий момент.',
          stageKey: 'stage2',
        },
        {
          title: 'STAGE 3',
          desc: 'Под компоненты повышенной производительности (турбина/ТНВД, форсунки). Максимум потенциала с расширенным железом.',
          stageKey: 'stage3',
        },
      ],
      accordions: [
        {
          title: 'Что такое чиптюнинг?',
          content: `Это оптимизация ПО ECU/TCU (двигатель/коробка) — калибровка топлива, зажигания, давления наддува и ограничителей крутящего момента. Итог — больше мощности и меньше расход, без дорогих механических доработок. Процедура обратима и безопасна при выполнении профессионалами.`,
        },
        {
          title: 'Бензин и дизель: особенности',
          content: `На бензиновых — корректировка AFR, УОЗ и наддува (если есть) для лучшего отклика и эффективности. Дизель часто даёт ещё больший эффект: высокий момент на низах, уверенные ускорения и экономия топлива (до ~15%).`,
        },
        {
          title: 'Почему это выгодно?',
          content: `• Рост динамики без дорогих железных модификаций\n• Снижение расхода и расходов на эксплуатацию\n• Более безопасные обгоны, уверенность с полной загрузкой\n• Доступная альтернатива покупке более мощного авто\n• Индивидуальная калибровка под ваш стиль езды`,
        },
      ],
    },
    gallery: { title: 'Галерея работ' },
    about: {
      title: 'О нас',
      text:
        'Мы — сплочённая и преданная команда с более чем 20-летним опытом работы в сфере автосервиса. ' +
        'Мы относимся к каждому заказу серьёзно и внимательно к деталям, общаемся открыто и предлагаем долговечные решения, ' +
        'чтобы ваш автомобиль был в безопасности и готов к дороге как можно быстрее. ' +
        'Мы делаем упор на качество, соблюдаем сроки и относимся к каждому клиенту профессионально.',
    },
    reviews: {
      title: 'Отзывы клиентов',
      items: [
        {
          name: 'Андрея Фортуна',
          text: 'Очень довольна компьютерной диагностикой. Команда всё объяснила понятно и доступно.',
        },
        {
          name: 'Ион Попеску',
          text: 'Отличные услуги! Заменили тормоза быстро и профессионально.',
        },
        {
          name: 'Андрей Русу',
          text: 'Честные цены и качество. Хожу в Ruric уже более 5 лет и рекомендую всем.',
        },
      ],
    },
    footer: {
      company: 'Ruric-Service SRL',
      addressLabel: 'Адрес:',
      address: 'Окница, ул. Александру чел Бун 8A, MD-7101',
      phoneLabel: 'Телефон:',
      phones: [
        '069 153 518',
        '069 133 180',
        '069 329 273',
        '069 102 508',
        '027 123 866',
        '027 124 168',
      ],
      programLabel: 'График работы:',
      program: 'Понедельник – Суббота: 09:00–18:00',
      socials: { facebook: 'Фейсбук', instagram: 'Инстаграм' },
      rights: 'Все права защищены.',
      mapOpen: 'Открыть в Google Maps',
    },
  },
};
