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

//使用map数据结构
var isValid = function (s) {
    let stack=[]
    let map=new Map().set(')','(').set(']','[').set('}','{');
    for(let i of s){
        if(!map.has(i)){
            stack.push(i)
        }else if(stack.length==0||map.get(i)!==stack.pop()){
            return false
        }
    }
    return stack.length==0
}

/**
 * 
 * 两种方法很大不同：
 * 第一种
 * 遇到'([{'入栈，
 * 遇到')]}'比较栈顶元素，如果匹配就出栈，不匹配则将')]}'也入栈，但其实此时无需将其入栈了，此时如果栈非空已经可以返回false了
· */

// 利用replace,但是时间复杂度很低，stack方法更优
var isValid = function (s) {
    let length=0;
    do{
        length=s.length;
        s=s.replace(/\(\)/g,'').replace(/\[\]/g,'').replace(/\{\}/g,'')
    }while(length!=s.length);
    return s.length==0
};