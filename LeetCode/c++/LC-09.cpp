// 9. Palindrome Number

class Solution {
public:
    bool isPalindrome(int x) {
        long sum=0;
        int y = x;
        while(x>0){
            sum = sum*10 + x%10;
            x = x/10;
        }
        if(sum == y){
            return true;
        }
        else
            return false;
    }
};