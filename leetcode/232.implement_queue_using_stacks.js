/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.input_stack=[];
    this.output_stack=[];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input_stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.output_stack.length==0){
        while(this.input_stack.length!=0){
            this.output_stack.push(this.input_stack.pop())
        }
    }
    return this.output_stack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.output_stack.length==0){
        while(this.input_stack.length!=0){
            this.output_stack.push(this.input_stack.pop())
        }
    }
    return this.output_stack[this.output_stack.length-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input_stack.length==0&&this.output_stack.length==0
};

// 通过两个stack(input_stack和output_stack来实现队列)

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */