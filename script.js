// // 1.Arrow function
// // function expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// // console.log(tampilNama(`galih`));

// // arrow function
// const tampilNamaArrow = (nama) => {
//   return `Halo, ${nama}. Ini arrow function`;
// };

// // console.log(tampilNamaArrow(`galih`));

// const tampilWaktuArrow = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// // console.log(tampilWaktuArrow(`galih`, `siang`));

// // jika parameternya 1, bisa juga ditulis tanpa kurung (tapi diubah prettier jadi ada kurung)
// // dan jika returnnya juga 1 bisa ditulis tanpa return & kurung kurawal juga
// const tampilNamaP1 = (nama) =>
//   `Halo ${nama}, ini arrow function dengan parameter 1 dan return 1`;

// // console.log(tampilNamaP1(`galih`));

// // jika tidak ada parameternya bisa ditulis seperti dibawah
// const tampilnamaTP = () => `halo ini tanpa parameter`;

// // console.log(tampilnamaTP());

// // contoh sedikit complex arrow function
// // membuat function untuk menghitung jumlah huruf pada masing - masing mhs
// //funtion jumlah huruf yang panjang
// // let jmlHuruf = mhs.map(function (nama) {
// //   return nama.length;
// // });

// let mhs = [`Galih`, `Arizza`, `Candra`];
// let jmlHuruf = mhs.map((nama) => nama.length);
// // console.log(jmlHuruf);

// // jika ingin mengembalikan sebagai object
// let jmlHurufObj = mhs.map((nama) => ({
//   //   nama: nama,bisa ditulis 1 saja karena objectnya sama dengan nama parameter
//   nama,
//   jumlahHuruf: nama.length,
// }));

// // console.table(jmlHurufObj); //mengubah agar menjadi table

// // 2. konsep this pada arrow function
// // 2.1 contructor function
// const MhsCon = function () {
//   this.nama = `Galih`;
//   this.umur = 31;
//   this.sayHello = function () {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan saya umur ${this.umur} tahun`
//     );
//   };
// };

// const galih = new MhsCon();
// // 2.1.1 arrow function dari fungsi diatas
// // note constructor funtion tidak boleh diubah menjadi arrow function
// const MhsConArrow = function () {
//   this.nama = `Galih`;
//   this.umur = 31;
//   this.sayHello = () => {
//     console.log(`Halo ${this.nama}, umurmu ${this.umur} tahun`);
//   };
// };

// const galihConsArrow = new MhsConArrow();

// // 2.2 pakai object literal
// const galihObjLit = {
//   nama: `Galih`,
//   umur: 31,
//   sayHello: function () {
//     console.log(`Halo ${this.nama}, umurmu ${this.umur} tahun`);
//   },
// };
// // 2.2.1 arrow function untuk object literal diatas
// // bisa dicek disini arrow functio tidak mengenal konsep this
// const galihObjLitArrow = {
//   nama: `Galih`,
//   umur: 31,
//   sayHello: () => console.log(`halo ${this.nama}, umurmu ${this.umur}`),
// };

// // end of materi belajar

// materi latihan box
const btnKotak = document.querySelector(".box");
btnKotak.style.cursor = "pointer";
btnKotak.addEventListener("click", function () {
  // biar waktu click balik animasinya tetap urut
  let clickFrom = "size";
  let clickTo = "caption";

  if (this.classList.contains("size")) {
    [clickFrom, clickTo] = [clickTo, clickFrom];
  }

  // btnKotak.classList.add("size"); //code solo
  this.classList.toggle(clickFrom);
  setTimeout(() => {
    this.classList.toggle(clickTo);
  }, 600);
});
