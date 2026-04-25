for (let currentNumber = 1; currentNumber <= 20; currentNumber++) 
{
    let FizzBuzzOutput = "";

    if(currentNumber % 3 === 0){ FizzBuzzOutput += "Fizz"; };
    if(currentNumber % 5 === 0){ FizzBuzzOutput += "Buzz"; };

    console.log(FizzBuzzOutput || currentNumber);
}