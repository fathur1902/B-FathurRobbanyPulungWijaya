function bagiDuaAngka() {
    // Mengambil nilai dari input
    const angka1 = document.getElementById("angka1").value;
    const angka2 = document.getElementById("angka2").value;
    const hasilDivisi = document.getElementById("hasil");

    try {
        // Memastikan input adalah angka
        if (isNaN(angka1) || isNaN(angka2)) {
            throw new Error("Input harus berupa angka.");
        }

        // Mengkonversi input ke angka
        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);

        // Memastikan pembagi tidak nol
        if (num2 === 0) {
            throw new Error("Pembagi tidak boleh nol.");
        }

        // Melakukan pembagian
        const hasil = num1 / num2;
        hasilDivisi.textContent = "Hasil: " + hasil;
    } catch (error) {
        hasilDivisi.textContent = "Kesalahan: " + error.message;
    }
}