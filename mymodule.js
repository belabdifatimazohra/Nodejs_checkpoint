var fs = require('fs'); // Import fs module
var path = require('path'); // Import path 

// Export function
module.exports = (directory, extension, callback) => {
    // Read the path directory
    fs.readdir(directory, (err, list) => {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    })
}