
let bill=[125,555,44];

 const calcTip = bill.map((x)=>50 > x > 300 ? tip = (0.15 * x): tip = (0.20 * x))
 
 console.log(calcTip);

let total = calcTip.map((a,i)=>a+bill[i])

console.log(total)





 

 