/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s == '') return true;
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i])
        }
        if (s[i] == ')') {
            if (stack[stack.length - 1] == '(') {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
        if (s[i] == ']') {
            if (stack[stack.length - 1] == '[') {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
        if (s[i] == '}') {
            if (stack[stack.length - 1] == '{') {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
    return false
};