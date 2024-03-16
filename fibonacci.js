function isFibonacci(value) {
    let a = 0;
    let b = 1;
    let c = 0;
  
    while (c <= value) {
      a = b;
      b = c;
      c = a + b;
  
      if (c === value) {
        return `Número ${value} pertence à sequência de Fibonacci`;
      }
    }
  
    return `Número ${value} não pertence à sequência de Fibonacci`;
  }

  const number = 21;
  
  console.log(isFibonacci(number));