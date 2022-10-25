const snapshot = require('@snapshot-labs/snapshot.js')
const ethers = require('ethers')

const hub = 'https://hub.snapshot.org';
const client = new snapshot.Client712(hub);

// 私钥数组
const privateKeys = ['']
const rpc = ''
const provider = new ethers.providers.JsonRpcProvider(rpc);

;(async () => {
  const vote = (privateKey) => {
    const wallet = new ethers.Wallet(privateKey, provider);
    const receipt = client.vote(wallet, wallet.address, {
      space: 'yam.eth', // 提案所在空间
      proposal: '0x21ea31e896ec5b5a49a3653e51e787ee834aaf953263144ab936ed756f36609f', // 提案id
      type: 'single-choice', // 投票类型，单选，多选...
      choice: 1, // 所投选项
      reason: 'Choice 1 make lot of sense',
      app: 'my-app'
    });
    return receipt
  }
  for(let i = 0; i < privateKeys.length; i++) {
    try {
      const receipt = await vote(privateKeys[i])
      console.log('🚀 ~ file: index.js ~ line 27 ~ ; ~ receipt', receipt)
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 30 ~ ; ~ error', error)
    }
  }
})()

