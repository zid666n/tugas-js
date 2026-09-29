/**
 * Hitung belanjaan dan diskonnya
 * 
 * @param {number} total 
 * @param {boolean} member 
 */
const hitungBelanja = (total, member) => {
    let diskon = 0
    
    if (isMember && totalBelanja >= 500000) diskon = 0.5
    else if (totalBelanja >= 500000) diskon = 0.2
    else diskon = 0
    
    const potongan = totalBelanja * diskon
    const bayar = totalBelanja - potongan

    console.log(`
        Total belanjaan: ${bayar}
        Potongan harga : ${potongan}  
    `);
    
}

class ArrayOfObject
{
    /**
     * @type {{id: number, name: string, nilai: number}[]}
     */
    data = []

    /**
     * Inisialisasi array object
     * 
     * @constructor
     */
    constructor ()
    {
        this.data = [
            {
                id: 1,
                name: "Ahmad",
                nilai: 65
            },
            {
                id: 2,
                name: "Zidan",
                nilai: 80
            },
            {
                id: 3,
                name: "Gibran",
                nilai: 30
            }
        ]
    }
    
    /**
     * Tambah data dari awal index
     * 
     * @param {{id: number, name: string}} peserta 
     */
    tambahDataDariAwal(peserta) {
        this.data.unshift(peserta)
    }

    /**
     * Tambah data dari akhir index
     * 
     * @param {{id: number, name: string}} peserta 
     */
    tambahDataDariAkhir(peserta) {
        this.data.push(peserta)
    }

    /**
     * Tampilkan semua data dengan looping
     * 
     * @returns void
     */
    tampilkanData() {
        this.data.forEach((item) => {
            console.log(item);
        })
    }

    /**
     * Filter nilai lebih dari atau sama dengan 75
     * 
     * @returns {{id: number, name: string, nilai: number}[]}
     */
    filterKelulusan() {
        return this.data.filter(d => d.nilai >= 75)
    }
}

const arrayExample = new ArrayOfObject()

console.log(
    arrayExample.filterKelulusan()
)