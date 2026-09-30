const kirim = document.getElementById("simpan")
const nama = document.getElementById("nama")
const sapaan = document.getElementById("sapaan")
const reset = document.getElementById("reset")

function prosesSapaan() {
    sapaan.innerText = `Halo nama: ${nama.value}`

    nama.value = ""
}

kirim.addEventListener("click", () => prosesSapaan())

nama.addEventListener("keyup", (e) => e.key === "Enter" && prosesSapaan())

reset.addEventListener("click", () => {
    nama.value = ""
    sapaan.innerText = "Halo nama: "
})