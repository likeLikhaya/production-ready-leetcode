function twoSum(nums: number[], target: number): number[] {
    // loop goes through each [index] as the 1st numbers position
    for (let i = 0; i < nums.length; i++ ){
        //loop goes through each [index] after the 1st index position
        for (let j = i +1; j < nums.length; j++){
            // then add both nums/values & check if they are equal to the target
            if (nums[i] + nums[j] === target) {
                // return the positions of the 2 nums
                return [i, j];
            }
        }   
    }
    return [];
};