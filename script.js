// function expression
const tampilNama = function (nama) {
  return `Halo, ${nama}`;
};

// console.log(tampilNama(`galih`));

// arrow function
const tampilNamaArrow = (nama) => {
  return `Halo, ${nama}. Ini arrow function`;
};

// console.log(tampilNamaArrow(`galih`));

const tampilWaktuArrow = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
};

// console.log(tampilWaktuArrow(`galih`, `siang`));

// jika parameternya 1, bisa juga ditulis tanpa kurung (tapi diubah prettier jadi ada kurung)
// dan jika returnnya juga 1 bisa ditulis tanpa return & kurung kurawal juga
const tampilNamaP1 = (nama) =>
  `Halo ${nama}, ini arrow function dengan parameter 1 dan return 1`;

// console.log(tampilNamaP1(`galih`));

// jika tidak ada parameternya bisa ditulis seperti dibawah
const tampilnamaTP = () => `halo ini tanpa parameter`;

// console.log(tampilnamaTP());

// contoh sedikit complex arrow function
// membuat function untuk menghitung jumlah huruf pada masing - masing mhs
//funtion jumlah huruf yang panjang
// let jmlHuruf = mhs.map(function (nama) {
//   return nama.length;
// });

let mhs = [`Galih`, `Arizza`, `Candra`];
let jmlHuruf = mhs.map((nama) => nama.length);
// console.log(jmlHuruf);

// jika ingin mengembalikan sebagai object
let jmlHurufObj = mhs.map((nama) => ({
  //   nama: nama,bisa ditulis 1 saja karena objectnya sama dengan nama parameter
  nama,
  jumlahHuruf: nama.length,
}));

console.table(jmlHurufObj); //mengubah agar menjadi table
