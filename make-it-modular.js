var path = require('path'); // Import path
var mymodule = require('./mymodule'); // import mymodule.js
var dir = process.argv[2]; // Get the second argument as the name directory
var filterExtension = process.argv[3]; // Third argument as the file extension

const callback = (err, list) => {
    if (err) throw err;
    list.forEach( (file) => {
        console.log(file);
    })
}

// Call mymodule function
mymodule(dir, filterExtension, callback);