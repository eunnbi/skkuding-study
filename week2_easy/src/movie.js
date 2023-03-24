const goBackButton = document.querySelector("button.go-back-button");
goBackButton.addEventListener("click", () => {
  window.history.back();
});
