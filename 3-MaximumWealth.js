function maximumWealth(accounts) {
    let maxWealth = 0;
  
    for (let i = 0; i < accounts.length; i++) {
      let customerWealth = 0;
  
      for (let j = 0; j < accounts[i].length; j++) {
        customerWealth += accounts[i][j];
      }
  
      maxWealth = Math.max(maxWealth, customerWealth);
    }
  
    return maxWealth;
  }
  
  const accounts = [
    [1, 2, 3],
    [3, 2, 1],
    [7, 2, 2]
  ];
  console.log(maximumWealth(accounts)); 