//20. Valid Parentheses

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for(int i= 0; i<s.length();i++){
            //checking for opening brackets and pushing to stack
            if(s[i] == '(' || s[i] == '{' || s[i] == '[' ){
                st.push(s[i]);
                continue;
            }
            //checking for stack is empty or not
            if(st.empty()) return false;
            //checking for closing brackets and top of stack -> respective opening brackets
            if(s[i] == ')' && st.top() == '(' || 
              s[i] == '}' && st.top() == '{' ||
              s[i] == ']' && st.top() == '['){
                st.pop();
            }
            else return false;
        }
        // stack should be empty at the end
        return st.empty()? true:false;
    }
};
