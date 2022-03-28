/* # 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

const t48 = (n: string) => {
  let r = n.split("");
  for (let i = 0; i < r.length; i++) {
    if (r[i] === r[i].toUpperCase()) {
      r[i] = r[i].toLowerCase();
    } else {
      r[i] = r[i].toUpperCase();
    }
  }
  console.log(r.join(""));
};

t48("AAABBBcccddd");
