/* # 문제62 : 20190923출력하기

`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다. */

/* optional chaining ?. 매개변수가없는 중첩 객체를 에러없이 안전하게 접근 가능
정보가 없어도 에러를 발생시키지않고 undefined를 반환

let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않습니다. 뒤에일을 멈춥니다
alert(x); // 0, x는 증가하지 않습니다.
*/

const t62 = (n: string) => {
  console.log(
    `${n.match(/a/g)?.length}${Number(n.match(/b/g))}${n.match(/c/g)?.length}${
      n.match(/d/g)?.length
    }${Number(n.match(/e/g))}${n.match(/f/g)?.length}${n.match(/g/g)?.length}${
      n.match(/h/g)?.length
    }`
  );
};

t62("aacdddddddddfffffffffgghhh");
