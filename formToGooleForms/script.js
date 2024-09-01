const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function validateName() {
  const name = document.getElementById("fullName").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Full Name is Required";
    return false;
  }

  nameError.innerHTML = "<i class='bx bxs-check-circle'></i>";
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phoneNumber").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is Required";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "Phone Number should be exactly 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone Number should contain only digits";
    return false;
  }

  phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
  return true;
}

function validateEmail() {
  const email = document.getElementById("userEmail").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email address";
    return false;
  }

  emailError.innerHTML = "<i class='bx bxs-check-circle'></i>";
  return true;
}

function validateMessage() {
  const message = document.getElementById("message-holder").value;
  const needed = 30;
  const temp = needed - message.length;

  if (temp > 0) {
    messageError.innerHTML = temp + "\nMore character required";
    return false;
  }

  messageError.innerHTML = "<i class='bx bxs-check-circle'></i>";
  return true;
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw44MJhQOPDgfs3PKRVUc14cENrWU0wSsJpFCSgGOqpLUFp9kmTh3PJy486szhp6rGR/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("submitted");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json(); // or response.text(), depending on your needs
    })
    .then((data) => {
      setTimeout(() => {
        form.reset();
        msg.innerHTML = "Submitted";
      }, 5000);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
