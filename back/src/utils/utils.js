/**
 * 주어진 타임스탬프를 형식화된 날짜와 시간 문자열로 변환하는 함수.
 *
 * @param {number} timeStamp - 변환할 타임스탬프 (밀리초 단위)
 * @param {string} dateSeparator - 날짜 요소 사이에 사용할 구분자 (기본값: "-")
 * @param {string} timeSeparator - 시간 요소 사이에 사용할 구분자 (기본값: ":")
 * @return {string} - 형식화된 날짜와 시간 문자열 (예: "2023-09-18 14:30:45")
 *
 * @example
 * // 사용 예:
 * var timeStamp = 1631976645000; // 2021년 9월 18일 14시 30분 45초의 타임스탬프
 * var formattedDate = formatTimeStamp(timeStamp); // "2023-09-18 14:30:45"를 반환
 */
function formatTimeStamp(timeStamp, dateSeparator = "-", timeSeparator = ":") {
  var date = new Date(timeStamp); // 타임스탬프를 인자로 받아 Date 객체 생성

  // 생성한 Date 객체에서 년, 월, 일, 시, 분, 초를 각각 문자열로 추출
  var year   = date.getFullYear().toString();           // 년도
  var month  = ("0" + (date.getMonth() + 1)).slice(-2); // 월 2자리 (01, 02 ... 12)
  var day    = ("0" + date.getDate()).slice(-2);        // 일 2자리 (01, 02 ... 31)
  var hour   = ("0" + date.getHours()).slice(-2);       // 시 2자리 (00, 01 ... 23)
  var minute = ("0" + date.getMinutes()).slice(-2);     // 분 2자리 (00, 01 ... 59)
  var second = ("0" + date.getSeconds()).slice(-2);     // 초 2자리 (00, 01 ... 59)

  // 형식화된 문자열 생성
  var formattedDateTime = `${year}${dateSeparator}${month}${dateSeparator}${day} ${hour}${timeSeparator}${minute}${timeSeparator}${second}`;

  return formattedDateTime;
}

export default formatTimeStamp;
