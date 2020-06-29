console.log()   //출력
console.time()   //시간 측정 시작
console.timeEnd()//시간 측정 종료

//특수문자, 설명
%d,s,j(jSON)
//ex)
console.time('alpha');
console.log('output : %d',200);
console.log('JSON :' {name : 'RintIanTta'});
console.timeEnd('alpha');

/*결과
output : 200
JSON : {name : 'RintIanTta'}
alpha: 8.856ms
*/
