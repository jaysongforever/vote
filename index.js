const snapshot = require('@snapshot-labs/snapshot.js')
const ethers = require('ethers.js')

const hub = 'https://hub.snapshot.org';
const client = new snapshot.Client712(hub);

const privateKey = ''
const provider = new ethers.providers.JsonRpcProvider('');
const wallet = new ethers.Wallet(privateKey, provider);

;(async () => {
  try {
    const receipt = await client.vote(wallet, wallet.address, {
      space: 'yam.eth',
      proposal: '0x21ea31e896ec5b5a49a3653e51e787ee834aaf953263144ab936ed756f36609f',
      type: 'single-choice',
      choice: 1,
      reason: 'Choice 1 make lot of sense',
      app: 'my-app'
    });
    console.log('🚀 ~ file: index.js ~ line 17 ~ receipt', receipt)
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 21 ~ ; ~ error', error)
  }
})()

