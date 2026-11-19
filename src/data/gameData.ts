import { CardItem, PlayerRank } from '../types/game';

export const GAME_CARDS: CardItem[] = [
  // ==========================================
  // 1-BOSQICH: PAROLLAR FILTRATSIYASI (5 ta)
  // ==========================================
  {
    id: 'pass-1',
    stage: 1,
    stageTitle: '1-Bosqich: Parollar Filtratsiyasi',
    category: 'password',
    categoryLabel: 'Yangi Parol So\'rovi',
    title: 'Sardorbek Rustamov',
    subtitle: 'Talaba | Tug\'ilgan yili: 2008 | Tel: +998 (90) 123-45-67',
    avatarSeed: 'sardor',
    profileData: {
      fullName: 'Sardorbek Rustamov',
      role: 'Talaba (Akademik litsey)',
      birthYear: 2008,
      phone: '+998 (90) 123-45-67',
      submittedPassword: 'Sardor2008',
      passwordEntropy: 'Juda zaif',
      length: 10
    },
    correctAction: 'block',
    whyCorrect: 'To\'g\'ri qaror! Parolda ism va tug\'ilgan yil ishlatilgan. Bunday shaxsiy ma\'lumotlarga asoslangan parollar xakerlar tomonidan bir necha soniyada buziladi.',
    whyWrong: 'Xavfli xato! Parolda foydalanuvchining ismi va tug\'ilgan yili mavjud. Xakerlar avvalo ijtimoiy tarmoqlardagi ochiq ma\'lumotlar asosida parollarni sinab ko\'radi.',
    educationalTip: 'Hech qachon o\'z ismingiz, familiyangiz yoki tug\'ilgan yilingizni parol sifatida ishlatmang!',
    securityImpact: 25,
    scoreGain: 100
  },
  {
    id: 'pass-2',
    stage: 1,
    stageTitle: '1-Bosqich: Parollar Filtratsiyasi',
    category: 'password',
    categoryLabel: 'Yangi Parol So\'rovi',
    title: 'Jamshid Aliyev',
    subtitle: 'Katta dasturchi | IT-Departamenti',
    avatarSeed: 'jamshid',
    profileData: {
      fullName: 'Jamshid Aliyev',
      role: 'Katta dasturchi',
      birthYear: 1994,
      phone: '+998 (97) 555-12-89',
      submittedPassword: 'Tr@n$f0rmer#99!',
      passwordEntropy: 'Yuqori daraja',
      length: 15
    },
    correctAction: 'allow',
    whyCorrect: 'Ajoyib tahlil! Parol 15 ta belgidan iborat, katta-kichik harflar, raqamlar va maxsus belgilarni (@, $, #, !) o\'z ichiga olgan.',
    whyWrong: 'Noto\'g\'ri bloklandi! Bu juda mustahkam parol. U shaxsiy ma\'lumotlarga bog\'liq emas va entropiyasi yuqori bo\'lib, uni buzish uchun yillar talab etiladi.',
    educationalTip: 'Katta-kichik harflar, raqamlar va maxsus belgilar birikmasidan iborat 12+ belgili parollar eng xavfsiz hisoblanadi.',
    securityImpact: 15,
    scoreGain: 120
  },
  {
    id: 'pass-3',
    stage: 1,
    stageTitle: '1-Bosqich: Parollar Filtratsiyasi',
    category: 'password',
    categoryLabel: 'Yangi Parol So\'rovi',
    title: 'Dilnoza Karimova',
    subtitle: 'Bosh hisobchi | Moliya bo\'limi',
    avatarSeed: 'dilnoza',
    profileData: {
      fullName: 'Dilnoza Karimova',
      role: 'Bosh hisobchi',
      birthYear: 1988,
      phone: '+998 (93) 321-98-76',
      submittedPassword: 'qwerty12345',
      passwordEntropy: 'Juda zaif',
      length: 11
    },
    correctAction: 'block',
    whyCorrect: 'Xavfsizlik ta\'minlandi! "qwerty" va ketma-ket raqamlar dunyodagi eng ommabop va xakerlar lug\'atida birinchi o\'rinda turadigan zaif kombinatsiyadir.',
    whyWrong: 'Tizim xavf ostida! "qwerty12345" oddiy klaviatura ketma-ketligi bo\'lib, u xakerlar bazasidagi eng mashhur parollardan biridir.',
    educationalTip: 'Klaviatura bo\'ylab ketma-ket keluvchi tugmalar (qwerty, asdfg, 123456) hech qanday himoyaga ega emas.',
    securityImpact: 25,
    scoreGain: 100
  },
  {
    id: 'pass-4',
    stage: 1,
    stageTitle: '1-Bosqich: Parollar Filtratsiyasi',
    category: 'password',
    categoryLabel: 'Yangi Parol So\'rovi',
    title: 'Botir Zokirov',
    subtitle: 'Kadrlar bo\'limi mutaxassisi',
    avatarSeed: 'botir',
    profileData: {
      fullName: 'Botir Zokirov',
      role: 'Kadrlar bo\'limi mutaxassisi',
      birthYear: 1999,
      phone: '+998 (94) 700-11-22',
      submittedPassword: 'O\'zbekiston2026',
      passwordEntropy: 'O\'rtacha',
      length: 15
    },
    correctAction: 'block',
    whyCorrect: 'To\'g\'ri bloklandi! Yurtimiz nomi yoki shahar nomi bilan kelgusi yilni birlashtirish kiber-jinoyatchilarning hududiy lug\'at hujumlarida eng birinchi sinovdan o\'tadi.',
    whyWrong: 'Kiber-zaiflikka yo\'l qo\'yildi! Uzun ko\'ringani bilan, davlat nomi va joriy/kelgusi yil qo\'shilgan parollar hududiy avtomatlashtirilgan hujumlarda darhol fosh bo\'ladi.',
    educationalTip: 'Lug\'atdagi tayyor so\'zlar va yillarni qo\'shish parolni mustahkam qilmaydi. Noan\'anaviy iboralar va belgilardan foydalaning.',
    securityImpact: 20,
    scoreGain: 110
  },
  {
    id: 'pass-5',
    stage: 1,
    stageTitle: '1-Bosqich: Parollar Filtratsiyasi',
    category: 'password',
    categoryLabel: 'Yangi Parol So\'rovi',
    title: 'Malika Ergasheva',
    subtitle: 'Tizim administratori assistenti',
    avatarSeed: 'malika',
    profileData: {
      fullName: 'Malika Ergasheva',
      role: 'Administrator assistenti',
      birthYear: 2001,
      phone: '+998 (91) 444-88-99',
      submittedPassword: 'k!b3r_Q@lq0n_2026#X',
      passwordEntropy: 'Yuqori daraja',
      length: 18
    },
    correctAction: 'allow',
    whyCorrect: 'Mukammal tanlov! 18 ta belgi, noan\'anaviy harf-raqam almashtirishlari (leetspeak) va maxsus belgilar bilan to\'liq himoyalangan passfrasa.',
    whyWrong: 'Noto\'g\'ri qaror! Bu yuqori darajada xavfsiz "parol-iborasi" (passphrase) bo\'lib, uni oddiy yoki kompyuterlashgan hujumlar bilan sindirib bo\'lmaydi.',
    educationalTip: 'Bir nechta so\'zlarni noan\'anaviy belgilar bilan biriktirib parol-iborasi (passphrase) yaratish — eslab qolishga oson va eng mustahkam usuldir.',
    securityImpact: 15,
    scoreGain: 130
  },

  // ==========================================
  // 2-BOSQICH: FISHING VA SHAXSIY MA'LUMOTLAR OVI (5 ta)
  // ==========================================
  {
    id: 'phish-1',
    stage: 2,
    stageTitle: '2-Bosqich: Fishing va Shaxsiy Ma\'lumotlar Ovi',
    category: 'phishing',
    categoryLabel: 'Kiruvchi SMS Xabari',
    title: 'SMS: "Kutilmagan Yutuq"',
    subtitle: 'Yuboruvchi: +998900010203 | 14:28',
    avatarSeed: 'sms-bonus',
    messageData: {
      sender: '+998 90 001-02-03 (Noma\'lum)',
      channel: 'SMS',
      time: '14:28 bugun',
      content: 'Hurmatli fuqaro! Sizga davlat subsidiyasi hisobidan 500,000 so\'m ajratildi. Mablag\'ni kartangizga qabul qilish uchun quyidagi havolaga o\'ting.',
      url: 'http://uzcard-bonus-2026.xyz/claim',
      warningFlag: 'Soxta .xyz domeni va HTTP shifrlanmagan aloqa'
    },
    correctAction: 'block',
    whyCorrect: 'Fishing hujumi to\'xtatildi! ".xyz" domenidagi soxta sayt orqali fuqarolarning bank karta ma\'lumotlari va SMS kodlarini o\'g\'irlash ko\'zlangan.',
    whyWrong: 'Katta yo\'qotish! Bu klassik fishing xabari. Rasmiy to\'lov tizimlari hech qachon noma\'lum .xyz domenlarida bonus yoki subsidiya tarqatmaydi.',
    educationalTip: 'Havola domeniga diqqat qiling: rasmiy davlat saytlari faqat ".gov.uz", to\'lov tizimlari esa rasmiy ".uz" domenlariga ega.',
    securityImpact: 25,
    scoreGain: 120
  },
  {
    id: 'phish-2',
    stage: 2,
    stageTitle: '2-Bosqich: Fishing va Shaxsiy Ma\'lumotlar Ovi',
    category: 'phishing',
    categoryLabel: 'Telegram Xabarnomasi',
    title: 'Telegram: "Xavfsizlik Boti"',
    subtitle: 'Bot: @MyGovUz_Verification_bot',
    avatarSeed: 'tg-bot',
    messageData: {
      sender: '@MyGovUz_Verification_bot',
      channel: 'Telegram',
      time: '16:05 bugun',
      content: 'OGOHLANTIRISH: Profilingizga noqonuniy kirish qayd etildi. Akkauntni blokdan saqlab qolish uchun telefoningizga kelgan 5 xonali SMS kodni zudlik bilan shu botga yuboring!',
      warningFlag: 'SMS tasdiqlash kodini talab qilmoqda'
    },
    correctAction: 'block',
    whyCorrect: 'Havfli kiber-hujum fosh qilindi! Hech qachon SMS-tasdiqlash kodini botlarga yoki begona shaxslarga berib bo\'lmaydi.',
    whyWrong: 'Akkaunt o\'g\'irlanishiga sabab bo\'ldi! SMS-kod bu sizning shaxsiy kalitingiz. Uni botga berish xakerga hisobingizni to\'liq boshqarish imkonini beradi.',
    educationalTip: 'Eslab qoling: Hech bir rasmiy xizmat, bank yoki davlat organi sizdan SMS tasdiqlash kodini so\'ramaydi!',
    securityImpact: 30,
    scoreGain: 130
  },
  {
    id: 'phish-3',
    stage: 2,
    stageTitle: '2-Bosqich: Fishing va Shaxsiy Ma\'lumotlar Ovi',
    category: 'phishing',
    categoryLabel: 'Rasmiy E-mail Xabari',
    title: 'Yagona Identifikatsiya Tizimi (OneID)',
    subtitle: 'Yuboruvchi: no-reply@id.gov.uz',
    avatarSeed: 'oneid',
    messageData: {
      sender: 'Yagona Portal (no-reply@id.gov.uz)',
      channel: 'E-mail',
      time: '10:15 bugun',
      content: 'Hurmatli foydalanuvchi! Tizim xavfsizlik siyosati yangilandi. Shaxsiy profilingizdagi kontakt ma\'lumotlarini yangilash uchun rasmiy portalga kiring.',
      url: 'https://id.gov.uz/auth/verify',
      warningFlag: 'Tekshiruv: Rasmiy davlat domeni (gov.uz) va yaroqli SSL sertifikati'
    },
    correctAction: 'allow',
    whyCorrect: 'To\'g\'ri tasdiqlandi! Xat rasmiy "id.gov.uz" davlat domenidan yuborilgan, HTTPS shifrlangan va shaxsiy maxfiy parollarni so\'ramagan.',
    whyWrong: 'Noto\'g\'ri bloklandi! Bu rasmiy davlat tizimining qonuniy xabarnomasi. Havola to\'g\'ridan-to\'g\'ri xavfsiz id.gov.uz portaliga olib boradi.',
    educationalTip: 'Elektron xatning yuboruvchi manzilini (@dan keyingi qismini) sinchiklab tekshiring. Davlat tashkilotlari *.gov.uz domenida ishlaydi.',
    securityImpact: 15,
    scoreGain: 110
  },
  {
    id: 'phish-4',
    stage: 2,
    stageTitle: '2-Bosqich: Fishing va Shaxsiy Ma\'lumotlar Ovi',
    category: 'phishing',
    categoryLabel: 'Jamoat Wi-Fi Portali',
    title: 'Kafe Bepul Wi-Fi Tarmog\'i',
    subtitle: 'SSID: "City_Coffee_Free_WiFi"',
    avatarSeed: 'wifi-portal',
    messageData: {
      sender: 'Captive Portal (Avtorizatsiya)',
      channel: 'Wi-Fi Portal',
      time: '12:40 bugun',
      content: 'Bepul internetdan foydalanish uchun pasport seriya raqamingiz, JShShIR va bank kartangizning oxirgi 4 ta raqamini kiriting.',
      url: 'http://192.168.1.1/login.php',
      warningFlag: 'Ochiq tarmoqda ortiqcha shaxsiy ma\'lumotlar talab qilinmoqda'
    },
    correctAction: 'block',
    whyCorrect: 'Shaxsiy ma\'lumotlar ovi fosh qilindi! Ochiq Wi-Fi tarmoqlarida hech qachon pasport yoki bank karta ma\'lumotlari kiritilmasligi lozim.',
    whyWrong: 'Shaxsiy ma\'lumotlar sizib chiqdi! Bu soxta kirish nuqtasi ("Evil Twin") bo\'lib, firibgarlar fuqarolarning pasport va moliya ma\'lumotlarini yig\'moqda.',
    educationalTip: 'Jamoat joylaridagi bepul Wi-Fi tarmoqlarida faqat telefon orqali SMS tasdiq yetarli. Pasport yoki karta so\'ralsa, darhol tarmoqdan uziling!',
    securityImpact: 25,
    scoreGain: 120
  },
  {
    id: 'phish-5',
    stage: 2,
    stageTitle: '2-Bosqich: Fishing va Shaxsiy Ma\'lumotlar Ovi',
    category: 'phishing',
    categoryLabel: 'Rasmiy Xavfsizlik Bildirishnomasi',
    title: 'Google Hisobi Xavfsizlik Ogohlantirishi',
    subtitle: 'no-reply@accounts.google.com',
    avatarSeed: 'google-alert',
    messageData: {
      sender: 'Google Security Team',
      channel: 'Bildirishnoma',
      time: '09:02 bugun',
      content: 'Hisobingizga yangi Windows kompyuteridan kirish amalga oshirildi. Agar bu siz bo\'lsangiz, harakat talab etilmaydi. Agar siz bo\'lmasangiz, faollikni tekshiring.',
      url: 'https://myaccount.google.com/notifications',
      warningFlag: 'Asl rasmiy havola, shaxsiy ma\'lumot talab qilinmayapti'
    },
    correctAction: 'allow',
    whyCorrect: 'To\'g\'ri tasdiqlandi! Bu haqiqiy Google xavfsizlik bildirishnomasi bo\'lib, foydalanuvchini rasmiy "myaccount.google.com" sahifasiga yo\'naltiradi.',
    whyWrong: 'Noto\'g\'ri bloklandi! Bunday ogohlantirishlar tizim tomonidan haqiqiy kiberxavfsizlik monitoringi uchun yuboriladi va u soxta emas.',
    educationalTip: 'Haqiqiy xavfsizlik bildirishnomalari sizdan zudlik bilan kod yuborishni talab qilmaydi, faqat hisob faolligini ko\'rib chiqishni taklif qiladi.',
    securityImpact: 15,
    scoreGain: 110
  },

  // ==========================================
  // 3-BOSQICH: 2FA VA KIRISH NAZORATI (5 ta)
  // ==========================================
  {
    id: 'auth-1',
    stage: 3,
    stageTitle: '3-Bosqich: 2FA va Kirish Nazorati',
    category: 'access',
    categoryLabel: 'Hisobga Kirish Urinishi',
    title: 'Shubhali IP va Anonim Tarmoq',
    subtitle: 'Foydalanuvchi: Alisher Zoidov (Bosh muhandis)',
    avatarSeed: 'tor-node',
    accessData: {
      ip: '185.220.101.5 (Anonim TOR Exit Node)',
      location: 'Noma\'lum / Niderlandiya',
      time: 'Tungi 03:42 (Toshkent vaqti)',
      device: 'Noma\'lum Linux / Firefox ESR',
      authMethod: 'Faqat parol (2FA kiritilmadi)',
      twoFactorStatus: 'O\'chirilgan',
      threatLevel: 'Kritik'
    },
    correctAction: 'block',
    whyCorrect: 'Tizim buzilishi bartaraf etildi! TOR anonim tarmog\'idan tun yarmida 2FA tasdiqisiz kirish urinishi xakerlik hujumidan dalolat beradi.',
    whyWrong: 'Kritik xavfsizlik buzilishi! Begona davlatdagi anonimlashtiruvchi tugundan kelgan shubhali sessiyaga ruxsat berish butun bazani xavf ostiga qo\'ydi.',
    educationalTip: 'Noodatiy vaqt, begona mamlakat va 2FA himoyasi yo\'qligi — ruxsatsiz kirish urinishining yaqqol belgisidir.',
    securityImpact: 35,
    scoreGain: 140
  },
  {
    id: 'auth-2',
    stage: 3,
    stageTitle: '3-Bosqich: 2FA va Kirish Nazorati',
    category: 'access',
    categoryLabel: 'Hisobga Kirish Urinishi',
    title: 'Ishonchli Xodimning Ish Vaqti',
    subtitle: 'Foydalanuvchi: Nodira Rahimova (HR menejer)',
    avatarSeed: 'nodira-work',
    accessData: {
      ip: '213.230.100.12 (Uztelecom Broadband)',
      location: 'O\'zbekiston, Toshkent shahri',
      time: '14:15 (Ish vaqti)',
      device: 'MacOS Sonoma / Safari (Ro\'yxatdan o\'tgan)',
      authMethod: 'Parol + SMS 2FA',
      twoFactorStatus: 'Tasdiqlangan',
      threatLevel: 'Past'
    },
    correctAction: 'allow',
    whyCorrect: 'Muvaffaqiyatli sessiya! Ishonchli qurilma, muntazam joylashuv, ish vaqti va muvaffaqiyatli 2FA tasdiqlovi mavjud.',
    whyWrong: 'Xodim asossiz bloklandi! Barcha parametrlar — joylashuv, qurilma va 2FA tekshiruvlari to\'liq qonuniy va xavfsiz edi.',
    educationalTip: '2FA bilan tasdiqlangan va xodimning doimiy qurilmasidan kelgan so\'rovlar xavfsiz kirish hisoblanadi.',
    securityImpact: 15,
    scoreGain: 110
  },
  {
    id: 'auth-3',
    stage: 3,
    stageTitle: '3-Bosqich: 2FA va Kirish Nazorati',
    category: 'access',
    categoryLabel: 'Hisobga Kirish Urinishi',
    title: 'Yangi Qurilmadan Muvaffaqiyatsiz 2FA',
    subtitle: 'Foydalanuvchi: Umid Qosimov (Moliya direktori)',
    avatarSeed: 'umid-failed',
    accessData: {
      ip: '82.145.222.80 (Mobil internet)',
      location: 'O\'zbekiston, Samarqand',
      time: '21:10 kechqurun',
      device: 'Noma\'lum Android qurilmasi (Yangi)',
      authMethod: 'Parol to\'g\'ri kiritildi',
      twoFactorStatus: 'Yo\'q / Rad etilgan',
      threatLevel: 'Kritik'
    },
    correctAction: 'block',
    whyCorrect: 'Ruxsatsiz kirish to\'xtatildi! Foydalanuvchi parolni bilgan bo\'lsa ham, 2FA tasdiqlov kodini taqdim eta olmadi. 2FA aynan shuning uchun kerak!',
    whyWrong: 'Kiber-falokat! Parol o\'g\'irlangan bo\'lishi mumkin. 2FA kodi kiritilmagan sessiyaga ruxsat berish o\'g\'iriga barcha hisoblarni ochib beradi.',
    educationalTip: 'Ikki bosqichli autentifikatsiya (2FA) — parolingiz o\'g\'irlangan taqdirda ham hisobingizni 99.9% himoya qiluvchi qalqondir.',
    securityImpact: 35,
    scoreGain: 140
  },
  {
    id: 'auth-4',
    stage: 3,
    stageTitle: '3-Bosqich: 2FA va Kirish Nazorati',
    category: 'access',
    categoryLabel: 'Tizim API So\'rovi',
    title: 'Sizib Chiqqan API Kalit Hujumi',
    subtitle: 'Avtomatlashtirilgan bot faolligi',
    avatarSeed: 'api-leak',
    accessData: {
      ip: '45.154.255.99 (Kiber-skaner)',
      location: 'Frankfurt, Germaniya (Server hosting)',
      time: 'Uzluksiz (Sekundiga 450 so\'rov)',
      device: 'Python-requests/2.31.0 skripti',
      authMethod: 'GitHub\'dan ochiq sizib chiqqan API Token',
      twoFactorStatus: 'O\'chirilgan',
      threatLevel: 'Kritik'
    },
    correctAction: 'block',
    whyCorrect: 'DDoS va ma\'lumotlar o\'g\'irlanishi to\'xtatildi! Ochiq manbada qoldirilgan API kalit orqali botlar tizim ma\'lumotlarini supurib ketmoqchi edi.',
    whyWrong: 'Tizim falajlandi! Sekundiga yuzlab so\'rov yuborayotgan avtomatlashtirilgan botga ruxsat berish serverni to\'xtatib qo\'yadi.',
    educationalTip: 'Dasturchilar hech qachon maxfiy API kalitlari va parollarni ochiq GitHub repozitoriylarida qoldirmasligi shart!',
    securityImpact: 30,
    scoreGain: 130
  },
  {
    id: 'auth-5',
    stage: 3,
    stageTitle: '3-Bosqich: 2FA va Kirish Nazorati',
    category: 'access',
    categoryLabel: 'Super-Admin Autentifikatsiyasi',
    title: 'Apparat Xavfsizlik Kaliti (FIDO2 / YubiKey)',
    subtitle: 'Bosh xavfsizlik xodimi (CISO)',
    avatarSeed: 'yubikey-admin',
    accessData: {
      ip: '10.0.12.4 (Kompaniyaning ichki xavfsiz tarmog\'i)',
      location: 'Bosh ofis Server xonasi',
      time: '11:00 kunduzgi',
      device: 'Maxsus kiber-terminal (Uskunaviy tekshiruv)',
      authMethod: 'FIDO2 / WebAuthn jismoniy USB kaliti',
      twoFactorStatus: 'Tasdiqlangan',
      threatLevel: 'Past'
    },
    correctAction: 'allow',
    whyCorrect: 'Yuqori darajadagi xavfsiz kirish tasdiqlandi! Jismoniy FIDO2 apparat xavfsizlik kaliti fishing va parollarni o\'g\'irlashdan 100% himoyalangan zamonaviy standartdir.',
    whyWrong: 'Tizim administratori bloklandi! Jismoniy USB xavfsizlik kaliti (FIDO2) hozirgi kunda dunyodagi eng mustahkam va buzib bo\'lmas autentifikatsiya usulidir.',
    educationalTip: 'FIDO2 apparat kalitlari (masalan YubiKey) hech qanday fishing saytlariga aldanmaydi va maksimal himoyani ta\'minlaydi.',
    securityImpact: 20,
    scoreGain: 150
  }
];

export const PLAYER_RANKS: PlayerRank[] = [
  {
    title: 'Kiber-Afsona (Cyber Legend)',
    minScore: 1600,
    badge: '👑',
    description: 'Siz raqamli makonning tengsiz posbonisiz! Barcha xakerlik hiylalari va fishing tuzoqlarini mohirona fosh etdingiz. Tizim to\'liq daxlsiz!',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    title: 'Katta Kiber-Tahlilchi (Senior Analyst)',
    minScore: 1200,
    badge: '🛡️',
    description: 'Juda yuqori professional ko\'rsatkich! Parollar va 2FA nazorati bo\'yicha mukammal bilimga egasiz, kichik xatolar esa tajribangizni oshiradi.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    title: 'Yosh Himoyachi (Junior Defender)',
    minScore: 800,
    badge: '⚡',
    description: 'Yaxshi natija! Siz kiberxavfsizlikning asosiy qoidalarini bilasiz, ammo ayyorona fishing usullariga qarshi hushyorlikni yanada oshirishingiz lozim.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    title: 'Stajyor Kuzatuvchi (Security Trainee)',
    minScore: 0,
    badge: '🔍',
    description: 'Kiber-olamda birinchi qadamlar! Parollar mustahkamligi va shubhali havolalarni qayta o\'rganib, o\'yinni qayta o\'ynash tavsiya etiladi.',
    color: 'from-slate-400 to-slate-600'
  }
];
