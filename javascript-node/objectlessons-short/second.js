const robot = {
    energyLevel: 100,
    //this refrences the method if done like this
    //checkEnergy: () => {
    //  console.log(`Energy is currently at ${this.energyLevel}%.`)
    //}
    //shorthand for method means leave off the function part sigh
    checkEnergy() {console.log(`Energy is currently at ${this.energyLevel}%.`)}
  }
  
  robot.checkEnergy();