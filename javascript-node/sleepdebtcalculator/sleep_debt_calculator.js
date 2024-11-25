const hoursSlept = { 
    'monday' : 8,
    'tuesday' : 5,
    'wendsday' : 6,
    'thursday' : 7,
    'friday' : 4,
    'saturday' : 2,
    'sunday' : 10,
}

const getSleepHours = day => {
  day = day.toLowerCase()
  return hoursSlept[day]
}

const getActualSleepHours = () => {
  let totalHoursSlept = 0  
  const add = (a,b) => a+b
  //no I am not going to do it one line at a time by day
  for (const [key, value] of Object.entries(hoursSlept)) {
    console.log(`${key}: ${value}`);
    //this is just to meet the criteria since have the value already from my for loop of object
    //..totalHoursSlept += value ::  totalHoursSlept += getSleepHours(key) would be better than:
    //implict add function below yippie for introducing something to just introduce it
    //implict return for ADDing 2 numbers to sum?? i think they went little left on this one
    totalHoursSlept = add(totalHoursSlept,getSleepHours(key))
  }  
  return totalHoursSlept
}

const getIdealSleepHours = (ideal) => {
    const idealHours = (ideal) ? ideal : 10 //70 hours woot. Used because its obvious no ideal was passed in pretty much
    return idealHours*7;
}
const testSleepStatus = (actual,ideal) => {
  const result = ideal - actual;
  if (ideal>=actual) {
    if (result < 0)        return `You need some rest! You have ${result} hours less than ideal!`
    else if (result === 0) return `You got your ideal rest. Perfect!`
    else                   return `You got ${result} hours more than your ideal rest.`
  }
  else {
    return `You got ${Math.abs(result)} hours more than your ideal rest.`
  }  
}

const actualHoursSlept = getActualSleepHours()
const idealHoursWeek = getIdealSleepHours() //add ideal parameter or not your choice. 

//Output Section
console.log(`Ideal Hours Slept :: ${idealHoursWeek}`)
console.log(`Actual Hours Slept :: ${actualHoursSlept}`)
console.log(testSleepStatus(actualHoursSlept,idealHoursWeek))
