/* # 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21) */

const t46 = () => {
  /* let sum = 0;
  for (let i = 1; i <= 20; i++) {
    if (i < 10) {
      sum += i;
    } else if (i == 20) {
      sum += 2;
    } else {
      let r = Math.floor(i % 10);
      sum += r + 1;
    }
  }
  console.log(sum); */

  let arr = [];
  let sum = 0;

  for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
  }

  arr.forEach((n) => {
    let a46 = n % 10;
    let b46 = Math.floor(n / 10);
    sum += a46 + b46;
  });

  console.log(sum);
};

t46();
