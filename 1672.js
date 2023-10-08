function maximumWealth(accounts) {
    return Math.max(...accounts.map(account => account.reduce((a, b) => a + b, 0)));
    // return accounts.map(account => account.reduce((a, b) => a + b, 0));
}

const accounts1 = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts1));

const accounts2 = [[1, 5], [7, 3], [3, 5]];
console.log(maximumWealth(accounts2));  
