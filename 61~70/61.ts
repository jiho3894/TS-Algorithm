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
      c += 1; /* 뒤에값과 같으면 a1 , a2 이런식으로 숫자 올리기 */
    } else {
      s.push(r[i] + c); /* 만들어진 a3값을 s변수에 넣기 */
      c = 1;
    }
    console.log(c);
  }
  console.log(s.join(""));
};

t61("aaabbbbcdddd");
