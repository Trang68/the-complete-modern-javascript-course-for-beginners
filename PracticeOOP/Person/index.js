
//super() - call contructor of the parent class.


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age); 
        this.salary = salary;
    }
}
class Manager extends Employee{
    constructor(name, age, salary, department){
        super(name, age, salary);
        this.department = department;
    }
}

const emp = new Employee("Trang", 25, 10000);
console.log(emp);

const manager = new Manager("Traaong", 30, 50000, "Marketing");
console.log(manager);


