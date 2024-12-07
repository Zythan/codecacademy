//first lesson getter
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
}
// To call the getter method: 
console.log(person.fullName) // 'John Doe'

//second Lesson setter
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num
      }
      else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }  
  };
  
  robot.numOfSensors = 100
  console.log(robot.numOfSensors)