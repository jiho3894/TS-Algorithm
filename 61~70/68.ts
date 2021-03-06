/* # 문제68 : 버스 시간표

학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 
버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

**버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램**을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다. 

입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/

const t68 = (time: string[], n: string) => {
  let numTime: string[][] = []; /* 이중배열로 ":"값을 나눈 새로운 값을 넣어둠 */
  let sumTime = [];
  time.map((data) => {
    numTime.push(data.split(":"));
  });
  let arrive = n.split(":"); /* 도착한 시간 값도 나누기 */
  console.log(numTime);
  console.log(arrive);
  let liveTime =
    Number(arrive[0]) * 60 +
    Number(
      arrive[1]
    ); /* 나눈 0index는 시간이니까 *60 1index는 분이니까 그대로 더하기 */
  for (let i in numTime) {
    let hours = Number(numTime[i][0]) * 60;
    let minute = Number(numTime[i][1]);
    sumTime.push(hours + minute); /* 시간표값들도 전부 분으로 바꾸기 */
  }
  let result: string[] = [];
  sumTime.forEach((t) => {
    let missTime = t - liveTime; /* 시간 차 확인하기 */
    if (missTime < 0) {
      result.push("지나갔습니다");
    } else if (missTime > 60) {
      let h = Math.floor(missTime / 60);
      let m = missTime - h * 60;
      if (h < 10 && m < 10) {
        result.push(`0${h}시간 ${m}분`);
      } else if (m < 10) {
        result.push(`${h}시간 0${m}분`);
      } else if (h < 10) {
        result.push(`0${h}시간 0${m}분`);
      }
    } else {
      result.push(`00시간 ${missTime}분`);
    }
  });
  console.log(result);
};

t68(["12:30", "13:20", "14:13"], "12:40");
