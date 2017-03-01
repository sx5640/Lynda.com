var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
  name: '',
  sayings: []
};

rl.question("what is the name of a real person?", function(answer) {
  realPerson.name = answer;

  rl.setPrompt(`what would ${realPerson.name} say?`);

  rl.prompt();

  rl.on('line', function (saying) {

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close(0);
    } else {
      realPerson.sayings.push(saying.trim());
      rl.setPrompt(`what else did ${realPerson.name} say? ('exit' to leave)`);
      rl.prompt();
    }
  });

});

rl.on('close', function () {
  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit();
});
