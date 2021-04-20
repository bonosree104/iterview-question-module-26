const normalPerson = {
    firstName :'rana',
    lastName: 'rumuu',
    salary: 150000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },

    chargeBill :function(amount){
        this.salary = this.salary - amount;
        return this.salary;

    }
}
console.log(normalPerson);
normalPerson.chargeBill(150);
normalPerson.chargeBill(3400);
console.log(normalPerson.salary);

const tanaPerson = {
    firstName :'Tana',
    lastName: 'Tupu',
    salary: 150000
}


  const tanaChargeBill = normalPerson.chargeBill.bind(tanaPerson);
  tanaChargeBill (1000);
  tanaChargeBill(3000);
  console.log(tanaPerson.salary);