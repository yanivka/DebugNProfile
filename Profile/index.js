const main = require("./main");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Click any key to start", () => {
  console.log("Started (This will take about 15 seconds)");
  main.function1();
  main.function2();
  main.function3();
  main.function4();
  main.function5();
  main.function6();
  main.function7();
  main.function8();
  main.function9();
  main.function10();
  console.log("Finished");
  readline.close();
});
