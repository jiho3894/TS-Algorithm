/* # 문제9 : concat을 활용한 출력 방법

다음 소스 코드를 완성하여 날짜와 시간을 출력하시오. */

const t9 = () => {
  let year = "2019";
  let month = "04";
  let day = "26";
  let hour = "11";
  let minute = "34";
  let second = "27";
  /* 템플릿 리터럴(Template Literal) */
  let result1 = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  let result2 = year.concat(
    "/",
    month,
    "/",
    day,
    " ",
    hour,
    ":",
    minute,
    ":",
    second
  );
  console.log(result1);
  console.log(result2);
};

t9();
