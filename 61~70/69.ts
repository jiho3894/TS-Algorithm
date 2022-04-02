/* # 문제69 : 골드바흐의 추측

골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 
합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 

* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요. */

const t69 = (n: number) => {
  let prime: number[] = [];
  let bolPrime = true;

  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        bolPrime = false;
      }
    }
    if (bolPrime) {
      prime.push(i);
    }
    bolPrime = true;
  }
  /* 이 부분까지 해당 n보다 작은 소수들을 prime 배열에 넣어둠 */
  console.log(prime);
  let result: number[][] = [];
  prime.map((num, index) => {
    /* 첫번째 숫자부터 n값을 빼고 나온값이 prime배열에 존재하는지 확인하고 그 값을 출력 */
    let sum = prime.indexOf(n - num);
    if (sum !== -1 && prime[sum] < prime[index]) {
      /* ex) [3,53] , [53,3]도 같은 덧셈이라 0index가 작은값만 넣기 */
      result.push([prime[sum], prime[index]]);
    }
  });
  console.log(result);
};

t69(56);
