/* # 문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
입력
aaabbbbcdddd

출력
a3b4c1d4
*/

const t61 = (n: string) => {
  let r = n.split("");
  let s = [];
  let c = 1;
  for (let i = 0; i < r.length; i++) {
    if (r[i] === r[i + 1]) {
      c += 1;
    } else {
      s.push(r[i] + c);
      c = 1;
    }
    console.log(c);
  }
  console.log(s.join(""));
};

t61("aaabbbbcdddd");
