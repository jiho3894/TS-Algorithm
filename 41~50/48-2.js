const readline = require("readline");

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N; // 정수를 저장할 변수
rl.on("line", (line) => {
  N = String(line);
  t53(N);
  rl.close(); // 입력을 꺼줍니다.
});

const t53 = (a) => {
  let b = [];
  let s = "";

  for (let i = 0; i < a.length; i++) {
    //toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
    if (a[i] === a[i].toLowerCase()) {
      b.push(a[i].toUpperCase());
    } else {
      b.push(a[i].toLowerCase());
    }
  }

  for (let j = 0; j < b.length; j++) {
    s += b[j];
  }

  console.log(s);
};
