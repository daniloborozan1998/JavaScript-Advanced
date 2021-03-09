class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    set firstName(firstName) {
        if (!firstName) {
            throw new Error("Enter the first name");
        } else {
            console.log("Setting the firstName");
            this._firstName = firstName;

        }
    }
    get firstName() {
        console.log("Getting the value for firstName");
        return this._firstName;
    }

    set lastName(lastName) {
        if (!lastName) {
            throw new Error("Enter the last name");
        } else {
            console.log("Setting the lastName");
            this._lastName = lastName;
        }
    }
    get lastName() {
        console.log("Getting the value for lastName");
        return this._lastName;
    }

    set age(ageForStudent) {
        if (!ageForStudent) {
            throw new Error("Enter the age");
        } else {
            console.log("Setting the age");
            this._age = ageForStudent;
        }
    }
    get age() {
        console.log("Getting the value for age");
        return this._age;
    }

    set address(addressForStudent) {
        if (!addressForStudent) {
            throw new Error("Enter the address");
        } else {
            console.log("Setting the address");
            this._address = addressForStudent;
        }
    }
    get address() {
        console.log("Getting the value for address");
        return this._address;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, address, array) {
        super(firstName, lastName, age, address);
        this.array = array;
        this.academy = "SEDC";
    }
    static check(student, subject) {
        if (student instanceof Student) {
            if (student.array.includes(subject)) {
                console.log(`${student._firstName} ${student._lastName} is studying ${subject} in ${student.academy}`);
                return;
            } else {
                console.log(`${student._firstName} ${student._lastName} does not study ${subject} in ${student.academy}`);
            }
        }
    }
}

let students = [new Student("Danilo", "Borozan", 23, "Cetinje", ["JavaScript", "Angular"]), new Student("Kavin", "Hart", 24, "Boston", [".Net", "Java"]), new Student("Anamarija", "Risteska", 22, "Amsterdam", ["HTML", "C#"]), new Student("Florence ", "Arthaud", 26, "Paris", ["Python", "JavaSpring"])];

Student.check(students[0], "Java");
Student.check(students[0], "Javascript");
Student.check(students[1], ".Net");
Student.check(students[2], "HTML");
Student.check(students[3], "Angular");
students[0].fullName();
students[1].fullName();
students[2].fullName();
students[3].fullName();