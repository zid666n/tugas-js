const jurusan = [
    {value: "web", name: "Junior Web Dev"},
    {value: "tkj", name: "Teknik Jaringan"},
    {value: "tekom", name: "Teknik Komputer"},
    {value: "mobile", name: "Mobile Apps"}
]

const peserta = [
    {
        id: 1,
        nama: "Zidan",
        jurusan: "web"
    },
    {
        id: 2,
        nama: "Laras",
        jurusan: "mobile"
    },
    {
        id: 3,
        nama: "Rudi",
        jurusan: "tekom"
    },
    {
        id: 4,
        nama: "Wawan",
        jurusan: "tekom"
    },
    {
        id: 5,
        nama: "Jukandi",
        jurusan: "tkj"
    }
]

const filterJurusan = document.getElementById("filterJurusan")
const listPeserta = document.getElementById("listPeserta")
const cariPeserta = document.getElementById("cariPeserta")

const createPeserta = (arrPeserta) => {
    arrPeserta.forEach(item => {
        const li = document.createElement("li")
        li.innerText = `No. ${item.id} ${item.nama} - Jurusan: ${item.jurusan}`

        listPeserta.appendChild(li)
    })
}

const findPeserta = () => {
    const keyword = cariPeserta.value
    const valJurusan = filterJurusan.value

    listPeserta.innerHTML = ""  

    const result = peserta.filter(data => {
        const matchName = data.nama.toLowerCase().includes(keyword)
        const matchMajor = valJurusan === "semua" || data.jurusan === valJurusan

        return matchName && matchMajor
    })

    createPeserta(result)

}

createPeserta(peserta)

jurusan.forEach(item => {
    const opt = document.createElement("option")
    opt.setAttribute("value", item.value)
    opt.innerText = item.name

    filterJurusan.appendChild(opt)
})

// filterJurusan.addEventListener("change", (e) => {
//     const jurusan = e.target.value
//     listPeserta.innerHTML = ""

//     if (jurusan !== "semua") {
//         const filteredPeserta = peserta.filter(item => item.jurusan === jurusan)
//         createPeserta(filteredPeserta)
//     } else {
//         createPeserta(peserta)
//     }
// })

filterJurusan.addEventListener("change", findPeserta)
cariPeserta.addEventListener("input", findPeserta)