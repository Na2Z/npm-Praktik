class Person {
  constructor(name = "", kelas = "") {
    this.name = name;
    this.kelas = kelas;
  }
  setNama(nama) {
    this.nama = nama;
  }
  setKelas(kelas) {
    this.kelas = kelas;
  }
  setNim(nim) {
    this.nim = nim;
  }
  getNama() {
    return this.nama;
  }
  getKelas() {
    return this.kelas;
  }
  getNim() {
    return this.nim;
  }
}

module.exports = Person;
