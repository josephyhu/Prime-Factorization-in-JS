let n = parseInt(prompt("Enter an integer greater than 1"));
let factors = [];

while (n < 2 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter an integer greater than 1"));
}

const isPrime = n => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n;
}

for (let i = 2; i <= n; i += 1) {
  if (isPrime(i) !== false) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
}

document.querySelector('#factors').innerHTML = "<p>n: " + n + "</p><p>prime factors: " + factors.join(', ') + "</p>";