// 'use strict';
const getNumber = new Promise(function (resolve, reject) {
  let number = Math.random();
  // number = 5;
  if (number % 5 == 0) {
    reject(number);
  } else {
    resolve(number);
  }
});

getNumber
  .then((number) => {
    console.error(`Success: Number ${number} is not divisible by 5`);
  })
  .catch((number) => {
    console.error(`Reject: Number ${number} is divisible by 5`);
  })
  .finally(() => {
    console.log("Always call");
  });

// getNumber();
