/* # 문제59 : 빈칸채우기

총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
입력
hi
출력
========================hi========================
*/

const t59 = (n: string) => {
  let r = n.length;
  let t = n.split("");
  let e = "=";
  let s = [];
  for (let i = 1; i <= 50 - r; i++) {
    s.push(e);
  }
  for (let i = 0; i < r; i++) {
    s.splice(Math.round((50 - r) / 2) + i, 0, t[i]);
  }
  console.log(s.join(""));
};

t59("hi");
