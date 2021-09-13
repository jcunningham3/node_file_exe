const fs = require('fs');
const process = require('process');
const axios = require('axios');

//handle the output
function output(text, out) {
  if(out) {
    fs.writeFile(out, text, 'utf8', function(err) {
      if (err) {
        console.error(`Couldn't write ${out}`);
        process.exit(1);
      }
    });
  }
  else {
    console.log(text);
  }
}

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

// read the url and print it out if no errors
async function get_url(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  }
  catch {
    console.log(`Error getting ${url}`);
    process.exit(1);
  }
}

// look at the second argument
let path;
let out;



//distinguishing the process
if(process.argv[2] == '--out') {
  out = process.argv[3];
  path = process.argv[4];
}
else {
  path = process.argv[2];
}

// then looking at
if(path.slice(0,4) === 'http') {
  get_url(path, out);
}
else {
  cat(path, out);
}
