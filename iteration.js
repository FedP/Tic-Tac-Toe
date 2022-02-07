const cryptos = ["BTC", "ETH", "BNB", "USDT", "ADA"];

for (let i of cryptos) {
  console.log(i);
}

console.log("-----------------");

for (let index in cryptos) {
  console.log(index, cryptos[index], typeof index, typeof cryptos[index]);
}

console.log("-----------------");

let i = 0;

while (i < cryptos.length) {
  console.log("The cripto is: " + cryptos[i]);
  i++;
}

const crypto1 = ["BTC", "ETH", "BNB", "USDT", "ADA"];

crypto1.forEach(function (crypto1) {
  console.log(crypto1);
});


function sumFirstN(n) {
  let sum = 0;

  if (n < 0 || typeof n !== "number") {
    return NaN;
  } else {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  }
  return sum;
}
