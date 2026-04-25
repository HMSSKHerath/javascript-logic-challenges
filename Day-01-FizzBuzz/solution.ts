for (let currentNumber:number = 1; currentNumber <= 20; currentNumber++) 
{
    let FizzBuzzOutput:string = "";

    if (currentNumber % 3 === 0){FizzBuzzOutput += "Fizz";}
    if (currentNumber % 5 === 0){FizzBuzzOutput += "Buzz";}

    console.log(FizzBuzzOutput || currentNumber);
}