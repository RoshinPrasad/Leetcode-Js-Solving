let runningSum = function(nums) {
    let runningSumArray = [];
    let initial = 0;

    for (let i = 0; i < nums.length; i++) {
        initial = initial + nums[i];
        runningSumArray.push(initial);
    }
    return runningSumArray;
};

let nums = [2, 3, 4, 5, 6];
console.log(runningSum(nums));
