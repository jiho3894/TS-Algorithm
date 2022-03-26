/* # 문제8 : 객체의 키 이름 중복

자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. ) */

const t8 = () => {
  let d = {
    height: 180,
    // weight: 78, => ts에서는 애초에 불가
    weight: 84,
    temperature: 36,
    eyesight: 1,
  };

  console.log(d["weight"]);
};

t8();
