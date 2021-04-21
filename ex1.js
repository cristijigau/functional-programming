const fibonacci = number => {
    if (number > 1) return fibonacci(number - 1) + fibonacci(number - 2);
    return number;
  };
  
  console.log(fibonacci(7));