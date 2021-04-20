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