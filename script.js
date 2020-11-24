const type = document.querySelector(".type");
const sub = document.querySelector(".sub");
const saved = document.querySelector(".saved");

sub.addEventListener("click", send);
function send() {
  let content = type.value;
  if (content === '') {
    alert("Please type a message");
  }
  else{
  saved.innerHTML = content;
  type.value = "";
}
};

