var questions = [
  'what is your name?',
  'what is your pet name?',
  'who are you?'
];

var answers = [];

function ask(i) {

  process.stdout.write(`\n\n\n\n ${questions[i]}`);

  process.stdout.write("   >    ");
};

process.stdin.on('data', function(data) {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', function() {
  process.stdout.write('\n\n\n');
  process.stdout.write(`1. ${answers[0]} \n2. ${answers[1]} \n3. ${answers[2]}`);
  process.stdout.write('\n\n\n');
});

ask(0);
