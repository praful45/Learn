//26. Remove Duplicates from Sorted Array

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size()==0) return 0;
        int i=1;
        for(int n: nums){
            if(n>nums[i-1]){
                nums[i++]=n;
            }
        }
        return i;
    }
};
