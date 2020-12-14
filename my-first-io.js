var fs = require("fs");

// Calling the readFileSync() method 
// to read argument path file 
const buf = fs.readFileSync(process.argv[2], 
            {encoding:'utf8', flag:'r'}); 
  
// Display the file length
const str = buf.toString().split("\n");
console.log(str.length-1); 