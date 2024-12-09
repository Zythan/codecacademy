class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  greeting() {
    return `Hi, I'm ${this.name} and I am a ${this.age} year old ${this.breed}.`;
  }
}

const myDog = new Dog('Moopy', 'Golden', 2);
//fixed code because this was using myPerson not myDog <<< doh bad codecacdemy
console.log(myDog.age) // 2
console.log(myDog.greeting()) // "Hi I'm Moopy and I'm a 2 year old Golden." 