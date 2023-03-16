console.log("Home Task Class");
console.log("");

// 1. Buat sebuah class dengan nama Person.
// Class Person memiliki property sebagai berikut:
// - name
// - age
// - gender
// - height
// Class tersebut juga memiliki method sebagai berikut:
// - setName(name) -> untuk menyimpan name
// - setAge(age) -> untuk menyimpan age
// - setGender(gender) -> untuk menyimpan gender
// - setHeight(height) -> untuk menyimpan height
// - getName(name) -> untuk mengambil name
// - getAge(age) -> untuk mengambil age
// - getGender(gender) -> untuk mengambil gender
// - getHeight(height) -> untuk mengambil height

// 2. Buat sebuah class dengan nama Student. Class ini akan menyimpan nama, NIM dan daftar nilai (disimpan dalam array) dari seorang mahasiswa. Di class ini juga dapat melakukan penambahaan data nilai baru ke dalam daftar nilai, mengambil nilai rata rata dari daftar nilai, dan menentukan predikat (A, B+, B, C+, C, D, E).

console.log("No 1 : ");
console.log("");

class Person {
  constructor() {
    this.name = "";
    this.age = 0;
    this.gender = "";
    this.height = 0;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setHeight(height) {
    this.height = height;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  getHeight() {
    return this.height;
  }
}

let person1 = new Person();

person1.setName("Waluyo");
person1.setAge(45);
person1.setGender("Male");
person1.setHeight(167);

console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.getGender());
console.log(person1.getHeight());

console.log("==================================");
let person2 = new Person();

person2.setName("Mila");
person2.setAge(32);
person2.setGender("Female");
person2.setHeight(160);

console.log(person2.getName());
console.log(person2.getAge());
console.log(person2.getGender());
console.log(person2.getHeight());

console.log("");
console.log("No 2 : ");

class Student {
  constructor(nama, nim) {
    this.nama = nama;
    this.nim = nim;
    this.nilai = [];
  }

  getNama() {
    return this.nama;
  }

  addNilai(nilai) {
    this.nilai.push(nilai);
  }

  getRataNilai() {
    let rata = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      rata += this.nilai[i];
    }
    return rata / this.nilai.length;
  }

  getNilai() {
    let rataNilai = this.getRataNilai();

    if (rataNilai >= 90) {
      return "A";
    } else if (rataNilai >= 85) {
      return "B+";
    } else if (rataNilai >= 80) {
      return "B";
    } else if (rataNilai >= 75) {
      return "C+";
    } else if (rataNilai >= 70) {
      return "C";
    } else if (rataNilai >= 60) {
      return "D";
    } else {
      return "E";
    }
  }
}

let student1 = new Student("Hermansyah", "113487");

student1.addNilai(80);
student1.addNilai(70);
student1.addNilai(95);
student1.addNilai(90);

console.log(student1.getNama());
console.log(student1.getRataNilai());
console.log(student1.getNilai());

console.log("===================================");

let student2 = new Student("Masha", "3340982");

student2.addNilai(70);
student2.addNilai(50);
student2.addNilai(80);
student2.addNilai(65);

console.log(student2.getNama());
console.log(student2.getRataNilai());
console.log(student2.getNilai());
