/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skrip app.js berhasil terhubung");




// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI = "DuaArah Coffe";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let namaKasir = "Kak Eko";
let shiftKerja = "Pagi";
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Kedai : " + NAMA_KEDAI); 
console.log("Kasir   : " + namaKasir); 
console.log("Shift    : " + shiftKerja); 




// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
namaKasir = "Kak Tia";
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Kasir   : " + namaKasir); 




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang di DuaArah Coffe semoga harimu menyenangkan!");
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let namaPelanggan = prompt ("Halo!! Masukkan namamu untuk melakukan pemesanan");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if (namaPelanggan) {
    alert("Halo, " + namaPelanggan + "!Selamat Datang di DuaArah Coffe.");
    console.log("Member Aktif: " + namaPelanggan);
} else {
    alert("Kamu tidak memasukan nama. Kamu akan dipanggil Pelanggan Setia");
    namaPelanggan = "Pelanggan Setia";
    console.log("Member Aktif: " + namaPelanggan);
}





// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let totalPoin = poinKopi + poinMakanan + poinMerchandise;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== RINCIAN POIN " + namaPelanggan + " ===");
console.log("Kopi : " + poinKopi);
console.log("Makanan : " + poinMakanan);
console.log("Merchandise : " + poinMerchandise);
console.log("Total Poin : " + totalPoin);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let tierMember = "";
let benefit = "";
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
if (totalPoin >= 100){
    tierMember = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70){
    tierMember = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40){
    tierMember = "Silver"; 
    benefit = "Diskon 5% untuk menu minuman";
} else {
    tierMember = "Bronze"; 
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}
// 3. Cetak hasil tierMember dan benefit ke Console.
console.log ("tierMember : " + tierMember + "___" + benefit);
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert (
    "nama" + namaPelanggan + ":\n" + 
    "total poin" + totalPoin + ":\n" + 
    "tier" + tierMember + ":\n" + 
    "benefit" + benefit + ":\n"
);




// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
function hitungTotalPoin(p1, p2, p3) {
    let jumlah = p1 + p2 + p3;    
    return jumlah ; 
} 
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
let total = hitungTotalPoin(45, 35, 20);




// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function tentukanTierMember(poin) {
    if(poin >= 100) return "Platinum";
    if(poin >= 70) return "Gold";
    if(poin >= 40) return "Silver";
    return "Bronze";
}




// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
let totalPoinB = hitungTotalPoin (35, 25, 20);
let tierMemberB = tentukanTierMember (totalPoinB);
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
let totalPoinC = hitungTotalPoin (15, 10, 5);
let tierMemberC = tentukanTierMember (totalPoinC); 
// 3. Cetak data Pelanggan B dan C ke tab Console.
console.log ("=== DATA PELANGGAN B ===");
console.log("Total Poin : " + totalPoinB); 
console.log("Tiermember  : " + tierMemberB); 
console.log ("=== DATA PELANGGAN C ===");
console.log("Total Poin : " + totalPoinC); 
console.log("Tiermember  : " + tierMemberC);




