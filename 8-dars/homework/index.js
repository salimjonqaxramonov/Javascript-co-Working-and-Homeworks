function k(s1,s2){return Math.min(s1, s2);}
let f=8;
let d=17;
let t=k(f,d);
console.log(t);


// 2-rasm
function daraja(a,b){return Math.pow(a,b);}
let a=3;
let b=2;
console.log(daraja(a,b));


// 3-rasm
const ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
  "Rozimisiz?",
  () => alert("Siz rozilik bildirdingiz."),
  () => alert("Ijro bekor qilindi.")
);