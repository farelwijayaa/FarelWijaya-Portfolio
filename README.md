# Portfolio — Bagas Wirawan (contoh)

Website portofolio statis (HTML/CSS/JS murni, tanpa framework) dengan gaya
sidebar gelap + hero bertema "terminal", cocok untuk mahasiswa Teknik Informatika.

## Struktur file
```
portfolio/
├── index.html   → seluruh konten & struktur halaman
├── style.css    → semua styling (warna, layout, responsive)
├── script.js    → efek mengetik, navigasi aktif, menu mobile, form kontak
└── README.md
```

## 1. Ganti dengan data kamu
Semua yang perlu diedit ada di `index.html`:

- **Nama, peran, avatar (inisial)** → bagian `<aside class="sidebar">`
- **Link sosial media** (GitHub, LinkedIn, Instagram, email) → ganti `href="..."`
- **Bagian Home / Hero** → judul, deskripsi singkat, angka statistik
- **Tentang saya** → paragraf + kampus, jurusan, semester, lokasi
- **Skills** → daftar bahasa/tools, lebar `.bar div{width:XX%}` = level kemahiran
- **Projects** → ganti judul, deskripsi, stack, dan link `href="#"` ke repo/demo asli
- **Journey** → riwayat organisasi, lomba, pengalaman
- **Contact** → email, nomor WhatsApp, lokasi
- **CV** → letakkan file PDF CV kamu di folder ini dengan nama
  `cv-bagas-wirawan.pdf`, atau ganti `href` tombol "Unduh CV"

Warna & font bisa diubah lewat variabel di bagian atas `style.css` (`:root { ... }`).

## 2. Form kontak
Form di bagian Contact saat ini hanya demo statis (tidak mengirim email
sungguhan). Untuk membuatnya benar-benar berfungsi tanpa perlu bikin backend
sendiri, pilih salah satu:
- [Formspree](https://formspree.io) — cukup ganti `action` form ke URL Formspree kamu
- [EmailJS](https://www.emailjs.com) — kirim email langsung dari JavaScript
- Atau buat Vercel Serverless Function (`/api/contact.js`) kalau ingin kontrol penuh

## 3. Coba lokal
Tidak perlu instalasi apa pun — cukup buka `index.html` di browser,
atau jalankan server statis sederhana:
```bash
npx serve .
```

## 4. Deploy ke Vercel
**Opsi A — lewat GitHub (disarankan):**
1. Buat repo baru di GitHub, lalu push folder ini:
   ```bash
   git init
   git add .
   git commit -m "portfolio pertama"
   git branch -M main
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo tadi.
3. Framework Preset: pilih **Other** (situs statis, tidak butuh build command).
4. Klik **Deploy**. Selesai — kamu dapat URL seperti `nama-kamu.vercel.app`.

**Opsi B — lewat Vercel CLI (tanpa GitHub):**
```bash
npm i -g vercel
cd portfolio
vercel
```
Ikuti prompt-nya, lalu `vercel --prod` untuk publish ke domain produksi.

## 5. Setelah live
- Tambahkan domain sendiri di dashboard Vercel (menu **Domains**) kalau punya.
- Update terus bagian Projects setiap selesai bikin proyek baru — ini yang
  paling dilihat recruiter/dosen pembimbing.
