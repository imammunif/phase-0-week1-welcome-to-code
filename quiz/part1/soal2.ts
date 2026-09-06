// Soal 2 - Format Tanggal menggunakan Switch Case
// -------------------------------------------------------------
// Algoritma:
// 1. Tentukan nilai variabel `tanggal` (antara 1 - 31).
// 2. Tentukan nilai variabel `bulan` (antara 1 - 12).
// 3. Tentukan nilai variabel `tahun` (antara 1900 - 2200).
// 4. Siapkan variabel penampung `namaBulan` berupa string.
// 5. Gunakan struktur percabangan `switch (bulan)` untuk mengonversi angka bulan (1 - 12)
//    menjadi nama bulan dalam bahasa Indonesia (Januari s.d. Desember).
// 6. Jika angka bulan tidak berada pada rentang 1 - 12, berikan nilai default "Bulan tidak valid".
// 7. Cetak hasil format tanggal ke konsol dengan format: `${tanggal} ${namaBulan} ${tahun}`.
// -------------------------------------------------------------

let tanggal: number = 12; // (1 - 31)
let bulan: number = 2;    // (1 - 12)
let tahun: number = 2001; // (1900 - 2200)

let namaBulan: string = "";

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid";
        break;
}

if (namaBulan === "Bulan tidak valid") {
    console.log(namaBulan);
} else {
    console.log(`${tanggal} ${namaBulan} ${tahun}`);
}
