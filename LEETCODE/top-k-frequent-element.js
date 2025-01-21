/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const myMap = new Map();

    nums.forEach(num=>{
        myMap.set(num, (myMap.get(num) || 0) + 1);
    });

    const sortFreq = Array.from(myMap.entries()).sort((a,b) => b[1]-a[1]);

    return sortFreq.slice(0, k).map(pair => pair[0]);



};
