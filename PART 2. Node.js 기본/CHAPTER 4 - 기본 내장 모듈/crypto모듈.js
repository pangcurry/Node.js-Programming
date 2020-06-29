//해시
const crypto = require('crypto');

const shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
const output = shasum.digest('hex');

console.log('crypto_hash:',output);

//변수선언
const key = '아무도 알지 못하는 나만의 비밀 키';
const input = 'PASSWORD';

//암호화
const cipher = crypto.createCipher('aes192',key);
cipher.update(input,'utf8','base64');
const cipheredOutput = cipher.final('base64');

//암호화 해제
const decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredOutput,'base64','utf8');
const decipheredOutput = decipher.final('utf8');

console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOutput);
console.log('암호화 해제 : ' + decipheredOutput);
