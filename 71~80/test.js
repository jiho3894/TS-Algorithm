function solution(n) {
  let stack = [];
  String(n)
    .split("")
    .reverse()
    .map((data) => stack.push(Number(data)));
  console.log(stack);
}
solution(12345);
