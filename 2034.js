// 定义 StockPrice 构造函数
var StockPrice = function() {
    this.map = new Map();  // 初始化一个 Map 来存储时间戳和价格
    this.obj = {
        time: -1,  // 初始化最新时间戳
        price: -1  // 初始化最新价格
    };
    // 初始化一个最大优先队列来跟踪最大价格，使用自定义比较函数来比较价格
    this.maxQueue = new MaxPriorityQueue({
        compare: (e1,e2) => e2.price - e1.price
    });
    // 初始化一个最小优先队列来跟踪最小价格，使用自定义比较函数来比较价格
    this.minQueue = new MinPriorityQueue({
        compare: (e1,e2) => e1.price - e2.price
    });
};

/** 
 * 定义 update 方法来更新股票价格
 * @param {number} timestamp 时间戳
 * @param {number} price 价格
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.map.set(timestamp, price);  // 在 Map 中设置时间戳和价格
    this.maxQueue.enqueue({  // 将新价格加入最大优先队列
        time: timestamp,
        price: price
    });
    this.minQueue.enqueue({  // 将新价格加入最小优先队列
        time: timestamp,
        price: price
    });
    if(this.obj.time <= timestamp) {  // 如果新时间戳是最新的，则更新最新价格和时间戳
        this.obj.price = price
        this.obj.time = timestamp
    }
};

/**
 * 定义 current 方法来获取最新价格
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.obj.price;  // 返回最新价格
};

/**
 * 定义 maximum 方法来获取最大价格
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    while(true) {  // 循环直到找到最大价格
        let cur = this.maxQueue.front(), t = this.map.get(cur.time);  // 获取最大优先队列的前端和其时间戳对应的价格
        if(cur.price === t) {  // 如果价格匹配，则返回最大价格
            return cur.price;
        }else this.maxQueue.dequeue();  // 否则从最大优先队列中删除此项并继续循环
    }
};

/**
 * 定义 minimum 方法来获取最小价格
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    while(true) {  // 循环直到找到最小价格
        let cur = this.minQueue.front(), t = this.map.get(cur.time);  // 获取最小优先队列的前端和其时间戳对应的价格
        if(cur.price === t) {  // 如果价格匹配，则返回最小价格
            return cur.price;
        }else this.minQueue.dequeue();  // 否则从最小优先队列中删除此项并继续循环
    }
};

/**
 * 示例用法：
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()  // 实例化 StockPrice 对象
 * obj.update(timestamp,price)  // 更新股票价格
 * var param_2 = obj.current()  // 获取最新价格
 * var param_3 = obj.maximum()  // 获取最大价格
 * var param_4 = obj.minimum()  // 获取最小价格
 */
