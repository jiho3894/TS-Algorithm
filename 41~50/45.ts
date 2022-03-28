/* # 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2019)를 출력해보세요.** */

const t45 = () => {
  let s = new Date().getTime();
  let r = Math.floor(s / (3600 * 24 * 365 * 1000)) + 1970;
  console.log(r);
  /* 
  let test = new Date().getFullYear();
  console.log(test);
  */
};

t45();
