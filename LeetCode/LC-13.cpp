// Leetcode
// 13. Roman to Integer


class Solution {
public:
    int romanToInt(string s) {
         int ans = 0, intger = 0;
    for(int i=s.length(); i>=0; i--){
        
        switch(s[i]){
            case 'I':{
                intger =  1;
                break;
            }
            case 'V':{
                intger = 5;
                break;
            }
            case 'X':{
                intger = 10;
                break;
            }
            case 'L':{
                intger = 50;
                break;
            }
            case 'C':{
                intger = 100;
                break;
            }
            case 'D':{
                intger = 500;
                break;
            }
            case 'M':{
                intger = 1000;
                break;
            }
        }
        
            if(intger*4<ans){
                ans = ans - intger;
            }
            else{
                ans = ans + intger;
            }
    }
    return ans;
    }
};