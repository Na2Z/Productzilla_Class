console.log("Bank Acount task");

class BankAcount {
  Rekening = "";
  Saldo = 0;

  setAcount(rekening, saldo) {
    this.Rekening = rekening;
    this.Saldo = saldo;
  }

  Deposit(Amount) {
    return (this.Saldo += Amount);
  }

  Whitdrawl(amount) {
    if (amount > this.Saldo) {
      return "Maaf saldo anda kurang";
    } else {
      return (this.Saldo -= amount);
    }
  }

  Check() {
    return this.Saldo;
  }
}

const Acount1 = new BankAcount();
Acount1.setAcount("Danny", 100000);
const Deposit1 = Acount1.Deposit(300000);
const Whitdrawl1 = Acount1.Whitdrawl(500000);
const Check1 = Acount1.Check();

console.log(Deposit1);
console.log(Whitdrawl1);
console.log(Check1);

console.log("============================");

const Acount2 = new BankAcount();
Acount2.setAcount("Jimmy", 200000);
const Deposit2 = Acount2.Deposit(50000);
const Whitdrawl2 = Acount2.Whitdrawl(150000);
const Check2 = Acount2.Check();

console.log(Deposit2);
console.log(Whitdrawl2);
console.log(Check2);
