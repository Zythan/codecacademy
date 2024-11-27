// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  console.log(`extension:::::: ${extension}`)
  return  ({
    'html':'text/html', 
    'css' :'text/css', 
    'jpeg':'image/jpeg', 
    'jpg' :'image/jpeg', 
})[extension] ?? 'text/plain'
  
}

getContentType('index.html')