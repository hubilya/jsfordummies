function calculator (num1,char, num2 ){
  if (char === "+"){
  return num1+num2;
  }
  else if (char === "-"){
  return num1-num2;
  }
  else if (char === "*"){
  return num1*num2;
  }
  else if (char === "/"){
  return num1/num2;
  }
}
console.log(calculator(21,'/',3))
