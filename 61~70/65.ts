/* # 문제65 : 변형된 리스트

a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요. */

const t65 = () => {
  const a = [1, 2, 3, 4];
  const b: string[] = ["a", "b", "c", "d"];
  /* 이중배열안에 string과 number가 동시에 존재함 (string | number) => 숫자or문자열 [][] => 이중배열 */
  let s: (string | number)[][] = [];

  a.map((data, index) => {
    return s.push([data, b[index]]);
  });
  console.log(s);
};

t65();
