// Tipe data string
let nama = "Fathur";
console.log("Nama:", nama);
alert("Nama: " + nama);

// Tipe data number
let usia = 20;
console.log("Usia:", usia);
alert("Usia: " + usia);

// Tipe data boolean
let isMahasiswa = true;
console.log("Apakah Mahasiswa:", isMahasiswa);
alert("Apakah Mahasiswa: " + isMahasiswa);

// Tipe data array
let hobi = ["Badminton", "Berenang", "Design"];
console.log("Hobi:", hobi);
alert("Hobi: " + hobi.join(", "));

// Tipe data object
let orang = {
    nama: "Fathurrobbany",
    usia: 20,
    hobi: ["Sama", "Kek tadi"]
};
console.log("Objek Orang:", orang);
alert("Objek Orang: " + JSON.stringify(orang));

// Tipe data null
let tidakAdaData = null;
console.log("Tidak Ada Data:", tidakAdaData);
alert("Tidak Ada Data: " + tidakAdaData);

// Tipe data undefined
let belumDidefinisikan;
console.log("Belum Didefinisikan:", belumDidefinisikan);
alert("Belum Didefinisikan: " + belumDidefinisikan);