var fs = require('fs') // Import the filesystem module 
var path = require('path') 

var folder = process.argv[2] // path directory
var ext = '.' + process.argv[3] // Extension as third argument

fs.readdir(folder, (err, files) =>{
  if (err) return console.error(err)
  files.forEach((file) => {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})