var paragraph1 = document.getElementById("oldText");
var originalText = paragraph1.textContent;
var newText = "New text";
var isOrginal = true;

function changeText() {
  if (isOrginal) {
    paragraph1.textContent = newText;
  } else {
    paragraph1.textContent = originalText;
  }
  isOrginal = !isOrginal;
}

var changeButton = document.getElementById("changeText");
changeButton.addEventListener("click", changeText);

var paragraph2 = document.getElementById("arrayText");
var originalText = paragraph2.textContent;
var textArray = ["25% done", "50% done", "95% done", "You made it"];
var currentIndex = 0;

function changeArrayText() {
  if (currentIndex < textArray.length) {
    paragraph2.textContent = textArray[currentIndex];
    currentIndex++;
  } else {
    paragraph2.textContent = originalText;
    currentIndex = 0;
  }
}

var changeButton = document.getElementById("changeArrayText");
changeButton.addEventListener("click", changeArrayText);

document.addEventListener("DOMContentLoaded", function () {
  var password = "123";
  var passwordInput = document.getElementById("password");
  var resultParagraph = document.getElementById("result");
  var modal = document.getElementById("myModal");

  function checkPassword() {
    if (passwordInput.value === password) {
      resultParagraph.textContent = "Password is valid";
      resultParagraph.style.color = "green";
      resultParagraph.style.fontSize = "14px";
      showModal();
    } else {
      resultParagraph.textContent = "Password is invalid";
      resultParagraph.style.color = "red";
      resultParagraph.style.fontSize = "12px";
      closeModal();
    }
  }

  function showModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  document
    .getElementById("checkPassword")
    .addEventListener("click", checkPassword);
});
