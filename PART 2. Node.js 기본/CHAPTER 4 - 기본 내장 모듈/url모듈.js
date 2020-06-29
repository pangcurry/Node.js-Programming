const url = require('url');

//parse
const parsedObject = url.parse('https://github.com/pangcurry');
console.log(parsedObject);

//url 모듈의 메서드
parse()         //URL문자열을 URl객체로 변환
format(urlObj)  //url객체를 url문자열로 변환
resolve(from,to)//매개변수를 조합해 완전한 URL문자열ㅇ르 생성
