//Underscore to indicate private.
//this is a convention with no backing can still change it at will
//both method calls work but the first one breaks codecacademy checker lol 
//even it can't keep up with the different ways to do things in javascript
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot['_energyLevel'] = 'high'
  robot['recharge']() //breaks the checker but runs and outputs fine
  robot.recharge()