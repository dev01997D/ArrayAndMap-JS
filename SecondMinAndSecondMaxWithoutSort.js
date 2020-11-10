/* Function to print second largest and second smallest elements */
{
    function print2Smallest(array) {
        console.log(array);
        let arr_size = array.length;

        let firstMax = array[0];
        let secondMax = Number.MIN_VALUE;
        for (let index = 0; index < arr_size; index++) {
            if (array[index] > firstMax) {
                secondMax = firstMax;
                firstMax = array[index];
            }
            // If array[index] is in between first and second then update second 
            else if (array[index] > secondMax && array[index] < firstMax)
                secondMax = array[index];
        }
        console.log("2nd largest : " + secondMax);

        let first = Number.MAX_VALUE;
        let second = Number.MAX_VALUE;
        for (let index = 0; index < arr_size; index++) {
            if (array[index] < first) {
                second = first;
                first = array[index];
            }
            // If array[index] is in between first and second then update second 
            else if (array[index] < second && array[index] > first)
                second = array[index];

        }
        console.log("2nd smallest : " + second);
    }

    /* Driver program to test above functions */
    var myArray = [], X = 10;
    while (myArray.length < X) {
        let num = Math.floor(Math.random() * 1000);
        myArray.push(num);
    }
    print2Smallest(myArray)
}