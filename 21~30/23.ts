/**
# 문제23 : OX문제

`console.log(10/3)`의 출력 결과는 **3**이다.

정답 : X 3.33333333333이 나온다 3이 나오기 위해선 소숫점 제거 Math.floor가 필요함

 */

const t23 = (n: number) => {
  console.log(Math.floor(n / 3));
};

t23(10);
