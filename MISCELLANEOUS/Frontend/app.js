
// // factory function


// function personMaker(name, age){
//      const person={
//         name: name,
//         age:age,
//         talk(){
//               console.log(`Hi my name is ${this.name}`);
//             }
//         };

//         return person;
// }

// let p1 = personMaker("Mohit",23);
// let p2 = personMaker("Kumar",23);


// New Operator

// Constructors- doesn't return anything and start with Cappital letter

// function Person(name, age){
//      this.name=name;
//      this.age=age;
// }
// Person.prototype.talk= function(){
//     console.log(`Hi my name is ${this.name}`);
// }
// let p1 = new Person("Mohit",23);
// let p2 = new Person("Kumar",23);


// Classes

// class Person{
//     constructor(name, age){
//      this.name=name;
//      this.age=age; 
//     }

//   talk(){
//     console.log(`Hi my name is ${this.name}`);
//     }

// }

// let p1 = new Person("Mohit",23);
// let p2 = new Person("Kumar",23);


// Inheritance


class Person{  // Parent Class
    constructor(name,age){
          console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi I am ${this.name} `);
    }
}


class Student extends Person{ // Child
    constructor(name,age, marks){
        console.log("student class constructor");
       super(name,age); // parent class constructor is called

       this.marks= marks;
    }
    
}

class Teacher extends Person{  // Child
    constructor(name,age, subject){
       super(name,age); // parent class constructor is called
       this.subject= subject;
    }
    
}