//모듈을 추출
const os = require('os');

//모듈을 사용
console.log(os.hostname()); //호스트이름
console.log(os.type());     //이름
console.log(os.platform()); //플랫폼
console.log(os.arch());     //아키텍쳐
console.log(os.release());  //버전
console.log(os.uptime());   //실행된 시간
console.log(os.loadavg());  //로드 에버리지 정보 배열
console.log(os.totalmem()); //총 메모리
console.log(os.freemem());  //사용가능한 메모리
console.log(os.cpus());     //CPU정보
console.log(os.networkInterfaces());  //네트워크 인터페이스 정보
