/* # 문제51 : merge sort를 만들어보자

병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

> 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
> */

function mergeSort(arr) {  /* 병합정렬 */
  if (arr.length <= 1) {  /* arr.length가 1이하면 계산할 필요가없음 */
    return arr;
  }

  const mid = Math.floor(arr.length / 2); /* 병합정렬은 반 잘라서 계산한다 */
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));  /* 재귀함수 */
}

function merge(left, right) {
  let result = [];  /* 결과값 담기 */

  while (left.length && right.length) { /* 둘중 하나라도 다 없어질때까지 돌아감 */
    if (left[0] < right[0]) { /* 각 0 index끼리 검사하고 작은수를 넣어줌 */
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) { /* 남은 친구를 일단 넣음 재귀로 계속 돌릴예정 */
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort([1, 3, 2, 5, 6, 8, 7, 9, 12, 11]));
