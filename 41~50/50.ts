/* # 문제50 : 버블정렬 구현하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다. */

const t50 = (arr: number[]) => {
  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let swap = result[j];
        result[j] = result[j + 1];
        result[j + 1] = swap;
      }
    }
  }
  console.log(result);
};

t50([1, 2, 4, 3, 5, 8, 11, 7, 10, 9]);
