const snapshot = require('@snapshot-labs/snapshot.js')
// 空间名称
const space = 'gitcoindao.eth';
// 策略
const strategies = []
// 投票网络
const network = '1';
// 快照区块高度
const blockNumber = 15821836;

// 批量查询投票地址数组
const voters = [];

snapshot.utils.getScores(
  space,
  strategies,
  network,
  voters,
  blockNumber
).then(scores => {
  console.log('Scores', scores);
});


