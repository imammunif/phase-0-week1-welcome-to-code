// Soal 1 - Game Proxytia
// -------------------------------------------------------------
// Algoritma:
// 1. Inisialisasi variabel `nama` dan `peran` bertipe string.
// 2. Cek apakah variabel `nama` bernilai string kosong (""):
//    - Jika kosong, tampilkan pesan: "nama wajib diisi".
// 3. Jika `nama` terisi, cek apakah variabel `peran` bernilai string kosong (""):
//    - Jika kosong, tampilkan pesan: "Pilih Peranmu untuk memulai game".
// 4. Jika `nama` dan `peran` keduanya terisi, lakukan percabangan berdasarkan nilai `peran`:
//    - Jika `peran` adalah "Ksatria", tampilkan: `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
//    - Jika `peran` adalah "Tabib", tampilkan: `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`
//    - Jika `peran` adalah "Penyihir", tampilkan: `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
//    - Jika `peran` tidak cocok dengan peran di atas, tampilkan: "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
// -------------------------------------------------------------

let nama: string = "";
let peran: string = "Ksatria";

if (nama === "") {
    console.log("nama wajib diisi");
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    if (peran === "Ksatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    } else if (peran === "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}