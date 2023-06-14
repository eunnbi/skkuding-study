/* 뒤로가기 기능 구현 */
const goBackButton = document.querySelector("button.go-back-button")!;
goBackButton.addEventListener("click", () => {
  window.history.back();
});
