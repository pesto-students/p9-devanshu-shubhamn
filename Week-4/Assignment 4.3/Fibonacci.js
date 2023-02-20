const Fibs = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let oldNumber = 0;
    let newNumber = 0;
    return {
      next: () => {
        if (i <= n) {
          [oldNumber, newNumber] = [newNumber, oldNumber + newNumber || 1];
          i += 1;
          return { value: oldNumber, done: false };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
});

// console.log([...Fibs(5)]);

for (let num of Fibs(5)) {
  console.log(num);
}
