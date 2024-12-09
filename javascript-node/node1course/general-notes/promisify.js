//changes old call back function into promise
const util = require('util')
//trails.js moved to here
trails = {
    'Appalachian': {
      'nickname': 'AT',
      'miles': 2189.1,
      'kilometers': 3253,
      'region': 'Appalachian Mountains'
    },
    'Continental Divide': {
      'nickname': 'CDT',
      'miles': 3100,
      'kilometers': 5000,
      'region': 'Rocky Mountains'
    },
    'North Country': {
      'nickname': 'NCT',
      'miles': 4600,
      'kilometers': 7400,
      'region': 'Northern United States'
    },
    'Pacific Crest': {
      'nickname': 'PCT',
      'miles': 2654,
      'kilometers': 4271,
      'region': 'West Coast'
    }
}

//Util.
// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
    return setTimeout(() => {
      if (trails.hasOwnProperty(trail)) {    
        const foundTrail = trails[trail];    
        callback(null, foundTrail)
      } else {
        callback(new Error('Trail not found!'))
      }
    }, 1000);
  }
  
  // Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
  function callback (error, trailData) {
    if (error) {
      console.error(error.message)
      process.exit(1)
    } else {
      const mi = trailData.miles;   
      const nickname = trailData.nickname;
      console.log(`The ${nickname} is ${mi} miles long!`)
    }
  }
  
  getTrailDistance('North Country', callback)
  
  // Promisify below!
  const getTrailDistancePromise = util.promisify(getTrailDistance)
  getTrailDistancePromise('North Country')
    .then((trails) => {
      console.log(`The ${trails.nickname} is ${trails.miles} miles long!`)
  
    })
    .catch((error) => {
      console.log(error)    
    })
