/* # 문제66 : 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다. 

**입력**
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

**출력**
["가능", "불가능", "가능", "가능", "가능"]*/

const t66 = (arr: string[], rule: string) => {
  let rules = rule.split("");
  let result = [];
  for (let i in arr) {
    let s = []; /* 매 단어 검색하다 stack 초기화 */
    for (let j in rules) {
      if (arr[i].indexOf(rules[j]) !== -1) {
        /* ABD의 값이 존재하면 stack에 index값 넣어주기 */
        s.push(arr[i].indexOf(rules[j])); /* 몇번째 값인지 확인 */
      }
    }
    console.log(s);
    result.push(test(s));
  }
  console.log(result);
};

const test = (s: number[]) => {
  for (let i = 0; i < s.length; i++) {
    /* 해당 index값의 순서가 올바른지 확인하는 함수 */
    if (s[i] > s[i + 1]) {
      return "불가능";
    }
  }
  return "가능";
};

t66(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD");
