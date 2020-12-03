function checkCashRegister(price, cash, cid) {
 let arr = [];
 let result = { status: '', change: arr }
 // calculating how much we owe the customer
 let changeNeeded = (cash - price).toFixed(2);
 console.log(changeNeeded);
 // calculating how much money is in the register
 let sum = 0
 for (let i = 0; i < cid.length; i++) {
  sum += cid[i][1]
 }
 sum = sum.toFixed(2)
 console.log(sum);
 // defining the currency
 let currency = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100

 }
 if (Number(sum) < Number(changeNeeded)) {
  result.status = 'INSUFFICIENT_FUNDS'
  result.change = []
 }
 if (Number(sum) === Number(changeNeeded)) {

  result.status = 'CLOSED'
  result.change = cid


 }
 // if the amount money in the register is more than the amount we owe the customer we calculate and print how much of each bill we give back to the customer
 if (Number(sum) > Number(changeNeeded)) {
  for (let j = cid.length - 1; j >= 0; j--) {
   const coinName = cid[j][0];
   const coinTotal = cid[j][1];
   const coinValue = currency[coinName];
   let coinAmount = (coinTotal / coinValue).toFixed(2);
   let coinsToReturn = 0;
   while (changeNeeded >= coinValue && coinAmount > 0) {
    changeNeeded -= coinValue;
    changeNeeded = changeNeeded.toFixed(2);
    coinAmount--;
    coinsToReturn++;
   }
   // howerver even if the amount money in the register is more than the amount we owe the customer but we can not give back the correct amount of change to the customer we print insufficient funds
   if (changeNeeded > coinTotal) {
    result.status = 'INSUFFICIENT_FUNDS'
    result.change = []

   }
   if (coinsToReturn > 0 && !(changeNeeded > coinTotal)) {
    arr.push([coinName, coinsToReturn * coinValue])
    result.status = 'OPEN'
   }
  }

 }
 return result
}

let finalresult = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(finalresult);