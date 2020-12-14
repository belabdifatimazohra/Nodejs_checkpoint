// Include fs module
const fs = require("fs");

// Callling the fs.readFile() method
// for reading argument path file
fs.readFile(
  process.argv[2],
  { encoding: "utf8", flag: "r" },
  function (err, buf) {
    if (err) console.log(err);
    // Display the file length
    else console.log(buf.toString().split("\n").length - 1);
        
  }
);
