# Petualangan Penjaga Hutan
Game edukasi web responsif untuk HP, laptop, dan Papan Interaktif Digital (PID).

## Cara menjalankan di Visual Studio Code
1. Ekstrak ZIP ke folder.
2. Buka folder `Petualangan_Penjaga_Hutan` di VS Code.
3. Buka `index.html` melalui browser. Disarankan memakai ekstensi **Live Server** lalu klik kanan `index.html` → **Open with Live Server**.
4. Pilih mode, kelas, tingkat kesulitan, dan mapel lalu tekan Mulai.

## Kontrol
- HP/PID: tombol kiri/kanan, LOMPAT, SERANG; atau geser jari ke arah sasaran.
- Laptop: A/D atau tombol panah untuk bergerak, W/↑/Spasi untuk melompat, klik/geser mouse untuk menyerang.
- Efek suara dibuat secara sintetis oleh Web Audio API, bukan mengambil musik atau audio berhak cipta.

## Isi dan pengembangan
- Ada 10 tantangan per mapel untuk 10 mapel (100 soal contoh), mode Solo/Duo/Squad, kelas 1–6, dan pilihan kesulitan.
- Ini adalah **prototipe awal**. Untuk penerapan kelas, guru perlu meninjau dan menyesuaikan tingkat bahasa, cakupan materi, CP/TP, serta level soal per kelas berdasarkan kurikulum dan ATP sekolah. Pilihan kelas saat ini ditampilkan dalam game, tetapi bank soal contoh belum dipisahkan secara mendalam untuk masing-masing kelas.
- Mode Duo/Squad adalah pilihan mode kelompok; prototipe ini masih memakai satu karakter yang dikendalikan bersama, bukan jaringan multiplayer.
- Karakter, musuh, dan audio menggunakan desain orisinal sederhana yang terinspirasi dari genre platformer petualangan, bukan karakter atau musik Mario Bros.
