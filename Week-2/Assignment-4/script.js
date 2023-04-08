const newMessage = document.getElementById("message");
const actionBtn = document.getElementById("action-btn");

newMessage.addEventListener("click", function () {
  newMessage.innerHTML = "<h1>Have a Good Time!</h1>";
});

actionBtn.addEventListener("click", function () {
  const content = document.querySelector(".contents2");
  if ((content.style.display = "none")) {
    content.style.display = "";
  }
});
