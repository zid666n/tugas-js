import { useEffect, useState } from "react"

const FormPeserta = ({onSimpan, selectedPeserta}) => {
    const [nama, setNama] = useState("")
    const [jurusan, setJurusan] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        if (selectedPeserta) {
            setNama(selectedPeserta.nama)
            setJurusan(selectedPeserta.jurusan)
        } else {
            setNama("")
            setJurusan("")
        }
    }, [selectedPeserta])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!nama && !jurusan) {
            setError("Mohon isi nama dan jurusan")
            return
        }

        onSimpan({
            id: selectedPeserta ? selectedPeserta.id : Date.now(),
            nama,
            jurusan
        })
        
        setNama("")
        setJurusan("")
    }

    return (
        <form method="post" onSubmit={handleSubmit} style={{
            background: "#F5F6F7F8",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "20px"
        }}>
            <h3>Tambah Peserta</h3>
            <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap"
            }}></div>

            <input type="text" placeholder="Nama Peserta" onChange={(e) => setNama(e.target.value)} value={nama} />
            <input type="text" placeholder="Jurusan" onChange={(e) => setJurusan(e.target.value)} value={jurusan} />

            <button type="submit" style={{
                background: "#086def",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "8px 16px"
            }}>Simpan</button>
            {error && (<span>{error}</span>)}
            
            
        </form>
    )
}

export default FormPeserta