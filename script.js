function calulate() {
  const result = document.getElementById("display");
  const btn = document.querySelectorAll(".btn");

  btn.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "C") {
        result.value = "";
      } else if (button.textContent === "=") {
        try {
          result.value = eval(result.value);
        } catch (error) {
          result.value = "ERROR";
        }
      } else {
        result.value += button.textContent;
      }
    });
  });
}

calulate();
