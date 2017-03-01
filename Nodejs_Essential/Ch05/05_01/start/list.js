var fs = require('fs');

fs.readdir('./Ch05/05_01/start/lib',function(err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("reading files...");
