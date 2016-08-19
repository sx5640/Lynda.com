var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

function percent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  percent(percentWaited);
}, waitInterval);



setTimeout(function() {
  clearInterval(interval);
  percent(100);
  console.log('\ndone');
}, waitTime);

process.stdout.write("\n");
percent(percentWaited);
