const userDate = document.getElementById("inputDate");

userDate.max = new Date().toISOString().split("T")[0];