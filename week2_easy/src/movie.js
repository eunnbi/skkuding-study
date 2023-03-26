/* 뒤로가기 기능 구현 */
const goBackButton = document.querySelector("button.go-back-button");
goBackButton.addEventListener("click", () => {
  window.history.back(); // window history 객체의 back 메서드 활용 
});
