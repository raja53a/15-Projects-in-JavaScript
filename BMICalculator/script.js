const form = document.querySelector("form"); //taking form submission

form.addEventListener("submit", (e) => {
  //added submit event listener
  e.preventDefault(); //preventing autosubmitting data

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");

  if (height < 0 || isNaN(height)) {
    results.innerText = "Please enter correct height";
  } else if (weight < 0 || isNaN(weight)) {
    results.innerText = "Please enter correct weight";
  } else {
    const rate = (weight / (height / 100) ** 2).toFixed(2);
    results.innerText = `Your BMI is: ${rate}`;

    const message = document.getElementById("message");
    if (rate < 18.6) {
      message.innerText = "Under Weight";
    } else if (rate > 18.6 && rate < 24.9) {
      message.innerText = "Normal";
    } else {
      message.innerText = "Overweight";
    }
  }
});
