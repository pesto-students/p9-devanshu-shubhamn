class customPromise {
  constructor(fn) {
    this.status = "pending";
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.catchCallback = null;
    this.thenCallback = null;
    fn(this.resolve, this.reject);
  }

  resolve(resolvedData) {
    if (this.status == "pending") {
      console.log("Resolve function called");
      this.thenCallback(resolvedData);
      this.status = "resolve";
    }
  }

  reject(rejectedData) {
    if (this.status == "pending") {
      console.log("Reject function called");
      this.catchCallback(rejectedData);
      this.status = "rejected";
    }
  }

  then(thenFn) {
    console.log("Then Function called");
    this.thenCallback = thenFn;
    return this;
  }

  catch(catchFn) {
    console.log("Catch Function called");
    this.catchCallback = catchFn;
    return this;
  }
}

function getNumber() {
  return new customPromise((res, rej) => {
    const randomNum = Math.floor(Math.random() * 100);
    // const randomNum = 5;
    setTimeout(() => {
      if (randomNum % 5 === 0) {
        rej(`Promise Reject With Number ${randomNum}`);
      } else {
        res(`Promise Resolve With Number ${randomNum}`);
      }
    }, 1000);
  });
}

getNumber()
  .then((val) => console.log(val))
  .catch((val) => console.log(val));
