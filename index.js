console.log("Hello, World!");

function main() {
  let number = 1;
  setInterval(() => {
    console.log(number);
    number += number;
  }, 1000);
}
main();
