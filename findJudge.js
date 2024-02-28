function findJudge(n, trust) {
  const trustCount = new Array(n + 1).fill(0);
  const trustedBy = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustCount[b]++;
    trustedBy[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1 && trustedBy[i] === 0) {
      return i;
    }
  }

  return -1;
}

// Example usage

const n = 4;
const trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];
console.log(findJudge(n, trust)); // Output: 3
