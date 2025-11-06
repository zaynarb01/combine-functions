

 
function combineUnique(...arrays){
    arrays.map(arr => {
        combined.push(...arr);
    });

    const uniqueArray = [...new Set(combined)];
    const sorted = uniqueArray.sort((a, b) => a - b);


}
console.log(combineUnique([1, 2, 3], [2, 3, 4], [4, 5, 6]));
console.log(combineUnique([10, 20], [20, 30, 40], [10, 50]));
 
