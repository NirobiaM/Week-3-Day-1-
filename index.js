//Creating Classes-give the class at least 3 properties,give the class at least 3 methods
 //create two instances of the class (two cats)log both instances to see their properties
//invoke each method from both instances

class cat {

  constructor(color, age, name) {
    this.color = color;
    this.age = age;
    this.name = name;
  }

    introduce() {
      console.log( `Hello, I am ${this.name}`);
    }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  cuddle() {
    console.log(`${this.name} is enjoying some warm cuddles`);
  }
}

// instances
const cat1 = new cat("orange", 7, "Garfield");
const cat2 = new cat("grey", 5, "Tinker");

// properties of the instances
console.log(cat1);
console.log(cat2);

// methods
cat1.introduce();
cat1.sleep();
cat1.cuddle();

cat2.introduce();
cat2.sleep();
cat2.cuddle();



class Pirate {
  constructor(name, age, boat) {
    this.name = name;
    this.age = age;
    this.boat = boat;
  }

  introduce() {
    console.log(`Arr! I am ${this.name}, an original pirate.`);
  }

  sailing() {
    console.log(`${this.name} is sailing with ${this.boat}!`);
  }

  dance() {
    console.log(`${this.name} is enjoying a dance with friends`);
  }
}

// two arrays of pirates
const jollyRoger = [
  new Pirate("Captain Robi", 35, "sailboat"),
  new Pirate("Mike Jack", 36, "yacht"),
  new Pirate("Joe Jane", 37, "cabin cruiser")
];

const blackPearl = [
  new Pirate("Captain Litia", 25, "tugboat"),
  new Pirate("one eye guy", 26, "houseboat"),
  new Pirate("one arm girl", 27, "jetboat"),
];

// Loop over the jollyRoger array 
console.log("Pirates on the Jolly Roger:");
jollyRoger.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Boat: ${pirate.boat}`);
});

// Loop over the blackPearl array 
console.log("Pirates on the Black Pearl:");
blackPearl.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Boat: ${pirate.boat}`);
});