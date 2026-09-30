const taskField = document.getElementById("task")
const btnTambah = document.getElementById("tambah")
const ul = document.getElementById("tasks")
const btnReset = document.getElementById("reset")

const removeTask = (e) => {
    if (e.target.nodeName === "BUTTON") {
        const li = e.target.parentNode

        li.remove()
    }
}

const addTask = () => {
    const taskVal = taskField.value

    if (taskVal) {
        const li = document.createElement("li")

        li.innerHTML = `
            <span>${taskVal}</span>
            <button>Hapus</button>
        `
        
        ul.appendChild(li)
        taskField.value = ""

        return
    }

    alert("Task tidak boleh kosong.")
}

ul.addEventListener("click", removeTask)
btnTambah.addEventListener("click", () => addTask())
taskField.addEventListener("keyup", (e) => e.key === "Enter" && addTask())
btnReset.addEventListener("click", () => {
    ul.childNodes.forEach(li => {
        li.remove()
    })
})