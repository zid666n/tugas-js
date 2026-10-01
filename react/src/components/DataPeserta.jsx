const DataPeserta = ({id, nama, jurusan, onHapus, onSelectEdit}) => {
    return (
        <>
            <div 
            key={id}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                margin: "8px",
                boxShadow: "0 0px 2px #000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div>
                    <h4 style={{
                        margin: "0 0 8px 0",
                        fontSize: "18px"
                    }}>Nama: {nama}</h4>
                    <p>Jurusan: {jurusan}</p>
                </div>

            </div>

            <div style={{
                display: 'flex',
                gap: '8px',
                margin: '20px 20px 30px 20px'
            }}>
                <button onClick={() => onSelectEdit({id: id, nama: nama, jurusan: jurusan})}>Edit</button>
                <button onClick={() => onHapus(id)}>Hapus</button>
            </div>
        </>
    )
}

export default DataPeserta