import { useEffect, useState } from 'react'
import DataPeserta from './components/DataPeserta'
import { peserta } from './components/peserta'
import FormPeserta from './components/FormPeserta'

function App() {
  const [listPeserta, setListPeserta] = useState(peserta)
  const [selectedPeserta, setSelectedPeserta] = useState(null)

  const addPeserta = ({id, nama, jurusan}) => {

    console.log(selectedPeserta)

    if (selectedPeserta) {
      setListPeserta(listPeserta.map(item => item.id === id ? {id: id, nama: nama, jurusan: jurusan} : item))

      setSelectedPeserta(null)
    } else {
      setListPeserta(prev => [...prev, {id: id, nama: nama, jurusan: jurusan}])
    }
  }
  const selectPeserta = ({id, nama, jurusan}) => setSelectedPeserta({
    id: id,
    nama: nama,
    jurusan: jurusan
  })
  
  const removePeserta = (id) => setListPeserta(listPeserta.filter(item => item.id !== id))

  return (
    <>
      <FormPeserta onSimpan={addPeserta} selectedPeserta={selectedPeserta}/>

      {listPeserta.map(dataSiswa => (
        <DataPeserta 
          key={dataSiswa.id}
          id={dataSiswa.id}
          nama={dataSiswa.nama}
          jurusan={dataSiswa.jurusan}
          onHapus={removePeserta}
          onSelectEdit={selectPeserta}
        />
      ))}
    </>
  )
}

export default App
