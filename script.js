//Addition of two sums//

function sum(num1, num2) {
    const add = (num1 + num2);
    return add;
}
console.log(sum (2, 4))

//Difference between two numbers

function diff(num1, num2){
  const diff = (num1 - num2);
  return diff;
}
console.log(diff(10, 3))

//Product of two numbers

function mul(num1, num2){
  const mul = (num1 * num2);
  return mul;
}
console.log(mul(10, 5))

//Coversion of degree celsius to fareheit

function convertToF(c){
let res = (c * 1.8) + 32;
return res
 }
const celToFaren = convertToF(100);
console.log(celToFaren)


//Convert Farenheit to celsius

function convertToC(f){
  let res = (f -32)/1.8
  return res
}
const farenToC = convertToC(212)
console.log(farenToC)