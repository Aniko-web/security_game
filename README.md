# 🛡️ Cyber-Detective: Raqamli Qalqon

> **Shaxsiy ma'lumotlarni himoya qilish va parollar xavfsizligi mavzusidagi interaktiv kiber-ta'limiy veb-o'yini.**
> Akademik litsey o'quvchilari va keng auditoriya uchun kiberxavfsizlik madaniyatini yuksaltirish maqsadida yaratilgan.

---

## 🚀 Texnologik Stek
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (Nafis kiberxavfsizlik va chuqur qora/to'q ko'k ranglar palitrasi)
- **Animatsiyalar:** Framer Motion (Reigns/Tinder uslubidagi silliq swipe/drag kartochkalar, og'ish, impulslar)
- **Ikonkalar:** Lucide React
- **Audio:** Web Audio API (Tashqi fayllarsiz toza sci-fi tovush sintezatori)
- **Effektlar:** Canvas Confetti (G'alaba marosimi)

---

## 🎮 O'yin Mexanikasi va Bosqichlar
O'yinchi **Kiberxavfsizlik Tahlilchisi** sifatida tizimga kelayotgan har bir so'rovni ko'rib chiqadi:
- **Tizim Xavfsizligi (100%):** Noto'g'ri qaror tizim butunligini kamaytiradi. Agar u 0% ga tushib ketsa, kiber-buzilish (Breach Detected) yuz beradi!
- **Ballar Tizimi:** Har bir to'g'ri qaror ball keltiradi (+100..+150 ball).

### 🕹️ 3 Ta Asosiy Bosqich (15 ta noyob vaziyat):
1. **1-bosqich: Parollar Filtratsiyasi:**
   - Foydalanuvchilarning profil ma'lumotlari (ism-familiya, tug'ilgan yil, lavozim) va ular yaratmoqchi bo'lgan parollar tahlili.
   - Shaxsiy ma'lumotlarga bog'liq, oddiy lug'at so'zlari yoki klaviatura ketma-ketliklarini **Bloklash**, yuqori entropiyali kuchli parollarni **Tasdiqlash**.
2. **2-bosqich: Fishing va Shaxsiy Ma'lumotlar Ovi:**
   - Soxta bonus va yutuq SMS xabarlari (`.xyz` domenlari), Telegram botlaridan kod talablari, rasmiy `.gov.uz` tizimlari va jamoat Wi-Fi tuzoqlari.
3. **3-bosqich: 2FA va Kirish Nazorati:**
   - Anonim TOR tugunlari, tun yarmida xorijdan shubhali kirishlar, 2FA kodisiz urinishlar, ochiq repozitoriylardan sizib chiqqan API kalitlar va FIDO2 apparat xavfsizlik kalitlari.

---

## ⌨️ Boshqaruv (Controls)
- **Sichqoncha / Sensorli ekran:** Kartochkani chapga ("Bloklash") yoki o'ngga ("Ruxsat berish") surish (drag / swipe).
- **Tugmalar:** Ekranning pastki qismidagi nafis kiber-tugmalar.
- **Klaviatura:**
  - `←` (Chap strelka): Bloklash
  - `→` (O'ng strelka): Ruxsat berish
  - `Enter` yoki `Space`: Tahlildan so'ng keyingi vaziyatga o'tish

---

## 💻 Loyihani Ishga Tushirish

```bash
# 1. Bog'liqliklarni o'rnatish (agar o'rnatilmagan bo'lsa)
npm install

# 2. Dasturchi rejimida ishga tushirish (Local Server)
npm run dev

# 3. Brauzerda ochish:
# http://localhost:3000
```

Production build tayyorlash:
```bash
npm run build
npm run preview
```
