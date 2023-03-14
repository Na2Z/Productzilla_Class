console.log("Task");

class Rectangle {
  width;
  height;

  setwidth(width) {
    this.width = width;
  }
  setheight(height) {
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  parimeter() {
    return 2 * (this.height + this.width);
  }
  issquare() {
    let square = false;
    if (this.width == this.height) {
      square = true;
    }
    return square;
  }
}

const kotak1 = new Rectangle();
kotak1.setheight(10);
kotak1.setwidth(10);
const kotakarea1 = kotak1.area();
const kotakparimiter1 = kotak1.parimeter();
const kotakissquare1 = kotak1.issquare();
console.log(kotakarea1);
console.log(kotakparimiter1);
console.log(kotakissquare1);

console.log("==================================");

const kotak2 = new Rectangle();
kotak2.setheight(10);
kotak2.setwidth(15);
const kotakarea2 = kotak2.area();
const kotakparimiter2 = kotak2.parimeter();
const kotakissquare2 = kotak2.issquare();
console.log(kotakarea2);
console.log(kotakparimiter2);
console.log(kotakissquare2);

console.log("==================================");
