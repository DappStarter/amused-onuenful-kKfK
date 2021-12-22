require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift response right protect hover crisp force gaze'; 
let testAccounts = [
"0xaaa25086cdca6937ad6179dbb60d25b53f1639db9345a4b52e5540e66f472ccb",
"0x3f8415a7b4a7c8b96a2481c87dc2b16de39777fef69b18bb8c006210400601f8",
"0x9e4ae9c1cd0661aa5d83f504d6c517f24c9413b9000f9886e9d0b35692556718",
"0xdd9f3aa1ba5ac72ad0b35dbe6725e21e62f4152f603f390f6bf1914cf71df16d",
"0x535749555a27ac8643d937546eec13b42d9bf05a523587c66d18ed7b754dff1b",
"0x0a2a6679c15682bb15e136f483a5123a50b233a0ebae43656aaeb5eead9c93b7",
"0x2b3fa49e9b2db7f30faace93da54959ccfeb5e717617b680a176719ce3c82eee",
"0x86e1d2354767b24eecd48cba6c20951024f87f137bd2f67e30f6ef9230b2fecd",
"0xaf81394ad5ea240773ea01aadf2c764d1902fdd17f6a0f9da6e650e6f2e38cf4",
"0x202b08601bb4c71b3111722f0d51389d90fac620a6108507ccf9eb6fcd480bc8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

