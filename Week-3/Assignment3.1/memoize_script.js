

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    console.log(cache)
    const key = args.toString();
    if (cache.has(key)) {
      console.log(cache.get(key))
      return cache.get(key)
    }
    cache.set(key, fn(...args));
    console.log(cache.get(key))
    return cache.get(key)
  };
}


function add(a=0, b=0){
  return a+b;
}


const memoizeAdd = memoize(add);
memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
memoizeAdd(100,100);



