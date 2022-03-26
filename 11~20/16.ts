/* # 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다. */

const t16 = (n: string) => {
  const r = n.split("").reverse().join("");
  console.log(r);
};

t16("거꾸로");
