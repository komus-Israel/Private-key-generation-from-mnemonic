import * as bip39 from 'bip39'
import * as crypto from 'crypto'
import * as ethers from 'ethers'

// seed
const randomBytes = crypto.randomBytes(16)

// mnemonic
const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'))


console.log(mnemonic)

//  generate key from mnemonic
const wallet = ethers.Wallet.fromMnemonic(mnemonic)

console.log(wallet.privateKey)
console.log(wallet)
