const $ = (id) => document.getElementById(id);
const canvas = $("world"), ctx = canvas.getContext("2d");
const subjects = {
pai:{name:"Pendidikan Agama Islam",q:[
["Sebelum memulai kegiatan baik, kita sebaiknya membaca…",["Doa","Teriakan","Pantun","Tebakan"],0,"Berdoa mengingatkan kita kepada Allah."],
["Sikap jujur berarti…",["Berkata sesuai kenyataan","Menyembunyikan semua hal","Menyalahkan teman","Mencontek"],0,"Kejujuran membuat orang saling percaya."],
["Jika teman berbeda agama sedang beribadah, kita harus…",["Menghormati","Mengganggu","Menertawakan","Melarang"],0,"Menghormati orang lain menjaga kerukunan."],
["Contoh perilaku amanah adalah…",["Menjaga titipan","Mengambil barang","Ingkar janji","Menyalahkan teman"],0,"Amanah berarti dapat dipercaya."],
["Saat melakukan kesalahan, tindakan terbaik adalah…",["Mengakui dan memperbaiki","Berbohong","Kabur","Menyalahkan orang lain"],0,"Berani mengakui kesalahan adalah akhlak terpuji."],
["Berbagi bekal kepada teman yang membutuhkan menunjukkan…",["Kepedulian","Kesombongan","Kemalasan","Iri hati"],0,"Berbagi melatih kepedulian."],
["Mengapa kita perlu bersyukur?",["Menghargai nikmat yang diterima","Agar selalu dipuji","Supaya menang sendiri","Agar tidak belajar"],0,"Syukur dapat ditunjukkan dengan menggunakan nikmat untuk kebaikan."],
["Ketika mendapat tugas kelompok, sikap yang tepat adalah…",["Bekerja sama dan bertanggung jawab","Membiarkan teman","Bertengkar","Menyalin tanpa memahami"],0,"Kerja sama membantu tugas selesai dengan baik."],
["Jika menemukan barang milik teman, kita sebaiknya…",["Mengembalikan kepada pemilik/guru","Menyimpan diam-diam","Membuangnya","Menjualnya"],0,"Menjaga hak orang lain adalah perilaku terpuji."],
["Mengapa menjaga kebersihan lingkungan itu penting?",["Kebersihan mendukung kesehatan dan kenyamanan","Agar tidak perlu belajar","Supaya sampah menumpuk","Agar halaman licin"],0,"Menjaga kebersihan merupakan tanggung jawab bersama."]]},
matematika:{name:"Matematika",q:[
["Ada 4 kotak. Tiap kotak berisi 6 kelereng. Jumlah kelereng adalah…",["10","20","24","26"],2,"4 × 6 = 24."],
["Pola bilangan 5, 10, 15, 20, … berikutnya adalah…",["21","25","30","35"],1,"Pola bertambah 5."],
["Rani punya 36 stiker dan membaginya sama rata kepada 4 teman. Tiap teman mendapat…",["8","9","10","12"],1,"36 ÷ 4 = 9."],
["Persegi memiliki sisi 7 cm. Kelilingnya adalah…",["14 cm","21 cm","28 cm","49 cm"],2,"Keliling persegi = 4 × sisi."],
["Mana yang paling besar?",["0,4","0,04","0,44","0,14"],2,"0,44 paling besar."],
["Ada 125 bibit, 48 ditanam pagi hari dan 37 sore hari. Sisa bibit adalah…",["30","40","50","60"],1,"125 − 48 − 37 = 40."],
["Sebuah kegiatan mulai pukul 08.15 dan berlangsung 90 menit. Kegiatan selesai pukul…",["09.15","09.30","09.45","10.00"],2,"90 menit = 1 jam 30 menit."],
["Dari 20 siswa, 5 memilih buku sains. Pecahan siswa itu adalah…",["1/2","1/4","1/5","1/10"],1,"5/20 disederhanakan menjadi 1/4."],
["Harga 3 pensil Rp6.000. Jika harga setiap pensil sama, 5 pensil berharga…",["Rp8.000","Rp9.000","Rp10.000","Rp12.000"],2,"Satu pensil Rp2.000, jadi lima Rp10.000."],
["Taman berbentuk persegi panjang panjang 8 m dan lebar 3 m. Luasnya…",["11 m²","22 m²","24 m²","32 m²"],2,"Luas = panjang × lebar."]]},
indonesia:{name:"Bahasa Indonesia",q:[
["Kalimat yang paling tepat untuk mengajak menjaga hutan adalah…",["Ayo rawat hutan bersama!","Hutan itu hijau.","Pohon tinggi sekali.","Kemarin ada hujan."],0,"Kalimat ajakan menggunakan kata seperti ayo atau mari."],
["Gagasan utama paragraf biasanya berisi…",["Pokok pembahasan","Nama penulis saja","Tanda baca","Jumlah kalimat"],0,"Gagasan utama adalah inti paragraf."],
["Sinonim kata 'lestari' adalah…",["Terjaga","Rusak","Hilang","Kotor"],0,"Lestari berarti tetap terjaga."],
["Kalimat tanya yang tepat diakhiri tanda…",["Titik","Koma","Tanya","Seru"],2,"Kalimat tanya diakhiri tanda tanya."],
["Bacaan: 'Dina menyiram bibit setiap pagi. Bibit tumbuh subur.' Kesimpulan yang tepat…",["Merawat tanaman membantu pertumbuhannya","Tanaman tidak perlu air","Dina merusak tanaman","Bibit tumbuh tanpa perawatan"],0,"Perawatan yang baik membantu tanaman tumbuh."],
["Kata baku yang tepat adalah…",["Aktifitas","Aktivitas","Aktipitas","Aktifitaz"],1,"Bentuk bakunya adalah aktivitas."],
["Kalimat majemuk setara adalah…",["Budi membaca dan Siti menggambar","Budi yang rajin","Buku tebal itu","Di bawah pohon"],0,"Dua klausa setara dapat dihubungkan dengan 'dan'."],
["Tujuan membuat poster hemat air adalah…",["Mengajak orang menghemat air","Menceritakan liburan","Menulis daftar nilai","Menghitung luas"],0,"Poster menyampaikan pesan singkat dengan menarik."],
["Antonim kata 'hemat' adalah…",["Cermat","Boros","Irit","Teliti"],1,"Boros berlawanan makna dengan hemat."],
["Saat menyampaikan pendapat, sebaiknya kita…",["Santun dan disertai alasan","Berteriak","Memotong pembicaraan","Mengejek"],0,"Pendapat yang santun lebih mudah dipahami."]]},
pancasila:{name:"Pendidikan Pancasila",q:[
["Teman berbeda pendapat saat diskusi. Sikap terbaik adalah…",["Mendengarkan lalu bermusyawarah","Memaksakan kehendak","Meninggalkan kelompok","Mengejek"],0,"Musyawarah menghargai pendapat bersama."],
["Contoh gotong royong di sekolah adalah…",["Membersihkan kelas bersama","Mengerjakan semua sendiri","Menyembunyikan alat","Membuang sampah sembarangan"],0,"Gotong royong dilakukan dengan saling membantu."],
["Memilih ketua kelas secara adil mencerminkan nilai…",["Musyawarah dan demokrasi","Keserakahan","Permusuhan","Ketidakpedulian"],0,"Pemilihan yang adil menghargai suara teman."],
["Saat melihat teman dikucilkan, kita sebaiknya…",["Mengajak berteman dan melapor jika perlu","Ikut mengucilkan","Merekam untuk ditertawakan","Diam sambil mengejek"],0,"Menghargai martabat setiap orang penting."],
["Aturan dibuat di kelas agar…",["Kegiatan tertib dan aman","Semua takut","Tidak ada yang bertanya","Hanya ketua yang bekerja"],0,"Aturan membantu semua orang belajar dengan nyaman."],
["Sikap adil saat membagi alat gambar adalah…",["Membagi sesuai kebutuhan secara merata","Mengambil semua","Memberi hanya kepada sahabat","Menyembunyikan alat"],0,"Adil berarti memperhatikan hak dan kebutuhan."],
["Menghormati budaya daerah lain menunjukkan…",["Persatuan dalam keberagaman","Keinginan berpisah","Sikap merendahkan","Persaingan tidak sehat"],0,"Keberagaman memperkaya bangsa."],
["Jika keputusan kelompok tidak sesuai keinginan kita, kita sebaiknya…",["Menerima hasil musyawarah dan tetap bekerja sama","Merusak hasil kerja","Memarahi semua teman","Keluar tanpa alasan"],0,"Kesepakatan perlu dihormati."],
["Contoh tanggung jawab sebagai siswa adalah…",["Menyelesaikan tugas","Menyalahkan teman","Merusak fasilitas","Datang sesuka hati"],0,"Tanggung jawab berarti melaksanakan kewajiban."],
["Mengapa hak dan kewajiban perlu seimbang?",["Agar kehidupan bersama berjalan tertib","Agar hanya hak yang dipenuhi","Agar tidak ada aturan","Agar tugas diabaikan"],0,"Hak dan kewajiban saling berkaitan."]]},
ipas:{name:"IPAS",q:[
["Mengapa tanaman di tempat gelap tumbuh kurang baik?",["Kurang mendapat cahaya untuk fotosintesis","Terlalu banyak suara","Tidak bisa bernapas sama sekali","Tanah berubah menjadi air"],0,"Cahaya dibutuhkan dalam fotosintesis."],
["Sampah plastik di sungai dapat menyebabkan…",["Aliran tersumbat dan makhluk hidup terganggu","Air selalu lebih bersih","Ikan bertambah sehat","Banjir pasti berhenti"],0,"Sampah dapat menyumbat aliran dan mencemari air."],
["Benda yang dapat ditarik magnet adalah…",["Paku besi","Kertas","Kayu","Karet"],0,"Besi termasuk bahan yang ditarik magnet."],
["Air menguap lebih cepat ketika…",["Terkena panas matahari","Disimpan di freezer","Diletakkan di tempat sangat dingin","Ditutup rapat tanpa panas"],0,"Panas membantu penguapan."],
["Jika banyak pohon ditebang di lereng, risiko yang meningkat adalah…",["Longsor dan banjir","Udara makin bersih","Tanah makin kuat selamanya","Hujan berhenti"],0,"Akar membantu mengikat tanah."],
["Sumber energi terbarukan adalah…",["Matahari","Batu bara","Minyak bumi","Bensin"],0,"Energi matahari dapat diperbarui secara alami."],
["Dalam rantai makanan rumput → belalang → katak, belalang berperan sebagai…",["Konsumen tingkat pertama","Produsen","Pengurai","Konsumen puncak"],0,"Belalang memakan produsen yaitu rumput."],
["Mengapa kita perlu mencatat hasil percobaan?",["Agar dapat dibandingkan dan diperiksa","Agar hasil bisa diubah sesuka hati","Supaya tidak perlu mengamati","Agar teman bingung"],0,"Catatan membantu menarik kesimpulan berdasarkan bukti."],
["Bayangan benda menjadi lebih pendek ketika matahari…",["Lebih tinggi di langit","Tepat di bawah tanah","Tidak bersinar","Berada di malam hari"],0,"Posisi matahari memengaruhi panjang bayangan."],
["Cara mengurangi penggunaan air bersih adalah…",["Mematikan keran saat tidak dipakai","Membiarkan keran terbuka","Mencuci satu benda berulang kali","Membuang air minum"],0,"Menghemat air menjaga ketersediaannya."]]},
jawa:{name:"Bahasa Jawa",q:[
["Tegese tembung 'resik' yaiku…",["Bersih","Reged","Gedhe","Adoh"],0,"Resik tegese bersih."],
["Ukara sing sopan kanggo njaluk tulung yaiku…",["Tulung, bisa nyilih potlot?","Menehi saiki!","Kowe kudu manut!","Aja nyedhak!"],0,"Tembung 'tulung' bisa digunakake kanthi sopan."],
["Tembung kosok balen saka 'gedhe' yaiku…",["Cilik","Dawa","Dhuwur","Akeh"],0,"Gedhe kosok balene cilik."],
["Yen kanca tiba, tumindak becik yaiku…",["Nulungi kanca","Ngguyu banter","Ninggal lunga","Nyoraki"],0,"Nulungi kanca nuduhake rasa peduli."],
["'Matur nuwun' diucapake nalika…",["Nampa pitulungan","Nesu","Arep turu","Lali tugas"],0,"Matur nuwun tegese berterima kasih."],
["Tembung 'banyu' ing basa Indonesia yaiku…",["Air","Api","Tanah","Angin"],0,"Banyu tegese air."],
["Yen rembugan karo wong tuwa, becike nganggo basa sing…",["Sopan","Kasar","Ngece","Ora cetha"],0,"Tata krama penting nalika ngomong."],
["'Ayo padha nandur wit!' kalebu ukara…",["Pangajak","Pitakon","Prentah kasar","Pawarta sedih"],0,"Tembung 'ayo' nuduhake ajakan."],
["Tembung sing trep kanggo njaga lingkungan yaiku…",["Aja mbuwang sampah sembarangan","Ayo ngrusak wit","Banyu dibuwang wae","Kelas dikotori"],0,"Ukara kasebut ngajak tumindak becik."],
["Nalika kanca ngomong, kita becike…",["Ngrungokake kanthi becik","Nyelani terus","Ngguyu","Mlayu"],0,"Ngrungokake nuduhake rasa ngajeni."]]},
inggris:{name:"Bahasa Inggris",q:[
["What is the English word for 'pohon'?",["Tree","Book","Chair","Fish"],0,"Pohon dalam bahasa Inggris adalah tree."],
["Choose the polite expression to ask for help.",["Could you help me, please?","Give it now!","Go away!","Be quiet!"],0,"Please membuat permintaan lebih sopan."],
["'I have two ___' (books).",["book","books","booking","bookes"],1,"Kata benda jamak biasanya memakai -s."],
["What should you say after someone helps you?",["Thank you","Good night only","I am angry","Never mind you"],0,"Thank you berarti terima kasih."],
["Which one is an animal?",["Butterfly","Pencil","Window","River"],0,"Butterfly berarti kupu-kupu."],
["Complete: The sun ___ in the east.",["rise","rises","rising","are rise"],1,"Untuk he/she/it pada simple present, kata kerja biasanya memakai -s."],
["'Clean the classroom' means…",["Bersihkan kelas","Buka jendela","Baca buku","Tutup tas"],0,"Clean berarti membersihkan."],
["Which sentence is an invitation?",["Let's plant a tree!","The tree is tall.","I have a pen.","It is Monday."],0,"Let's digunakan untuk mengajak."],
["Choose the opposite of 'big'.",["Small","Tall","Long","Fast"],0,"Small berarti kecil."],
["A friend says 'I'm sad.' A kind response is…",["Are you okay? Can I help?","That's silly!","Go away!","I don't care!"],0,"Respons empatik menunjukkan kepedulian."]]},
pjok:{name:"PJOK",q:[
["Sebelum berolahraga, kita sebaiknya melakukan…",["Pemanasan","Langsung berlari secepatnya","Duduk lama","Makan sebanyak-banyaknya"],0,"Pemanasan menyiapkan tubuh untuk bergerak."],
["Agar tubuh bugar, kita perlu…",["Bergerak aktif dan istirahat cukup","Duduk sepanjang hari","Tidak minum air","Tidur sangat larut"],0,"Kebugaran didukung aktivitas, makan, dan istirahat."],
["Saat bermain beregu, sikap yang baik adalah…",["Bekerja sama dan sportif","Menyalahkan teman","Melanggar aturan","Menolak bergiliran"],0,"Sportivitas berarti menghormati aturan dan pemain lain."],
["Ketika merasa haus setelah olahraga, kita sebaiknya…",["Minum air secukupnya","Menghindari minum","Minum minuman apa saja berlebihan","Terus berlari tanpa jeda"],0,"Air membantu mengganti cairan tubuh."],
["Jika teman terjatuh saat permainan, kita perlu…",["Menghentikan permainan dan membantu/memanggil guru","Mendorongnya","Menertawakan","Meninggalkannya"],0,"Keselamatan harus diutamakan."],
["Gerak berpindah tempat disebut gerak…",["Lokomotor","Nonlokomotor","Diam","Manipulatif saja"],0,"Berjalan dan berlari adalah gerak lokomotor."],
["Contoh menjaga kebersihan diri adalah…",["Mencuci tangan dengan sabun","Memakai baju basah seharian","Tidak mandi","Berbagi handuk kotor"],0,"Cuci tangan membantu mencegah penyebaran kuman."],
["Mengapa kita perlu mematuhi aturan permainan?",["Agar aman dan adil","Agar permainan kacau","Supaya satu orang selalu menang","Agar tidak bergerak"],0,"Aturan menjaga keselamatan dan keadilan."],
["Saat berlari, sepatu yang sesuai membantu…",["Mengurangi risiko terpeleset","Membuat lantai licin","Menghilangkan kebutuhan pemanasan","Membuat kita tidak perlu hati-hati"],0,"Perlengkapan yang sesuai membantu keselamatan."],
["Jika tubuh terasa sangat lelah, sebaiknya…",["Beristirahat dan memberi tahu guru","Memaksa terus bermain","Tidak boleh minum","Menyembunyikan keadaan"],0,"Kenali kondisi tubuh dan utamakan keselamatan."]]},
koding:{name:"Koding dan Kecerdasan Artifisial",q:[
["Urutan instruksi yang benar untuk membuat teh adalah…",["Siapkan alat, masukkan teh, tuang air, aduk","Aduk, minum, baru cari gelas","Tuang air sebelum ada wadah","Acak semua langkah"],0,"Algoritma adalah urutan langkah yang logis."],
["Jika karakter bergerak 2 langkah setiap perintah dan perintah diulang 3 kali, total langkah…",["5","6","8","9"],1,"2 × 3 = 6 langkah."],
["Memecah masalah besar menjadi bagian kecil disebut…",["Dekomposisi","Menghapus data","Menebak","Menggambar saja"],0,"Dekomposisi membuat masalah lebih mudah dikelola."],
["Pola: merah, biru, merah, biru, … warna berikutnya…",["Merah","Hijau","Kuning","Hitam"],0,"Pola bergantian merah dan biru."],
["Jika robot harus berhenti saat ada halangan, instruksi yang tepat adalah…",["Jika ada halangan, berhenti","Selalu maju tanpa melihat","Matikan semua aturan","Belok secara acak"],0,"Kondisi membantu program mengambil keputusan."],
["Informasi pribadi yang tidak boleh dibagikan sembarangan adalah…",["Kata sandi","Warna kesukaan","Nama hewan fiksi","Judul buku"],0,"Kata sandi harus dijaga."],
["AI mengenali gambar berdasarkan…",["Pola dari contoh/data","Perasaan manusia","Sihir","Tanpa informasi apa pun"],0,"AI mempelajari pola dari data, dan hasilnya bisa keliru."],
["Saat jawaban AI terasa salah, kita sebaiknya…",["Memeriksa dengan sumber tepercaya","Langsung percaya","Menyebarkan tanpa cek","Menghapus semua buku"],0,"Jawaban AI perlu diperiksa."],
["Perintah 'ulangi 4 kali: maju 1 langkah' menghasilkan…",["4 langkah maju","1 langkah maju","5 langkah maju","Tidak bergerak"],0,"Perulangan menjalankan instruksi berulang."],
["Mengapa kita menguji program setelah dibuat?",["Untuk menemukan dan memperbaiki kesalahan","Agar program tampak panjang","Supaya tidak dipakai","Agar hasil selalu dirahasiakan"],0,"Pengujian membantu menemukan bug."]]},
seni:{name:"Seni Rupa",q:[
["Warna primer dalam pembelajaran seni rupa biasanya adalah…",["Merah, kuning, biru","Hijau, jingga, ungu","Hitam, putih, abu-abu","Cokelat, merah muda, emas"],0,"Merah, kuning, dan biru sering diajarkan sebagai warna primer."],
["Kolase dibuat dengan cara…",["Menempelkan berbagai bahan pada bidang","Hanya mengukir batu","Meniup kaca","Menyanyi"],0,"Kolase menggabungkan bahan yang ditempel."],
["Agar poster mudah dibaca, kita sebaiknya…",["Memakai tulisan jelas dan kontras","Memenuhi semua ruang dengan tulisan kecil","Memakai warna yang sama untuk teks dan latar","Membuat pesan tersembunyi"],0,"Keterbacaan membantu pesan tersampaikan."],
["Garis, bentuk, warna, dan tekstur adalah…",["Unsur seni rupa","Alat olahraga","Jenis kalimat","Bahan makanan"],0,"Unsur seni rupa digunakan untuk menyusun karya."],
["Saat membuat karya dari barang bekas, tindakan baik adalah…",["Memilih bahan bersih dan aman","Memakai bahan tajam sembarangan","Membuang sisa ke sungai","Mengambil barang milik teman"],0,"Gunakan bahan yang aman dan bertanggung jawab."],
["Campuran warna kuning dan biru menghasilkan…",["Hijau","Ungu","Merah","Hitam"],0,"Kuning dan biru menghasilkan hijau."],
["Keseimbangan dalam gambar berarti…",["Susunan unsur terasa stabil","Semua benda harus sama besar","Tidak boleh ada warna","Gambar harus kosong"],0,"Keseimbangan membuat komposisi terasa stabil."],
["Sebelum menggambar rancangan, kita dapat membuat…",["Sketsa","Laporan nilai","Jadwal tidur","Peta suara"],0,"Sketsa membantu merencanakan bentuk."],
["Karya seni yang menampilkan benda seolah memiliki panjang, lebar, dan tinggi disebut…",["Karya tiga dimensi","Karya satu dimensi","Nada musik","Kalimat"],0,"Karya 3D memiliki volume."],
["Saat memberi tanggapan terhadap karya teman, kita sebaiknya…",["Santun dan memberi saran membangun","Mengejek hasilnya","Merusak karya","Membandingkan untuk mempermalukan"],0,"Apresiasi disampaikan dengan hormat."]]}
};
const subjectNames = Object.fromEntries(Object.entries(subjects).map(([k,v])=>[k,v.name]));
let state={running:false,score:0,lives:3,answered:0,questionIndex:0,questions:[],paused:false,sound:true,grade:4,difficulty:"medium",mode:"solo",subject:"all",attackCooldown:0,enemySpawn:0};
let player={x:90,y:0,vx:0,vy:0,w:34,h:45,onGround:false,invuln:0,dir:1};
let enemies=[],particles=[],keys={},lastTime=0,swipeStart=null,quizOpen=false,answeredCurrent=false;
let W=900,H=430,ground=355,frame=0,audioCtx=null;

function resizeCanvas(){const r=canvas.getBoundingClientRect();const dpr=Math.min(window.devicePixelRatio||1,2);W=Math.max(320,r.width);H=Math.max(300,r.height);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);ground=H-65;if(player.y===0)player.y=ground-player.h;}
window.addEventListener("resize",resizeCanvas);
function playTone(freq=440,duration=.09,type="square",volume=.10){if(!state.sound)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration)}catch(e){}}
function sfx(kind){if(kind==="jump"){playTone(430,.08);setTimeout(()=>playTone(650,.1),50)}else if(kind==="hit"){playTone(190,.08,"sawtooth");setTimeout(()=>playTone(120,.12,"square"),50)}else if(kind==="correct"){playTone(523,.09);setTimeout(()=>playTone(659,.1),80);setTimeout(()=>playTone(784,.15),160)}else if(kind==="wrong"){playTone(220,.18,"triangle")}else{playTone(350,.08);setTimeout(()=>playTone(520,.12),70)}}
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1])}
function prepareQuestions(){let all=[];if(state.subject==="all"){Object.keys(subjects).forEach(k=>subjects[k].q.forEach((q,i)=>all.push({subject:k,question:q})));all=shuffle(all).slice(0,10)}else{all=shuffle(subjects[state.subject].q.map(q=>({subject:state.subject,question:q}))).slice(0,10)}state.questions=all;state.questionIndex=0;state.answered=0}
function startGame(){state.mode=$("mode").value;state.grade=+$("grade").value;state.difficulty=$("difficulty").value;state.subject=$("subject").value;state.score=0;state.lives=3;state.running=true;state.paused=false;state.enemySpawn=0;enemies=[];particles=[];player={x:80,y:0,vx:0,vy:0,w:34,h:45,onGround:false,invuln:0,dir:1};prepareQuestions();$("menu").classList.add("hidden");$("game").classList.remove("hidden");$("quiz").classList.add("hidden");$("endPanel").classList.add("hidden");$("score").textContent="0";$("lives").textContent="3";$("progress").textContent="0/10";$("gameLabel").textContent=`Kelas ${state.grade} • ${state.subject==="all"?"Semua Mapel":subjectNames[state.subject]}`;$("status").textContent=`Mode ${state.mode.toUpperCase()} • Cari alien!`;resizeCanvas();player.y=ground-player.h;spawnEnemy();lastTime=performance.now();requestAnimationFrame(loop);sfx("start")}
function goHome(){$("game").classList.add("hidden");$("menu").classList.remove("hidden");state.running=false}
function spawnEnemy(){if(enemies.length<4){const speed=state.difficulty==="easy"?0.65:state.difficulty==="hard"?1.65:1.05;enemies.push({x:W+Math.random()*100,y:ground-38,w:32,h:34,vx:-speed*(.7+Math.random()*.5),phase:Math.random()*6,attack:0,hp:1})}}
function jump(){if(!state.running||quizOpen)return;if(player.onGround){player.vy=state.difficulty==="hard"?-10.5:-12;player.onGround=false;sfx("jump")}}
function attack(targetX,targetY){if(!state.running||quizOpen||state.attackCooldown>0)return;state.attackCooldown=260;const nearest=enemies.filter(e=>Math.abs(e.x-player.x)<210).sort((a,b)=>Math.abs(a.x-player.x)-Math.abs(b.x-player.x))[0];particles.push({x:player.x+player.w/2,y:player.y+18,life:18,kind:"slash",tx:targetX??(nearest?nearest.x:player.x+player.dir*100),ty:targetY??(nearest?nearest.y+10:player.y+15)});if(nearest){nearest.hp=0;state.score+=10;$("score").textContent=state.score;sfx("hit");for(let i=0;i<8;i++)particles.push({x:nearest.x+15,y:nearest.y+15,life:20,kind:"spark",vx:(Math.random()-.5)*5,vy:(Math.random()-.5)*5});enemies=enemies.filter(e=>e.hp>0);setTimeout(openQuiz,260)}else{sfx("hit")}}
function openQuiz(){if(!state.running||quizOpen)return;if(state.answered>=10){finishGame();return}quizOpen=true;state.paused=true;answeredCurrent=false;const item=state.questions[state.questionIndex];const q=item.question;$("quizSubject").textContent=subjects[item.subject].name.toUpperCase();$("quizNumber").textContent=`Soal ${state.questionIndex+1}/10`;$("question").textContent=q[0];$("feedback").textContent="Pilih jawaban terbaik.";const answers=$("answers");answers.innerHTML="";q[1].forEach((ans,i)=>{const b=document.createElement("button");b.className="answer-btn";b.textContent=String.fromCharCode(65+i)+". "+ans;b.onclick=()=>answerQuestion(i,b);answers.appendChild(b)});$("nextQuestion").classList.add("hidden");$("quiz").classList.remove("hidden")}
function answerQuestion(index,button){if(answeredCurrent)return;answeredCurrent=true;const item=state.questions[state.questionIndex],q=item.question;[...$("answers").children].forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add("correct");if(i===index&&i!==q[2])b.classList.add("wrong")});if(index===q[2]){state.score+=10;$("score").textContent=state.score;$("feedback").textContent="Benar! "+q[3];$("feedback").style.color="#267d37";sfx("correct")}else{state.lives=Math.max(0,state.lives-1);$("lives").textContent=state.lives;$("feedback").textContent="Belum tepat. "+q[3];$("feedback").style.color="#b54e2c";sfx("wrong")}state.answered++;$("progress").textContent=`${state.answered}/10`;$("nextQuestion").classList.remove("hidden");$("nextQuestion").textContent=state.answered>=10?"Lihat Hasil 🏆":"Lanjutkan ▶"}
function nextQuestion(){if(state.answered>=10){finishGame();return}state.questionIndex++;quizOpen=false;state.paused=false;$("quiz").classList.add("hidden");if(enemies.length===0)spawnEnemy()}
function finishGame(){state.running=false;quizOpen=false;$("quiz").classList.add("hidden");$("endPanel").classList.remove("hidden");const msg=state.score>=80?"Luar biasa! Kamu penjaga hutan yang hebat.":state.score>=50?"Bagus! Terus berlatih dan coba lagi.":"Terima kasih sudah bermain! Coba lagi untuk meningkatkan skor."; $("endText").textContent=`Skor: ${state.score} • Jawaban selesai: ${state.answered}/10. ${msg}`}
function drawBackground(){const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,"#8ad9df");sky.addColorStop(.65,"#d5f0b0");sky.addColorStop(1,"#69b85c");ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);ctx.fillStyle="#fff1a3";ctx.beginPath();ctx.arc(W*.8,H*.18,30,0,Math.PI*2);ctx.fill();ctx.fillStyle="#8bc68b";for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(i*W/4-70,ground);ctx.lineTo(i*W/4+60,H*.28+(i%2)*45);ctx.lineTo(i*W/4+190,ground);ctx.fill()}for(let i=0;i<Math.ceil(W/90)+1;i++){const x=i*90-((frame*.25)%90);ctx.fillStyle="#795637";ctx.fillRect(x+26,ground-88,13,90);ctx.fillStyle=i%2?"#23854e":"#2e9658";ctx.beginPath();ctx.arc(x+32,ground-93,37,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x+9,ground-72,26,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x+54,ground-72,25,0,Math.PI*2);ctx.fill()}ctx.fillStyle="#4e9b49";ctx.fillRect(0,ground,W,H-ground);ctx.fillStyle="#8bcf5a";ctx.fillRect(0,ground,W,9);for(let i=0;i<W;i+=35){ctx.fillStyle="#367e3e";ctx.fillRect(i,ground+25+(i%3)*6,15,3)}}
function drawPlayer(){const x=player.x,y=player.y;ctx.save();ctx.translate(x+player.w/2,y+player.h/2);if(player.dir<0)ctx.scale(-1,1);ctx.fillStyle="#254a31";ctx.fillRect(-13,9,10,15);ctx.fillRect(3,9,10,15);ctx.fillStyle="#e95d36";ctx.fillRect(-16,-10,32,22);ctx.fillStyle="#f7c48b";ctx.fillRect(-11,-25,22,18);ctx.fillStyle="#2f6ec1";ctx.fillRect(-13,-31,26,8);ctx.fillStyle="#ef6338";ctx.fillRect(-14,-34,28,5);ctx.fillStyle="#fff";ctx.fillRect(1,-21,5,5);ctx.fillStyle="#173e2c";ctx.fillRect(4,-20,2,3);ctx.restore();if(player.invuln>0&&Math.floor(frame/3)%2===0){ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.strokeRect(x-4,y-5,player.w+8,player.h+8)}}
function drawEnemy(e){const bob=Math.sin(frame*.12+e.phase)*4;ctx.save();ctx.translate(e.x,e.y+bob);ctx.fillStyle="#7e54c7";ctx.beginPath();ctx.ellipse(16,17,16,17,0,0,Math.PI*2);ctx.fill();ctx.fillStyle="#b9a0ff";ctx.beginPath();ctx.ellipse(16,7,11,8,0,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff";ctx.fillRect(7,11,7,8);ctx.fillRect(19,11,7,8);ctx.fillStyle="#222";ctx.fillRect(10,14,3,4);ctx.fillRect(22,14,3,4);ctx.strokeStyle="#43276b";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(6,29);ctx.lineTo(0,36);ctx.moveTo(26,29);ctx.lineTo(32,36);ctx.stroke();ctx.restore()}
function drawParticles(){particles.forEach(p=>{if(p.kind==="slash"){ctx.strokeStyle="#fff28a";ctx.lineWidth=7;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.quadraticCurveTo((p.x+p.tx)/2,p.y-55,p.tx,p.ty);ctx.stroke()}else{ctx.fillStyle="#fff18a";ctx.fillRect(p.x,p.y,5,5)}})}
function update(dt){if(!state.running||state.paused)return;const moveSpeed=state.difficulty==="hard"?4.2:3.6;let moving=false;if(keys.ArrowLeft||keys.a||keys.A||keys.left){player.vx=-moveSpeed;player.dir=-1;moving=true}else if(keys.ArrowRight||keys.d||keys.D||keys.right){player.vx=moveSpeed;player.dir=1;moving=true}else player.vx*=.72;if(moving)player.x+=player.vx*(dt/16.67);player.x=Math.max(5,Math.min(W-player.w-5,player.x));player.vy+=.58*(dt/16.67);player.y+=player.vy*(dt/16.67);if(player.y+player.h>=ground){player.y=ground-player.h;player.vy=0;player.onGround=true}if(player.invuln>0)player.invuln-=dt;if(state.attackCooldown>0)state.attackCooldown-=dt;enemies.forEach(e=>{e.x+=e.vx*(dt/16.67);e.attack+=dt;if(Math.abs(e.x-player.x)<30&&Math.abs(e.y-player.y)<35&&player.invuln<=0){state.lives--;player.invuln=1200;player.vy=-5;$("lives").textContent=state.lives;sfx("wrong");if(state.lives<=0)finishGame()}});enemies=enemies.filter(e=>e.x>-80);state.enemySpawn+=dt;if(enemies.length<2&&state.enemySpawn>1800){spawnEnemy();state.enemySpawn=0}particles.forEach(p=>{p.life--;if(p.kind==="spark"){p.x+=p.vx;p.y+=p.vy}});particles=particles.filter(p=>p.life>0)}
function loop(now){if(!state.running)return;const dt=Math.min(40,now-(lastTime||now));lastTime=now;frame++;update(dt);drawBackground();enemies.forEach(drawEnemy);drawPlayer();drawParticles();if(state.running)requestAnimationFrame(loop)}
function setKey(k,v){keys[k]=v}
["leftBtn","rightBtn"].forEach(id=>{const key=id==="leftBtn"?"left":"right",el=$(id);el.addEventListener("pointerdown",e=>{e.preventDefault();setKey(key,true);el.setPointerCapture?.(e.pointerId)});["pointerup","pointercancel","pointerleave"].forEach(ev=>el.addEventListener(ev,()=>setKey(key,false)))});
$("jumpBtn").addEventListener("pointerdown",e=>{e.preventDefault();jump()});$("attackBtn").addEventListener("pointerdown",e=>{e.preventDefault();attack()});
window.addEventListener("keydown",e=>{if(["ArrowLeft","ArrowRight","ArrowUp"," "].includes(e.key))e.preventDefault();setKey(e.key,true);if(e.key===" "||e.key==="ArrowUp"||e.key==="w"||e.key==="W")jump();if(e.key==="Enter"&&answeredCurrent)nextQuestion()});
window.addEventListener("keyup",e=>setKey(e.key,false));
canvas.addEventListener("pointerdown",e=>{swipeStart={x:e.offsetX,y:e.offsetY};canvas.setPointerCapture?.(e.pointerId)});
canvas.addEventListener("pointerup",e=>{if(!swipeStart)return;const dx=e.offsetX-swipeStart.x,dy=e.offsetY-swipeStart.y;if(Math.hypot(dx,dy)>18){attack(e.offsetX,e.offsetY)}else if(e.pointerType==="mouse"){attack(e.offsetX,e.offsetY)}swipeStart=null});
$("startBtn").addEventListener("click",startGame);$("homeBtn").addEventListener("click",goHome);$("endHomeBtn").addEventListener("click",goHome);$("replayBtn").addEventListener("click",startGame);$("nextQuestion").addEventListener("click",nextQuestion);
$("soundBtn").addEventListener("click",()=>{state.sound=!state.sound;$("soundBtn").textContent=state.sound?"🔊 Suara":"🔇 Suara";if(state.sound)sfx("start")});
resizeCanvas();