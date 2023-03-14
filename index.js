console.log("Class");
console.log("");

class mobil {
  Merek = "Mitsubishi";
  Tipe = "Luxury";
  CC = 2500;
  Tahun = 2019;
  BBM = "Bensin (Ron 92)";
  Stier = "Kanan";
  Buatan;
  //dapat berisi array, objek, maupun class lagi.

  getdatamobl() {
    const obj = {
      warna: this.Merek,
      Tipe: this.Tipe,
      CC: this.CC,
      tahun: this.Tahun,
      bbm: this.BBM,
    };
    return obj;
  }

  setdatamobil(Warna, Merek, Tipe, CC) {
    this.Warna = Warna;
    this.Merek = Merek;
    this.Tipe = Tipe;
    this.CC = CC;
  }
}

const m = new mobil();
let datamobil = m.getdatamobl();
console.log(datamobil);
m.setdatamobil("Hitam", "Ferarri", "Supercar", [5000, 7000, 10000]);
datamobil = m.getdatamobl();
console.log(datamobil);
