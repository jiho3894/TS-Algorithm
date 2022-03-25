/* # 문제35 : Factory 함수 사용하기

2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

<pass>에 코드를 작성하여 two함수를 완성하세요. */

function t35(n: number) {
  function two(m: number) {
    return m ** n;
  }
  return two;
}

const t35a = t35(2);
const t35b = t35(3);
const t35c = t35(4);

console.log(t35a(10));
console.log(t35b(10));
console.log(t35c(10));
