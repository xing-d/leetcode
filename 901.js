
var StockSpanner = function () {
    this.stack = [[-1, Infinity]];
    this.curDay = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    while (price >= this.stack[this.stack.length - 1][1]) {
        this.stack.pop();
    }
    this.stack.push([++this.curDay, price]);
    return this.curDay - this.stack[this.stack.length - 2][0]
};


var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while (this.stack.length && this.stack[this.stack.length-1][0] <= price) {
        span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
};

