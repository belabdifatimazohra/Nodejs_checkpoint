var http = require('http'); // import http core module

var url = process.argv[2]; // get the second argument as the url

http.get(url,  (response) =>{
    response.setEncoding('utf8'); // set the encoding of the url , utf8
    // stdout the response 
  response.on('data',(data) =>{
    console.log(data);
  });
    // if error display an error
  response.on('error',(error)=>{
    console.error('This is the error message:' + error);
  });
});