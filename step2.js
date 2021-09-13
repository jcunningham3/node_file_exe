const fs = require('fs');
const process = require('process');
const axios = require('axios');

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

let path = process.argv[2];

if(path.slice(0,4) === 'http') {
  get_url(path);
}
else {
  cat(path);
}
