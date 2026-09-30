const jurusan = document.getElementById("jurusan")
const hasil = document.getElementById("hasil")

jurusan.addEventListener("change", (e) => {
    const jurusanTerpilih = e.target.value

    hasil.innerText = jurusanTerpilih === "" ? "Silahkan pilih jurusan terlebih dahulu" : `Kamu sudah memilih jurusan ${jurusanTerpilih}`
})

const cekSyarat = document.getElementById("cekSyarat")
const btnDaftar = document.getElementById("btnDaftar")

cekSyarat.addEventListener("change", (e) => {
    if (e.target.checked) btnDaftar.disabled = false
    else btnDaftar.disabled = true
})