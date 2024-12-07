// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType,index,newPresetArray) => {
    console.log(requestType)
    if (requestType !== 'GET' && requestType !== 'PUT') return [400]
    if (index === undefined || index < 0 || index > 3) {        
        return [404]
    }
    if (requestType === 'PUT') {
        if (!newPresetArray) return [400]
        presets[index] = newPresetArray
        return [200,presets[index]] //using call to make sure instead of just returning back the passed in array
    }
    return [200,presets[index]]
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
