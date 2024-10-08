//Memoization---Is a optimization technique that can be used to reduce time-consuming calculations by saving input to something called cache and returning the result from it.
function memoizeSquare(sample) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("In cache");
      return cache[n];
    } else {
      console.log("Calculated");
      cache[n] = sample(n);
      return cache[n];
    }
  };
}

function sample(n) {
  return n * n;
}
const memoSquare = memoizeSquare();
console.log(memoSquare(sample));
