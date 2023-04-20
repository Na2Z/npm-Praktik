function jumlah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function bagi(a, b) {
  return a / b;
}
function kali(a, b) {
  return a * b;
}
function pangkat(a, b) {
  return a ** b;
}

module.exports = {
  jumlah: jumlah, //boleh dikasih titik dua(:) boleh tidak
  kurang: kurang,
  kali: kali,
  bagi: bagi,
  pangkat: pangkat,
};
