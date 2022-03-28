/* # 문제44 : 각 자리수의 합

************************************************
prompt는 string이 나오는데 string을 나눠서 더한다고?
************************************************

**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

**예를들어**
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다. 

입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24*/

const t44 = (n: number) => {
  let sum = 0;
  let s = n.toString();
  for (let i = 0; i < s.length + 1; i++) {
    let r = Math.floor((n / 10 ** i) % 10);
    sum += r;
  }
  console.log(sum);

  /*
  let n = prompt('숫자를 입력하세요.');
  let n2 = Number(n) => ...?
  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  console.log(sum);
  */
};

t44(3849);
