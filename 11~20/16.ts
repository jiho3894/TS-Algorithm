/* # 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다. */

const t16 = (n: string) => {
  /* reverse는 배열의 순서를 바꿔주기때문에 기존 string을 split으로 쪼개 배열형태로 만들었음 */
  const r = n.split("").reverse().join("");
  console.log(r);
};

t16("거꾸로");
