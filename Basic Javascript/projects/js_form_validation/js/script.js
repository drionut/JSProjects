function validateFields() {
  var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  var message = document.getElementById("textArea");

  if (fullName.value == "") {
    document.getElementById("fullNameError").style.display = "block";
    fullName.style.border = "1px solid #ff0060";
    return false;
  } else {
    document.getElementById("fullNameError").style.display = "none";
    fullName.style.border = "1px solid #000504";
  }
  if (email.value == "") {
    document.getElementById("emailError").style.display = "block";
    email.style.border = "1px solid #ff0060";
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    email.style.border = "1px solid #000504";
  }
  if (message.value == "") {
    document.getElementById("messageError").style.display = "block";
    message.style.border = "1px solid #ff0060";
    return false;
  } else {
    document.getElementById("messageError").style.display = "none";
    message.style.border = "1px solid #000504";
  }
}
