const passwordBox = document.querySelector(".password");
const passwordLength = 12;
function generatePassword() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allchar = upperCase + lowerCase + numbers + specialChars;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allchar.length);
        console.log(randomIndex);
        password += allchar[randomIndex];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);

    const copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.display = "block";

    setTimeout(() => {
        copiedMessage.style.display = "none";
    }, 2000);
  }
  