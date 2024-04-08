let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
      } catch (err) {
        result = "Expression error";
      }
      screen.value = result;
      screenValue = "";
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
