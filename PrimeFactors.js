/* Function to print all the prime factors of given number */
{
    let myArray = new Array();
    function printAllPrimeFactors(number) {
        for (let index = 2; index * index < number; index++) {
            let flag = 0;
            for (let i = 2; i <= index / 2; i++) {
                if (index % i == 0) {
                    flag = 1;
                }
            }
            if (flag == 0 && number % (index * index) == 0) {
                console.log(index);
                myArray.push(index);
            }
        }
        if (myArray.length > 0) {
            console.log("Prime factors of " + number + " are : " + myArray);
        }
        else {
            console.log("No prime factors for the given number : " + number);
        }
    }

    /* Driver program to test above functions */
    let num = Math.floor(Math.random() * 1000);
    printAllPrimeFactors(num);
}