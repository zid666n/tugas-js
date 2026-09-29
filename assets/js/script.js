const modul = document.getElementById("modul")
const isiModul = document.createElement("p")

isiModul.innerText = "Laravel adalah framework PHP"

modul.appendChild(isiModul)

const isiList = [
    "1.00001.001.01 - Mengimplementasi User Interface",
    "1.00001.001.02 - Melakukan Instalasi Software Tools Pemrograman"
]

const ul = document.createElement("ul")
isiList.forEach(item => {
    const li = document.createElement("li")
    li.innerText = item

    li.style.marginBottom = "4px"

    ul.appendChild(li)
})

modul.appendChild(ul)