const newMessage = document.getElementById("message");
const actionBtn = document.getElementById("action-btn");

newMessage.addEventListener("click", function () {
  newMessage.textContent = "Have a Good Time!";
});

actionBtn.addEventListener("click", function () {
  const content = document.querySelector(".contents2");
  if ((content.style.display = "none")) {
    content.style.display = "";
  }
});
