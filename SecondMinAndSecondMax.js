/* Function to print second largest and second smallest elements */
{
    function print2Smallest(array) {
        console.log(array);
        let sortedArray=array.sort(function(a, b){
            return a-b
        });
        console.log(sortedArray);
        let totalSize=array.length;
        console.log("2nd largest : " + sortedArray[totalSize-1-1]);
        console.log("2nd smallest : " + sortedArray[1]);
    }

    /* Driver program to test above functions */
    let array = new Array();
    for (let index = 0; index < 10; index++) {
        let num = Math.floor(Math.random() * 1000);
        array.push(num);
    }
    print2Smallest(array);
}