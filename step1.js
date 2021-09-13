let fs = require('fs');
let process = require('process');

// read the file and print it out if no errors
function cat(path){
  fs.readFile(path, 'utf8', function(err, data) {
    if(err) {
      console.error(`Error reading ${path}`);
      process.exit(1);
    }
    else {
      console.log(data);
    }
  });
}

cat(process.argv[2]);
