function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        console.log("FirstName=LastName=Age");
        return `${this.firstName} ${this.lastName} ${this.age}`;
    };
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function(food) {
        console.log(`${this.name} eats ${food}`);
    };
    this.sleep = function() {
        console.log(`${this.name} is sleeping`);
    };
}

function Cat(name, age, color, ownerId) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId === undefined ? null : ownerId;
    this.meow = function() {
        console.log(`The cat ${this.name} says Meow`);
    };
    this.ownerIdmethod = function(own) {
        if (this.ownerId === null || (own[this.ownerId] == undefined)) {
            console.log(`This cat does not have owner`);
        } else {
            console.log(`Owner: ${own[this.ownerId].getFullName()}`);
        }
    };
}

function PersianCat(name, age, color, ownerId, eyeColor) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function() {
        console.log(`The cat ${this.name} has full fur`);
    };
}

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly === undefined ? null : isFriendly;
    this.printPersonality = function(type) {
        if (type === true) {
            this.isFriendly = true;
            console.log(`The cat is friendly`);
        } else {
            this.isFriendly = false;
            console.log(`The cat ${this.name} is not friendly}`);
        }
    };
}


let owners = [new Person(0, "Danilo", "Borozan", 23), new Person(1, "Anamarija", "Risteska", 23), new Person(2, "Sime", "Nokoski", 22), new Person(3, "Rozeta", "Markovska", 24), new Person(4, "Aleksandar", "Milovski", 25)];
let colors = ["black", "white", "brown", "grey", "orange"];

let cat1 = new RagDollCat("Lusi", 1, colors[Math.floor(Math.random() * colors.length)], 1, 6);
let cat2 = new PersianCat("Lora", 2, colors[Math.floor(Math.random() * colors.length)], 3, colors[Math.floor(Math.random() * colors.length)]);
let cat3 = new PersianCat("Tom", 2, colors[Math.floor(Math.random() * colors.length)], null, colors[Math.floor(Math.random() * colors.length)]);


console.log(owners[0].getFullName());
console.log(owners[1].getFullName());
console.log(owners[2].getFullName());
console.log(owners[3].getFullName());
console.log(owners[4].getFullName());

console.log("=====RagDollCat=====");
s
console.log(cat1);
cat1.printPersonality(true);

console.log("=====RagDollCat=====");
console.log(cat1);

console.log("=====PERSIAN_CAT=====");
console.log(cat2);

console.log("=====RagDollCat=====");

cat1.ownerIdmethod(owners);
cat1.eat("fish");
cat1.sleep();

console.log("=====PERSIAN_CAT=====");

cat2.ownerIdmethod(owners);
cat2.furDescription();
cat2.meow();

console.log("=====PERSIAN_CAT=====");

cat3.ownerIdmethod(owners);
cat3.furDescription();
cat3.meow();