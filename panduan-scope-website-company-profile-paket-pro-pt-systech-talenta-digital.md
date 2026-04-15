# Panduan & Scope Pengerjaan Website Company Profile Paket Pro
## PT Systech Talenta Digital
### Brief Implementasi untuk AI Codex di Visual Studio Code

---

## 1. Tujuan Dokumen
Dokumen ini berfungsi sebagai panduan implementasi dan scope pengerjaan website **Company Profile Paket Pro** untuk **PT Systech Talenta Digital**.

Website akan dibangun dengan pendekatan:
- tampilan, struktur halaman, ritme section, posisi tombol, dan flow visual diarahkan semirip mungkin dengan website SGI Asia
- website diposisikan sebagai clone terarah dari website SGI Asia yang disesuaikan untuk PT Systech Talenta Digital
- identitas visual, konten, dan warna harus disesuaikan dengan brand PT Systech Talenta Digital dan untuk dummy boleh mengambil dari internet yang opensource dan untuk icon mengamil dari bladeicon
- implementasi dikerjakan dengan bantuan AI Codex di Visual Studio Code

Dokumen ini ditujukan agar proses implementasi lebih terarah, konsisten, dan sesuai dengan paket yang telah disepakati.

---

## 2. Arah Umum Website
Website yang akan dibuat adalah website company profile corporate dengan karakter:

- modern
- clean
- professional
- corporate
- terpercaya
- fokus pada kredibilitas bisnis
- mudah diakses di desktop dan mobile
- mendukung kebutuhan presentasi perusahaan kepada calon client

### Referensi Utama
Website referensi utama:
- https://www.sgi-asia.co.id/

### Prinsip Implementasi
Pola yang harus diikuti dari referensi:
- struktur halaman
- ritme section
- layout corporate
- hierarki visual
- flow informasi
- pola CTA
- model halaman home/about/services/contact
- gaya header dan footer
- pola penempatan tombol utama dan sekunder
- urutan section utama pada homepage
- gaya card, spacing, dan ritme konten

Yang wajib diganti dari referensi:
- teks
- gambar
- ikon khusus
- identitas brand
- aset visual
- warna asli referensi
- nama perusahaan
- logo perusahaan
- informasi kontak
- data client, testimonial, FAQ, dan company profile

untuk asset gambar icon dan lainnya mengambil dari internet yang opensource agar lebih mudah 

Target akhir:
- website terasa sangat dekat dengan referensi SGI Asia dalam struktur dan gaya presentasi
- namun tetap tampil sebagai identitas PT Systech Talenta Digital dari sisi brand, konten, icon, gambar, dan warna

---

## 3. Teknologi yang Digunakan
Website akan dibangun menggunakan:

- Laravel sebagai framework utama
- Blade untuk templating frontend
- Tailwind CSS untuk styling
- Filament untuk admin panel internal
- MySQL untuk database

### Catatan
- website publik fokus pada company profile
- tidak ada blog / artikel publik
- data dasar website harus dapat dikelola dari admin panel Filament

---

## 4. Tujuan Bisnis Website
Website ini dibuat untuk mendukung kebutuhan bisnis perusahaan, yaitu:

- menampilkan profil perusahaan secara profesional
- menjelaskan layanan utama perusahaan
- meningkatkan kepercayaan calon client
- mempermudah komunikasi dengan calon client
- menampilkan kredibilitas perusahaan melalui layout yang kuat
- menyediakan halaman career/join us secara sederhana
- menampilkan client/portfolio agar terlihat lebih meyakinkan

---

## 5. Scope Paket Pro
Paket yang akan dikerjakan adalah Paket Pro.

### Jumlah Halaman
Total 8 halaman

### Daftar Halaman
1. Home
2. About Us
3. Services
4. Vision & Mission
5. Client / Portfolio
6. Career / Join Us
7. Contact
8. Why Choose Us / FAQ / Company Overview

### Catatan Struktur
- meskipun website referensi SGI Asia banyak menaruh konten penting di homepage, pada project ini konten tersebut harus dipecah menjadi 8 halaman
- homepage tetap mengikuti ritme utama homepage SGI Asia
- halaman lain merupakan perluasan dari section-section penting SGI agar paket Pro terasa lebih lengkap
- seluruh 8 halaman wajib tersedia sebagai halaman terpisah

---

## 6. Struktur Navigasi
Gunakan navigasi utama sederhana di header:
untuk semua menu dibuatkan di halaman terpisah dan tidak digabung dalam 1 halaman
- Home
- About Us
- Services
- Vision & Mission
- Client / Portfolio
- Career / Join Us
- Contact
- Why Choose Us / FAQ

Catatan:
- berbeda dari website SGI Asia yang dominan one-page section di homepage, project ini wajib menampilkan 8 halaman terpisah
- halaman Why Choose Us / FAQ / Company Overview ditetapkan sebagai halaman terpisah agar total 8 halaman konsisten
- homepage tetap boleh menampilkan preview dari beberapa section utama, tetapi versi lengkapnya harus ada di halaman masing-masing

### Header
Header harus berisi:
- logo perusahaan di kiri
- menu navigasi utama
- tombol CTA utama di kanan, misalnya:
  - Hubungi Kami
  - Konsultasi
  - Request Info

Header harus mengikuti pola referensi SGI Asia:
- logo kiri
- menu utama di tengah/kanan
- CTA kontak yang jelas
- versi mobile tetap mempertahankan hirarki yang sama

### Footer
Footer harus memuat:
- logo / nama perusahaan
- ringkasan singkat perusahaan
- quick links
- alamat
- email
- nomor WhatsApp
- copyright
- social media opsional jika ada

Footer harus mengikuti gaya informasi padat seperti SGI Asia:
- identitas perusahaan
- detail kontak utama
- alamat lengkap
- quick links
- partner atau informasi tambahan bila dibutuhkan

---

## 7. Struktur dan Scope Tiap Halaman

# A. HOME
Tujuan:
- memberikan first impression profesional
- menjelaskan siapa perusahaan ini secara singkat
- menampilkan layanan unggulan
- membangun trust
- mengarahkan user ke kontak

## Struktur Home yang Direkomendasikan
Homepage harus menjadi halaman yang paling dekat dengan struktur SGI Asia.

### 1. Hero Section
Komponen:
- headline utama besar
- subheadline
- CTA utama
- CTA sekunder
- area visual corporate / image / illustration

### 2. Intro Perusahaan
Isi:
- ringkasan profil perusahaan
- siapa PT Systech Talenta Digital
- fokus perusahaan
- tombol menuju About Us

### 3. Highlight Services
Tampilkan layanan utama dalam card:
- Training
- Outsourcing
- Layanan pendukung lain bila dibutuhkan

### 4. Why Choose Us Preview
Minimal 3–4 keunggulan:
- profesional
- berpengalaman
- adaptif
- fokus kualitas
- dukungan tim

### 5. Statistik / Highlight
Tampilkan angka highlight seperti:
- jumlah client
- jumlah program
- pengalaman
- jumlah peserta / project
- network profesional

Gunakan stat card yang clean.

### 6. Client / Portfolio Preview
Tampilkan logo client, nama client, atau portofolio singkat.

### 7. Testimonial
Tampilkan 2–4 testimonial singkat.

### 8. FAQ Preview
Tampilkan beberapa FAQ singkat.

### 9. CTA Penutup
Section ajakan akhir:
- “Butuh mitra training dan outsourcing?”
- tombol WhatsApp / kontak

### 10. Partnership / Trust Footer Preview
Jika dibutuhkan, tambahkan area partner atau trust logos sebelum footer untuk mempertahankan rasa visual seperti referensi.

---

# B. ABOUT US
Tujuan:
- menjelaskan identitas perusahaan lebih dalam
- membangun trust
- memperkuat positioning

## Struktur About Us
Halaman ini merupakan pengembangan dari section About pada SGI Asia.

### 1. Page Header
- judul halaman
- deskripsi singkat
- breadcrumb opsional

### 2. Company Overview
Isi:
- sejarah singkat / latar belakang
- bidang usaha
- orientasi bisnis
- posisi perusahaan

### 3. Nilai Perusahaan
Buat dalam format card atau icon list:
- profesional
- kolaboratif
- inovatif
- terpercaya

### 4. Company Journey / Highlight
Bisa berupa timeline singkat atau narasi.

### 5. Leadership / Team Intro
Opsional jika data tersedia:
- founder
- director
- management

### 6. CTA ringan
Arahkan ke Services atau Contact

---

# C. SERVICES
Tujuan:
- menjelaskan layanan secara lebih detail
- membantu client memahami manfaat bisnis

## Struktur Services
Halaman ini harus mempertahankan gaya penjelasan layanan seperti SGI Asia, tetapi dibuat lebih lengkap.

### 1. Page Header
- judul
- deskripsi singkat

### 2. Services List
Minimal layanan:
- Training
- Outsourcing

Tiap layanan harus memiliki:
- judul
- ringkasan
- poin manfaat
- nilai tambah
- CTA

### 3. Workflow / Alur Kerja
Contoh:
1. Konsultasi kebutuhan
2. Analisa kebutuhan client
3. Penawaran layanan
4. Pelaksanaan
5. Evaluasi / dukungan

### 4. CTA section
Arahkan user ke Contact

---

# D. VISION & MISSION
Tujuan:
- menunjukkan arah perusahaan
- mempertegas identitas bisnis

## Struktur Vision & Mission
Halaman ini adalah perluasan dari positioning korporat yang pada referensi lebih banyak dibangun lewat narasi homepage.

### 1. Vision Block
Tampilkan satu blok utama dengan desain yang menonjol.

### 2. Mission List
Tampilkan 3–5 poin mission.

### 3. Corporate Values / Commitment
Tambahkan section singkat:
- komitmen kualitas
- pengembangan talenta
- orientasi kepuasan client

---

# E. CLIENT / PORTFOLIO
Tujuan:
- meningkatkan kredibilitas
- menunjukkan pengalaman dan kepercayaan client

## Struktur Client / Portfolio
Halaman ini adalah perluasan dari area trust, partner, dan proof section pada referensi.

### 1. Page Header
- judul
- deskripsi singkat

### 2. Logo / Client List
Tampilkan logo atau nama client.

### 3. Portfolio / Case Preview
Jika data tersedia, tampilkan ringkasan project atau layanan yang pernah diberikan.

### 4. CTA
Arahkan ke Contact

Catatan:
Jika data client belum tersedia, siapkan layout yang tetap bisa diisi nanti.

---

# F. CAREER / JOIN US
Tujuan:
- menampilkan informasi peluang bergabung
- mendukung kebutuhan perekrutan sederhana

## Struktur Career / Join Us
Halaman ini adalah tambahan paket Pro dan tidak ada padanan penuh di website referensi, tetapi gaya visualnya tetap harus konsisten dengan SGI Asia.

### 1. Header Page
- judul
- deskripsi singkat

### 2. Informasi Kesempatan Bergabung
Tampilkan narasi singkat tentang budaya kerja / peluang.

### 3. Job Info / Placeholder
Tampilkan lowongan sederhana atau placeholder jika belum ada banyak data.

### 4. Form sederhana
Field minimal:
- nama
- email
- nomor telepon
- posisi yang diminati
- pesan singkat

Catatan:
Tidak perlu sistem rekrutmen kompleks.

---

# G. CONTACT
Tujuan:
- mempermudah calon client menghubungi perusahaan

## Struktur Contact
Halaman ini harus sangat dekat dengan pola contact section SGI Asia, hanya dipisah menjadi halaman tersendiri.

### 1. Informasi Kontak
- alamat
- nomor WhatsApp
- email
- jam operasional jika ada

### 2. Contact Form
Field:
- nama
- email
- nomor telepon
- subjek
- pesan

### 3. WhatsApp CTA
Tombol langsung ke WhatsApp dengan pesan otomatis.

### 4. Google Maps
Embed lokasi kantor bila tersedia.

---

# H. WHY CHOOSE US / FAQ / COMPANY OVERVIEW
Tujuan:
- memperkuat kredibilitas dan membantu menjawab pertanyaan umum

## Struktur Halaman
### Opsi isi yang direkomendasikan
- Why Choose Us
- FAQ
- Company Overview singkat
- ringkasan keunggulan perusahaan

Halaman ini bisa dibuat dengan format:
- heading besar
- daftar pertanyaan umum
- card keunggulan
- CTA penutup

Halaman ini merupakan pengembangan langsung dari section Why Choose Us dan FAQ pada homepage SGI Asia.

---

## 8. Komponen UI yang Perlu Dibuat
Buat komponen reusable agar struktur rapi dan mudah dipelihara.

### Komponen Utama
- main layout
- navbar
- footer
- hero section
- page header
- service card
- feature/why choose us card
- stat card
- testimonial card
- FAQ accordion
- CTA banner section
- contact form section
- portfolio/client card
- career form section

---

## 9. Arah Visual & Desain
Website harus memiliki nuansa corporate yang sangat dekat dengan referensi SGI Asia.

### Gaya Visual
- clean
- modern
- enterprise feel
- elegan
- tidak terlalu ramai
- tidak terlalu banyak animasi
- komposisi section mengikuti ritme SGI Asia
- kekuatan visual bertumpu pada layout, spacing, heading, dan CTA seperti referensi

### Warna
Gunakan warna yang mengikuti logo PT Systech Talenta Digital.

Prinsip warna:
- primary color dari warna dominan logo
- secondary color sebagai turunan yang mendukung
- putih sebagai base utama
- abu muda untuk section background
- warna CTA harus kontras namun tetap profesional

### Typography
Gunakan font sans-serif modern yang mudah dibaca.

### Layout
- banyak white space
- konsisten antar section
- heading jelas
- card rapi
- tombol CTA kuat
- layout tidak terlalu padat
- urutan dan rasa visual dibuat semirip mungkin dengan SGI Asia
- perbedaan utama ada pada identitas brand, teks, gambar hero, icon, dan warna

---

## 10. Kebutuhan Responsif
Website harus optimal di:
- desktop
- tablet
- mobile

### Prioritas Mobile
- menu mobile yang rapi
- tombol CTA tetap terlihat
- spacing tidak terlalu sempit
- card stack dengan baik
- form tetap nyaman diisi

---

## 11. Scope Admin Panel Filament
Admin panel digunakan untuk update data dasar website.

### Data yang Harus Bisa Dikelola
- company profile
- about us content
- vision
- mission
- services
- contact info
- WhatsApp link
- testimonials
- client / portfolio
- homepage highlight/statistics
- FAQ
- career basic information

### Resource Filament Minimum
- CompanyProfileResource
- ServiceResource
- ContactInfoResource
- TestimonialResource
- HomepageSettingResource
- VisionMissionResource
- ClientPortfolioResource
- FaqResource
- CareerResource

---

## 12. Struktur Folder yang Disarankan

### Frontend
- resources/views/layouts/app.blade.php
- resources/views/components/
- resources/views/pages/home.blade.php
- resources/views/pages/about.blade.php
- resources/views/pages/services.blade.php
- resources/views/pages/vision-mission.blade.php
- resources/views/pages/client-portfolio.blade.php
- resources/views/pages/career.blade.php
- resources/views/pages/contact.blade.php
- resources/views/pages/why-choose-us.blade.php

### Backend / Admin
- app/Filament/Resources/
- app/Models/
- database/migrations/
- database/seeders/

---

## 13. Output yang Diharapkan dari Codex
Codex diminta membantu membuat:
1. struktur layout utama
2. routing website
3. halaman Blade untuk semua halaman
4. komponen reusable
5. styling Tailwind CSS
6. struktur data/model dasar
7. Filament resources dasar
8. form kontak sederhana
9. CTA WhatsApp
10. struktur konten dinamis dari admin panel
11. adaptasi clone terarah dari struktur visual SGI Asia ke format 8 halaman

---

## 14. Acceptance Criteria
Implementasi dianggap sesuai jika:
- seluruh 8 halaman tersedia
- desain terlihat corporate, clean, dan profesional
- ritme layout, susunan section, pola CTA, dan gaya visual terasa sangat dekat dengan website SGI Asia
- warna mengikuti identitas PT Systech Talenta Digital
- brand, teks, gambar, icon, dan informasi kontak sudah diganti menjadi milik PT Systech Talenta Digital
- website responsif di mobile dan desktop
- CTA WhatsApp berfungsi
- contact form tampil baik
- komponen reusable digunakan dengan rapi
- data utama website dapat diupdate dari admin panel
- halaman Pro benar-benar terasa lebih lengkap dari paket Basic
- konten penting yang pada SGI Asia ada di homepage berhasil dipecah rapi ke dalam 8 halaman tanpa kehilangan rasa visual referensi

---

## 15. Batasan Scope
Agar implementasi tetap sesuai paket, berikut batasannya:
- tidak membuat blog/artikel publik
- tidak membuat sistem member/login publik
- tidak membuat LMS
- tidak membuat portal berita
- tidak membuat dashboard analytics kompleks
- tidak membuat sistem HR/rekrutmen kompleks
- tidak membuat fitur di luar company profile kecuali disepakati terpisah

---

## 16. Prompt Siap Pakai untuk Codex
Gunakan prompt berikut di AI Codex dalam Visual Studio Code:

```txt
Bantu saya membangun website company profile Paket Pro untuk PT Systech Talenta Digital menggunakan Laravel, Blade, Tailwind CSS, dan Filament.

Website harus dibuat sebagai clone terarah dari website SGI Asia, dengan struktur visual, ritme section, pola CTA, dan gaya layout yang semirip mungkin dengan website referensi. Namun brand, logo, warna, icon, gambar, teks, data kontak, dan seluruh identitas perusahaan harus diganti menjadi PT Systech Talenta Digital.

Buat 8 halaman:
1. Home
2. About Us
3. Services
4. Vision & Mission
5. Client / Portfolio
6. Career / Join Us
7. Contact
8. Why Choose Us / FAQ / Company Overview

Catatan penting:
- website referensi SGI Asia banyak menaruh section penting di homepage
- pada project ini seluruh konten utama tersebut harus dipecah menjadi 8 halaman terpisah
- homepage tetap harus terasa paling dekat dengan homepage SGI Asia
- halaman lain adalah pengembangan dari section-section utama SGI Asia agar paket Pro lebih lengkap

Persyaratan utama:
- Gunakan Laravel Blade
- Gunakan Tailwind CSS
- Buat layout reusable dan clean code
- Gunakan komponen seperti navbar, footer, hero section, page header, cards, FAQ accordion, CTA section, dan contact form
- Website harus responsif
- Buat struktur admin panel Filament untuk mengelola data utama website

Halaman Home harus memiliki:
- hero section
- intro perusahaan
- services highlight
- why choose us preview
- statistics/highlight
- client preview
- testimonial
- FAQ preview
- CTA akhir

Halaman About Us harus memiliki:
- company overview
- values
- company highlight/journey
- leadership/team intro opsional

Halaman Services harus memiliki:
- daftar layanan
- penjelasan tiap layanan
- workflow sederhana
- CTA

Halaman Vision & Mission harus memiliki:
- blok vision
- daftar mission
- commitment / values

Halaman Client / Portfolio harus memiliki:
- daftar client / logo
- preview portfolio / case

Halaman Career / Join Us harus memiliki:
- deskripsi singkat
- form sederhana

Halaman Contact harus memiliki:
- info kontak
- contact form
- tombol WhatsApp
- Google Maps

Halaman Why Choose Us / FAQ / Company Overview harus memiliki:
- daftar keunggulan perusahaan
- FAQ accordion
- CTA penutup

Buat juga Filament resources minimum untuk:
- CompanyProfile
- Services
- ContactInfo
- Testimonials
- HomepageSettings
- VisionMission
- ClientPortfolio
- FAQ
- Career

Utamakan clean architecture, reusable component, dan tampilan corporate profesional.
```

---

## 17. Catatan Akhir
- seluruh konten final mengikuti data dari client
- logo, teks, gambar, dan aset perusahaan disediakan oleh client
- bila data tertentu belum tersedia, siapkan placeholder yang tetap profesional
- fokus utama adalah menghasilkan website company profile Paket Pro yang secara visual dan struktural sangat dekat dengan SGI Asia, tetapi sudah berganti identitas penuh menjadi PT Systech Talenta Digital
