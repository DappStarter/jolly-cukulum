require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach rival punch pulse install hat army gaze'; 
let testAccounts = [
"0xc7751f8c11b39df31879ed57bb263a6a6ca519ec12cbe6b06d202a218acd1fd8",
"0x33605f398d3daa47b3f9eaaf1e292e7252427d2b0ff9a3102f7acbec02fe0a56",
"0x4a35f9f6881d883f688523c4082df2b3d2c538a23077d171fb454a23dea32a24",
"0x1689fdac41e194590d0edf1a8459dda80e152b6cfe8202a9c4cd3e9097948196",
"0x94b9603092152d080be67b98948ece3f7f2151707a8486f8f8bbe460a849bf84",
"0x8701ed9e03d614bd3f27e4f5ab572a3eb68ee5a67f151d4d765ee18fa1b4a915",
"0x7b566a37df17ce2ab8eb62448bae2666985459c2a990467bfd2127a92c9c0518",
"0xed6ec191da0fdc032ce5748f45b6f6b6ca401ce53068824e905c79b232811a24",
"0xd23b97e443a3ee845fc87003e45f2a2cc2f29d9b3452fcdbae1cc0d90f0b8ca2",
"0xcf221c7940e57413bdcdccee9ece71c8c8961c298cafc83e3367d79204a29f88"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
