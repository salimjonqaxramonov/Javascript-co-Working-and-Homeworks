let y = 0;
 for (let i = 1; i <= 5; i++) {
   let s = parseFloat(prompt(`${i}-sonni kiriting:`));
   if (isNaN(s) || s <= 0) {
     alert("Iltimos, faqat musbat son kiriting.");
     i--; 
     continue;
   }
   y += s;
 }
 let o = y / 5;
 console.log("Arifmetik o‘rtacha:", o);
 
//  -----------------------------

let kopaytma = 1;
for (let i= 1; i <= 5; i++) {
  let son = parseFloat(prompt(`${i}-sonni kiriting:`));

  if (isNaN(son) || son <= 0) {
    alert("Iltimos, faqat musbat son kiriting.");
    continue;
  }
  kopaytma *= son;
}
let ortacha = Math.pow(kopaytma, 1 / 5);
console.log("Geometrik o‘rtacha:", ortacha);


    
