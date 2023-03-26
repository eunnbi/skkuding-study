/* 다크모드 기능 구현 */
const themeButton = document.querySelector("button.theme-button");
const KEY = "theme";
// click 이벤트 리스너 추가
themeButton.addEventListener("click", () => {
  // document.documentElement: 최상위 요소 (html 요소)
  if (document.documentElement.classList.contains("dark")) { // html 요소의 class 목록에 "dark" 클래스가 포함되었는지 확인
    localStorage.setItem(KEY, JSON.stringify("light")); // localStorage API
    document.documentElement.classList.remove("dark");
    localStorage.setItem(KEY, JSON.stringify("dark")); // JSON.stringfy 메서드: JavaScript 값을 JSON 문자열로 변환한다.
    document.documentElement.classList.add("dark");
  }
});
// window의 DOMContentLoaded 이벤트: 브라우저가 HTML 파일을 전부 읽고 DOM 트리를 완성하는 즉시 해당 이벤트가 발생한다.
window.addEventListener("DOMContentLoaded", () => {
  const value = localStorage.getItem(KEY);
  if (value !== null) {
    const theme = JSON.parse(value); // JSON.parse 메서드: JSON 문자열을 Javascript 값으로 변환한다.
    if (theme === "light") {
      document.documentElement.classList.remove("dark"); 
    } else {
      document.documentElement.classList.add("dark"); 
    }
  }
});
