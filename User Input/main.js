const registrationBox = document.getElementById("registrationBox");
const loginBox = document.getElementById("loginBox");

function createAcc() {
  const inputName = document.getElementById("inputName").value;
  const emailAddress = document.getElementById("emailAddress").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const tableBody = document.getElementById("tableBody");

  const newRow = tableBody.insertRow(0);

  const cellName = newRow.insertCell(0);
  const cellEmail = newRow.insertCell(1);
  const cellPhone = newRow.insertCell(2);
  const cellPassword = newRow.insertCell(3);

  if ((newPassword == confirmPassword)&&(inputName!=='')&&(emailAddress!=='')&&(newPassword!=='')) {
    cellName.innerHTML = inputName;
    cellEmail.innerHTML = emailAddress;
    cellPhone.innerHTML = phoneNumber;
    cellPassword.innerHTML = newPassword;
    registrationBox.style.display = "none";
    loginBox.style.display = 'block'
  } else if((newPassword !== confirmPassword)){
    alert("Password Mismatch");
  }

}

function loginFnc(){
    document.write("Hello Bangladesh")
}


