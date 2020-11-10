// A simple Javascript program to find three elements whose sum is equal to zero 
{
    // Prints all triplets in array[] with 0 sum
    function findTriplets(arrayGot, n) {
        var found = false;
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (arrayGot[i] + arrayGot[j] + arrayGot[k] == 0) {
                        console.log("(" + arrayGot[i] + ", " + arrayGot[j] + ", " + arrayGot[k] + ")\n");
                        found = true;
                    }
                }
            }
        }
        // If no triplet with 0 sum found in array
        if (found == false)
            console.log("Tripplet does not exist.");
    }

    // Driver code
    let array = [0, -1, 2, -3, 1, -2, 4];
    let size = array.length;
    findTriplets(array, size);
}