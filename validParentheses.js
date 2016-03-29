// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true 

function validParentheses(str) {
    var open = 0;
    var closed = 0;
    if (str[0] !== "("){
        return false;
    }
    else {
        for (var i = 0; i < str.length; i++){
            if (str[i] === "("){
                open++;
            }
            else {
                closed++;
            }
        }
    }
    if (open === closed) {
        return true;
    }
    else{
        return false;
    }
}
